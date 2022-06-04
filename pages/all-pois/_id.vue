<template>
  <div class="container mt-5">
    <BreadCrump :items="breadcrumps" />
    <TopMapDescription :section="poi" />
    <div class="row">
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
    <div class="row">
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
import BreadCrump from '~/components/BreadCrump.vue'
export default {
  name: 'SinglePoi',
   components: {
    BreadCrump,
  },
    async asyncData({ route, $axios }) {
    // Get the id of the poi to show from route
    const { id } = route.params
    const { data } = await $axios.get('/api/poi/' + id)
    return {
      poi: {
      name: data.name,
      category: data.poiTypeId,
      description: data.description,
      image: data.image,
      map: {
          bbox: data.bbox,
          marker: data.marker
        },
      op_hours: data.openingHours,
      // used for top map description POI-Photo text
      type: "POI"
      },
      h_events: data.events,
      in_itin: data.itineraries,
      PoiTypeName: data.poi_type.name,
    }
  },
  data() {
    return {
      // they are used to reroute when a card is pressed
      pathToItinerary:"all-itineraries",
      pathToEvent:"all-events"
    }
  },
  computed: {
    // define breadcrumbs routes
    breadcrumps() {
      return [
        {
          label: 'All Places',
          url: '/all-pois',
        },
        {
          label:this.PoiTypeName,
          url:'/poi-category/'+this.poi.category,
        }       
      ]
    },
  },
  
}
</script>

<style scoped>
</style>