const express = require('express')
const app = express()
const { Sequelize, DataTypes } = require("sequelize")
app.use(express.json())

// Development
const database = new Sequelize("postgres://postgres:postgres@localhost:5432/locus", {
    logging: false //Set to true to log DB actions
})

// Production (use this code when deploying to production in Heroku)
// const pg = require('pg')
// pg.defaults.ssl = true
// const database = new Sequelize(process.env.DATABASE_URL, {
//   ssl: true,
//   dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
// })



// Function that will initialize the connection to the database
async function initializeDatabaseConnection() {
    await database.authenticate()

    // define entities
    const Poi = database.define("poi", {
        name: DataTypes.STRING,
        image: DataTypes.STRING,
        description: DataTypes.TEXT,
        openingHours: DataTypes.TEXT,
        bbox: DataTypes.STRING,
        marker: DataTypes.STRING,
    })
    const Poi_Type = database.define("poi_type", {
        name: DataTypes.STRING,
        image: DataTypes.STRING,
        description: DataTypes.TEXT
    })
    const Event = database.define("event", {
        name: DataTypes.STRING,
        image: DataTypes.STRING,
        description: DataTypes.TEXT,
    })
    const Event_Type = database.define("event_type", {
        name: DataTypes.STRING,
        image: DataTypes.STRING,
        description: DataTypes.TEXT
    })
    const Itinerary = database.define("itinerary", {
        name: DataTypes.STRING,
        image: DataTypes.STRING,
        description: DataTypes.TEXT,
        duration: DataTypes.STRING,
        mapillaryLink: DataTypes.STRING,
    })
    const Stop = database.define("stop", {
        order: DataTypes.INTEGER
    })
    const Service = database.define("service", {
        name: DataTypes.STRING,
        address: DataTypes.STRING,
        website: DataTypes.STRING,
        image: DataTypes.STRING,
        openingHours: DataTypes.TEXT,
        
    })
    const Service_Type = database.define("service_type", {
        name: DataTypes.STRING,
        image: DataTypes.STRING,
        description: DataTypes.TEXT
    })
   
    // define entities relationships
    Poi.belongsTo(Poi_Type)
    Poi_Type.hasMany(Poi)//needed to get poi_type and its associated pois preview
    Event.belongsTo(Poi)
    Poi.hasMany(Event)//needed to get poi and its associated events previews
    Event.belongsTo(Event_Type)
    Event_Type.hasMany(Event)//needed to get event_type and its associated events preview
    Poi.belongsToMany(Itinerary, { through: Stop })
    Itinerary.belongsToMany(Poi, { through: Stop })
    Service_Type.hasMany(Service)
    Service.belongsTo(Service_Type)
    
    // careful force true will wipe out db data
    await database.sync({ force: false })

    return {
        Poi,
        Poi_Type,
        Event,
        Event_Type,
        Itinerary,
        Stop,
        Service,
        Service_Type
    }
}


async function runMainApi() {
    const models = await initializeDatabaseConnection()

    // 1 get poi_type full info and associated pois previews (from type id)
    app.get('/poi-category/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.Poi_Type.findOne({
            where: { id },
            attributes: {exclude:['createdAt','updateAt']},
            include: [{
                model: models.Poi,
                attributes: ['id','name','image']
            }]
        })
        return res.json(result)
    })

    // 2 get poi full info and associated event and itinerary previews (from poi id)
    app.get('/poi/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.Poi.findOne({
            where: { id },
            attributes: {exclude:['createdAt','updateAt']},
            include: [{
                model: models.Itinerary,
                attributes: ['id', 'name', 'image'],
                through: { attributes: ['order'] }
            }, {
                model: models.Event,
                attributes: ['id', 'name', 'image'],
            },
            {
                model: models.Poi_Type,
                attributes:['name']
            }]
        })
        return res.json(result)
    })

    // 3 get event full info and associated poi preview (from event id)
    app.get('/event/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.Event.findOne({
            where: { id },
            attributes: {exclude:['createdAt','updateAt']},
            include: [{
                model: models.Poi,
                attributes: ['id', 'name', 'image'],
            },
        {
            model: models.Event_Type,
            attributes:['name']
        }]
        })
        return res.json(result)
    })

    // 4 get event_type full info and associated events preview (from type id)
    app.get('/event-season/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.Event_Type.findOne({
            where: { id },
            attributes: {exclude:['createdAt','updateAt']},
            include: [{
                model: models.Event,
                attributes: ['id', 'name', 'image'],
            }]
        })
        return res.json(result)
    })

    // 5 get itinerary full info and associated poi preview (from itinerary id)
    app.get('/itinerary/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.Itinerary.findOne({
            where: { id },
            attributes: {exclude:['createdAt','updateAt']},
            include: [{
                model: models.Poi,
                attributes: ['id', 'name', 'image'],
                through: { attributes: ['order'] }
            }]
        })
        return res.json(result)
    })

    // 6 get all itineraries previews
    app.get('/all-itineraries', async (req, res) => {
        const result = await models.Itinerary.findAll({
            attributes:['id','name','image']
        })
        return res.json(result)
    })

    // 7 get all poi previews and categories preview
    app.get('/all-pois', async (req, res) => {
        const pois = await models.Poi.findAll({
            attributes: ['id','name','image']
        })
        const types = await models.Poi_Type.findAll({
            attributes: ['id','name','image']
        })
        const result = {
            pois: pois,
            categories: types
        }
        return res.json(result)
    })

    // 8 get all event previews and categories preview
    app.get('/all-events', async (req, res) => {
        const events = await models.Event.findAll({
            attributes: ['id','name','image']
        })
        const types = await models.Event_Type.findAll({
            attributes:['id','name','image']
        })
        const result = {
            events: events,
            seasons: types
        }
        return res.json(result)
    })

    // 9 get all services previews 
    app.get('/all-serviceTypes', async (req, res) => {
        const result = await models.Service_Type.findAll({
            attributes:['id','name','image'],
            include:[{
                limit:3,
                model:models.Service,
                // TODO: filter data
                // attributes:['name']
            }]
        })
        return res.json(result)
    })

    // 10 get serviceType full info
    app.get('/serviceType/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.Service_Type.findOne({
            where: { id },
            attributes: {exclude:['createdAt','updateAt']},
            include: [{
                model: models.Service,
                attributes: ['id', 'name','address','website','image', 'openingHours'],
            }]
        })
        return res.json(result)
    })

}

runMainApi()

export default app
