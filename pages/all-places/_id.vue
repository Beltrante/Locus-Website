/* Page for the individual POI */
<template>
  <!-- class container in order to center the contend -->
  <!-- class mt-5 in order to heva a margin top of 5 units -->
  <div class="container mt-5">
    <!-- this component will include the breadcrumps in the page -->
    <BreadCrump :items="breadcrumps" />
    <!-- this component creates the entire "first row" of the page 
    composed of Title, Description, Map and opening hours related to 
    the selected POI -->
    <TopMapDescription :section="poi" />
    <div class="row">
      <!-- Display this h2 only if there is content to be displayed thanks to the "v-if" -->
      <h2 v-if="h_events.length != 0" class="subtitle">
        Events you will find in this place
      </h2>
      <!-- this component is used to display the cards of the Events hosted in the 
      selected POI (the card is clickable and redirects to the depicted Event) -->
      <CardComponent
        v-for="event in h_events"
        :id="event.id"
        :key="event.id"
        :name="event.name"
        :image="event.image"
        :path="pathToEvent"
        class="col-xl-3 p-2"
      />
    </div>
    <div class="row">
      <!-- Display this h2 only if there is content to be displayed thanks to the "v-if"-->
      <h2 v-if="in_itin.length != 0" class="subtitle">
        This place is involved in the following Itineraries
      </h2>
      <!-- this component is used to display the cards of the Itineraries passing through the 
      selected POI (the card is clickable and redirects to the depicted Itinerary) -->
      <CardComponent
        v-for="itinerary in in_itin"
        :id="itinerary.id"
        :key="itinerary.id"
        :name="itinerary.name"
        :image="itinerary.image"
        :path="pathToItinerary"
        class="col-xl-3 p-2"
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
          marker: data.marker,
        },
        op_hours: data.openingHours,
      },
      h_events: data.events,
      in_itin: data.itineraries,
      PoiTypeName: data.poi_type.name,
    }
  },
  data() {
    return {
      // they are used to reroute when a card is pressed
      pathToItinerary: 'all-itineraries',
      pathToEvent: 'all-events',
    }
  },
  head() {
    return {
      title: `${this.poi.name} | Places`,
      meta: [
        {
          hid: 'descriptionSinglePlace',
          name: 'description',
          content: 'specific place and its related info',
        },
        {
          hid: 'keywordsSinglePlace',
          name: 'keywords',
          content: [this.PoiTypeName,"leisure", "Place", "Bergamo"],
        },
      ],
    }
  },
  computed: {
    // define breadcrumbs routes
    breadcrumps() {
      return [
        {
          label: 'All Places',
          url: '/all-places',
        },
        {
          label: this.PoiTypeName,
          url: '/place-category/' + this.poi.category,
        },
      ]
    },
  },
}
</script>

<style scoped>
</style>