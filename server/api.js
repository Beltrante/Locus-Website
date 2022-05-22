const express = require('express')
const app = express()
const { Sequelize, DataTypes } = require("sequelize")
app.use(express.json())

// Development
const database = new Sequelize("postgres://postgres:postgres@localhost:5432/locus",{
    logging: false //do not log actions
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

    //define entities
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
        image: DataTypes.STRING,
        description: DataTypes.TEXT
    })
    const Service_Type = database.define("service_type", {
        name: DataTypes.STRING,
        image: DataTypes.STRING,
        description: DataTypes.TEXT
    })
    const Point_Category = database.define("point_category", {
        category: DataTypes.STRING,
    })

    //define entities relationships
    Poi.belongsTo(Poi_Type)
    Poi_Type.hasMany(Poi)//needed to get poi_type and its associated pois preview
    Poi.belongsTo(Point_Category)
    Event.belongsTo(Poi)
    Poi.hasMany(Event)//needed to get poi and its associated events previews
    Event.belongsTo(Event_Type)
    Event_Type.hasMany(Event)//needed to get event_type and its associated events preview
    Poi.belongsToMany(Itinerary,{ through: Stop })
    Itinerary.belongsToMany(Poi,{ through: Stop })
    Service.belongsTo(Service_Type)
    Service.belongsTo(Point_Category)
    //careful force true will wipe out db data
    await database.sync({ force: false })

    return{
        Poi,
        Poi_Type,
        Event,
        Event_Type,
        Itinerary,
        Stop,
        Service,
        Service_Type,
        Point_Category
    }
}


async function runMainApi(){
    const models = await initializeDatabaseConnection()
    
//6 get all poi types previews
app.get('/poiTypes', async(req,res)=>{
    const result = await models.Poi_Type.findAll()
    return res.json(result)
}) 

//7 get all event types previews
app.get('/eventTypes', async(req,res)=>{
    const result = await models.Event_Type.findAll()
    return res.json(result)
})

//8 get all itineraries previews
app.get('/itineraries', async(req,res)=>{
    const result = await models.Itinerary.findAll()
    return res.json(result)
})

//1get poi_type full info and associated pois previews (from type id)
app.get('/poiType/:id', async(req,res)=>{
    const id = +req.params.id
    const result = await models.Poi_Type.findOne({
        where:{id},
        include: [{
            model: models.Poi,
            attributes: {exclude: ['description']}}]//leave only preview attributes
    })
    return res.json(result)
})

//2get poi full info and associated event and itinerary previews (from poi id)
app.get('/poi/:id', async(req,res)=>{
    const id = +req.params.id
    const result = await models.Poi.findOne({
        where:{id},
        include: [{
            model: models.Itinerary,
            attributes: {
                exclude: ['description']
            },
            through: {attributes: ['order']}},{
            model: models.Event,
            attributes: {
                exclude: ['description']
            }
            }]//leave only preview attributes
    })
    return res.json(result)
})

//3get event full info and associated poi preview (from event id)
app.get('/event/:id', async(req,res)=>{
    const id = +req.params.id
    const result = await models.Event.findOne({
        where:{id},
        include: [{
            model: models.Poi,
            attributes: {exclude: ['description']}}]//leave only preview attributes
    })
    return res.json(result)
})

//4 get event_type full info and associated events preview (from type id)
app.get('/eventType/:id', async(req,res)=>{
    const id = +req.params.id
    const result = await models.Event_Type.findOne({
        where:{id},
        include: [{
            model: models.Event,
            attributes: {exclude: ['description']}}]//leave only preview attributes
    })
    return res.json(result)
})

//5 get itinerary full info and associated poi preview (from itinerary id)
app.get('/itinerary/:id', async(req,res)=>{
    const id = +req.params.id
    const result = await models.Itinerary.findOne({
        where:{id},
        include: [{
            model: models.Poi,
            attributes: {exclude: ['description']},
            through: {attributes: ['order']}}]//leave only preview attributes
    })
    return res.json(result)
})
}



runMainApi()

export default app
