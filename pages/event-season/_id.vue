/* Page for the individual EVENT CATEGORY */
<template>
  <!-- class container in order to center the contend -->
  <!-- class mt-5 in order to heva a margin top of 5 units -->
  <div class="container mt-5">
    <!-- this component will include the breadcrumps in the page -->
    <BreadCrump :items="breadcrumps" />
    <!-- this component creates the top (first row) of the page. 
    The passed parameters are the name (for the title of the page), 
    the descritpion (in order to describe the content) and the tags 
    (in order to dynamically display the hashtags) -->
    <TopPageGeneric
      :name="info.name"
      :description="info.description"
      :tags="tags"
    />
    <div class="row mt-4">
      <!-- this component is used to display the cards of the Events 
      belonging to the selected Event Category (the card is clickable 
      and redirects to the depicted Event) -->
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
    const { data } = await $axios.get('/api/event-season/' + id)

    const tagList = []
    data.events.forEach((event) => {
      tagList.push(event.name)
    })

    return {
      info: {
        name: data.name,
        description: data.description,
      },
      events: data.events,
      tags: tagList,
    }
  },
  data() {
    // used to reroute user when a card is pressed
    return {
      pathToEvent: 'all-events',
    }
  },
  head() {
    return {
      title: `All ${this.info.name} | Events`,
      meta: [
        {
          hid: 'descriptionEventCategory',
          name: 'description',
          content: `Available Events for the ${this.info.name} category`,
        },
        {
          hid: 'keywordsEventCategory',
          name: 'keywords',
          content: [ this.info.name, 'leisure', 'Bergamo'],
        },
      ],
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