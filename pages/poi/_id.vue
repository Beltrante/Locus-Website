<template>
  <div class="container mt-5">
    <TopMapDescription :section="poi" />
    <div class="row stacco-subtitle">
      <h2 class="subtitle">Hosted events</h2>
      <CardComponent
        v-for="event in h_events"
        :key="event.id"
        :cat="event"
        :type="types.event"
        class="col-sm-3 p-2"
      />
    </div>
    <div class="row stacco-subtitle">
      <h2 class="subtitle">Involving Itineraries</h2>
      <CardComponent
        v-for="itinerary in in_itin"
        :key="itinerary.id"
        :cat="itinerary"
        :type="types.itinerary"
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
      type: 'POI',
      img: data.image,
      map: {
          bbox: data.bbox,
          marker: data.marker
        },
      op_hours: openingHours,
      },
      h_events: data.events,
      in_itin: data.itineraries
    }
  },
  data() {
    return {
      types: {
        event: {name: "event"},
        itinerary: {name: "itinerary"}
      }
    }
  }
}
</script>

<style scoped>
</style>