<template>
  <div class="container mt-5">
    <TopMapDescription :section="poi" />
    <div class="row stacco-subtitle">
      <!-- Display this h2 only if there is content to be displayed -->
      <h2 v-if="h_events.length != 0" class="subtitle">Events hosted in this Point of interest</h2>
      <CardComponent
        v-for="event in h_events"
        :id="event.id"
        :key="event.id"
        :name="event.name"
        :image="event.image"
        :path="pathToEvent"
        class="col-sm-3 p-2"
      />
      
    </div>
    <div class="row stacco-subtitle">
      <!-- Display this h2 only if there is content to be displayed -->
      <h2 v-if="in_itin.length != 0" class="subtitle">Itineraries that pass through this point</h2>
      <CardComponent
        v-for="itinerary in in_itin"
         :id="itinerary.id"
        :key="itinerary.id"
        :name="itinerary.name"
        :image="itinerary.image"
        :path="pathToItinerary"
        class="col-sm-3 p-2"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SinglePoi',
    async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/poi/' + id)
    // parsing of the opening hours string 
    const splitted = data.openingHours.split(';')
    const openingHours = []
    splitted.forEach((x, i) => {
      const day = {}
      day.id = i;
      day.str = x
      openingHours.push(day)
      });
    
    return {
      poi: {
      name: data.name,
      description: data.description,
      image: data.image,
      map: {
          bbox: data.bbox,
          marker: data.marker
        },
      op_hours: openingHours,
      },
      h_events: data.events,
      in_itin: data.itineraries,
      // It's here as putting it in data sometimes generated this error: 
      // Error generating route "/undefined/8": This page could not be found 
      pathToItinerary:"itinerary",
      pathToEvent:"event"
    }
  },  
}
</script>

<style scoped>
</style>