<template>
  <div class="container mt-5">
    <BreadCrump :items="breadcrumps" />
    <TopEventDescription
      :image="event.image"
      :name="event.name"
      :description="event.description"
    />
    <hr />
    <div class="row">
      <h2 class="subtitle">Where this event is hosted</h2>
      <!-- Display carta larga con tutto il container più informazioni
      dato che il point of interest da mostrare è uno solo -->
      <CardComponent
        :id="event.HostingPoi.id"
        :name="event.HostingPoi.name"
        :image="event.HostingPoi.image"
        :path="path"
        class="col-lg-7 p-2"
      />
      <div class="col-lg-5 p-3">
        <!-- Passare nome e descrizione relativi all'Hosting Poi.
        avere solo una immagine lunga tutta la pagina senza dare nessuna
        info all'utente sembra un po uno spreco di spazio -->
        <h3 class="sub-sub-title">{{ event.HostingPoi.name }}</h3>
        <TitleDescription :description="event.HostingPoi.description" />
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrump from '~/components/BreadCrump.vue'
export default {
  name: 'SingleEvent',
  components: {
    BreadCrump,
  },

  async asyncData({ route, $axios }) {
    // Get the id of the event to show from route
    const { id } = route.params
    // Make api call for data
    const { data } = await $axios.get('/api/event/' + id)
    return {
      // parse received data (event data and season name for readable bredcrumbs)
      event: {
        id: data.id,
        name: data.name,
        image: data.image,
        description: data.description,
        HostingPoi: data.poi,
        Season: data.eventTypeId,
      },
      SeasonName: data.event_type.name,
    }
  },
  data() {
    return {
      // its used to reroute when a card is pressed
      path: 'all-pois',
    }
  },
  computed: {
    // define breadcrumbs routes
    breadcrumps() {
      return [
        {
          label: 'All Events',
          url: '/all-events',
        },
        {
          label: this.SeasonName,
          url: '/event-season/' + this.event.Season,
        },
      ]
    },
  },
}
</script>

<style scoped>
.event-image {
  height: 100%;
  width: 100%;
}
.sub-sub-title {
  font-weight: 600;
}
</style>