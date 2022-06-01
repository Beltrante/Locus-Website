<template>
  <div class="container mt-5">
    <TopPageGeneric 
    :name="header.name"
    :description="header.description" 
     :tags="tags" />
    <!-- rows of poi cards -->
    <div class="row mt-4 g-0">
      <CardComponent
        v-for="itinerary in itineraries"
        :id="itinerary.id"
        :key="itinerary.id"
        :name="itinerary.name"
        :image="itinerary.image"
        :path="pathToItinerary"
        class="col-lg-3 p-2"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllItinerayPage',

  async asyncData({ $axios }) {
    // Get all the itineraries previews data from server
    const { data } = await $axios.get('/api/all-itineraries')

    const tagList = []
    data.forEach((itinerary) => {
      tagList.push(itinerary.name)
    })

    return {
      itineraries: data,
      tags: tagList
    }
  },
  data() {
    // static data that never changes
    return {
      header: {
        name: 'All Itineraries',
        description:
          'A number of immersive itineraries through Bergamo are proposed here. Each one will allow you to discover a different aspect of the city: from religious life to everyday life, reliving centuries of history.',
      },
      pathToItinerary:"all-itineraries"
    }
  },
}
</script>

<style lang="scss" scoped>
</style>