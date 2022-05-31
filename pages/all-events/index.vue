<template>
  <div class="container mt-5">
    <TopPageGeneric 
    :name="header.name"
    :description="header.description"  />
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
    return{
      // parse received data (data for season type preview and events preview)
      seasons: data.seasons,
      events: data.events,
    }
  },

  data() {
    // static data that never changes
    return {
      header: {
        name: 'All Bergamo\'s events',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi veniam in, eos tempora, molestias modi voluptatem totam quidem delenitieveniet obcaecati, atque fugiat! Dolor incidunt excepturi, essedoloremque repellat tempora?',
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