<template>
  <div class="page container mt-5">
    <BreadCrump :items="breadcrumps" />
    <TopPageGeneric 
    :name="info.name"
    :description="info.description"
    :tags="tags"
    />
    <div class="row mt-4 g-0">
      <!-- la classe di CardComponent detta la grandezza della stessa
      tramite il numero "3" -->
      <CardComponent
        v-for="event in events"
         :id="event.id"
        :key="event.id"
        :name="event.name"
        :image="event.image"
        :path="pathToEvent"
        class="col-xl-3 p-2"
       />
    </div>
  </div>
</template>

<script>
import BreadCrump from '~/components/BreadCrump.vue'
export default {
  name: 'EventSeason',
  components: {
    BreadCrump,
  },
  async asyncData({ params, $axios }) {
    // get event-season full data based on route id and relative events preview
    const id = params.id
    const { data } = await $axios.get('/api/event-season/'+id)

    const tagList = []
    data.events.forEach((event) => {
      tagList.push(event.name)
    })

    return {
      info: {
        name: data.name,
        description: data.description
      },
      events: data.events,
      tags: tagList
    }
  },
  data() {
    // used to reroute user when a card is pressed
    return {
      pathToEvent:"all-events"
    }
  },
  computed: {
    // define breadcrumbs route
    breadcrumps() {
      return [
        {
          label: 'All Events',
          url: '/all-events',
        },     
      ]
    },
  },
}
</script>

<style scoped>
</style>