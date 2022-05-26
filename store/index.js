export const state = () => ({
    allOfInfos: [
        {
            id: "poi",
            name: "All our pois",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi veniam in, eos tempora, molestias modi voluptatem totam quidem delenitieveniet obcaecati, atque fugiat! Dolor incidunt excepturi, essedoloremque repellat tempora?"
        },
        {
            id: "event",
            name: "All our events",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi veniam in, eos tempora, molestias modi voluptatem totam quidem delenitieveniet obcaecati, atque fugiat! Dolor incidunt excepturi, essedoloremque repellat tempora?"
        },
        {
            id: "itinerary",
            name: "All our itineraries",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi veniam in, eos tempora, molestias modi voluptatem totam quidem delenitieveniet obcaecati, atque fugiat! Dolor incidunt excepturi, essedoloremque repellat tempora?"
        },
        {
            id: "service",
            name: "All our servicies",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi veniam in, eos tempora, molestias modi voluptatem totam quidem delenitieveniet obcaecati, atque fugiat! Dolor incidunt excepturi, essedoloremque repellat tempora?"
        },   
    ],
    allOfTypeInfos: [
        {
            id: "poi",
            name: "All our poi types",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi veniam in, eos tempora, molestias modi voluptatem totam quidem delenitieveniet obcaecati, atque fugiat! Dolor incidunt excepturi, essedoloremque repellat tempora?"
        },
        {
            id: "event",
            name: "All our event types",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi veniam in, eos tempora, molestias modi voluptatem totam quidem delenitieveniet obcaecati, atque fugiat! Dolor incidunt excepturi, essedoloremque repellat tempora?"
        },
    ]
})

export const getters = {
    getAllOf: (state) => (id) => {
        return state.allOfInfos.find(info => info.id === id)
    },
    getAllOfType:(state)=>(id)=>{
        return state.allOfTypeInfos.find(info => info.id === id)
    } 
}