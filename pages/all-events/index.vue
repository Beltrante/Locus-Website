<template>
<!-- class container in order to center the contend -->
<!-- class mt-5 in order to heva a margin top of 5 units -->
  <div class="container mt-5">
    <!-- the passed parameters are the name (for the title of the page), the descritpion (in order to describe the content) and the tags (in order to dynamically display ) -->
    <TopPageGeneric 
    :name="header.name"
    :description="header.description" 
    :tags="tags" />
    <hr />
    <!-- row of category links -->
    <div class="row">
      <div class="col-lg-4 snippet-categories">
        Choose a category or scroll down to see all the events
      </div>
      <div class="col-lg-8">
        <div class="row">
          <CategoryComponent
            v-for="season in seasons"
            :id="season.id"
            :key="season.id"
            :name="season.name"
            :image="season.image"
            :path="seasonPath"
            class="col-md-6"
          />
        </div>
      </div>
    </div>
    <!-- rows of poi cards -->
    <div class="row mt-4 g-0">
      <CardComponent
        v-for="event in events"
        :id="event.id"
        :key="event.id"
        :name="event.name"
        :image="event.image"
        :path="pathToEvent"
        class="col-xxl-3 p-2"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllEventPage',

  async asyncData({ $axios }) {
    // Get all the events data from server
    const { data } = await $axios.get('/api/all-events')

    const tagList = []
    data.seasons.forEach((season) => {
      tagList.push(season.name)
    })

    return{
      // parse received data (data for season type preview and events preview)
      seasons: data.seasons,
      events: data.events,
      tags: tagList
    }
  },

  data() {
    // static data that never changes
    return {
      header: {
        name: 'All Bergamo\'s events',
        description:
          'Bergamo and its inhabitants are always very active, energetic and friendly. These are the reasons why there is never a shortage of activities, events, opportunities to learn something new or simply to have fun with one\'s companions throughout the year. ',
      },
      // used to reroute when a preview is pressed
      pathToEvent: "all-events",
      seasonPath: "event-season"
    }
  },
  
}
</script>

<style scoped>
</style>