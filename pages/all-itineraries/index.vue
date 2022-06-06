/* Page for ALL ITINERARIES*/
<template>
  <!-- class container in order to center the contend -->
  <!-- class mt-5 in order to heva a margin top of 5 units -->
  <div class="container mt-5">
    <!-- this component creates the top (first row) of the page. 
    The passed parameters are the name (for the title of the page), 
    the descritpion (in order to describe the content) and the tags 
    (in order to dynamically display the hashtags) -->
    <TopPageGeneric
      :name="header.name"
      :description="header.description"
      :tags="tags"
    />
    <hr />
    <!-- rows of poi cards -->
    <div class="row mt-4">
      <!-- this component creates a number of cards equal to the total 
      number of events (because in this page a user can filter for specific 
      category (thanks to the CategoryComponent) or look at all the available 
      events displayed thanks to the CardComponent -->
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
      tags: tagList,
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
      pathToItinerary: 'all-itineraries',
    }
  },
  head() {
    return {
      title: 'All Itineraries | Itineraries',
      meta: [
        {
          hid: 'descriptionItineraries',
          name: 'description',
          content: 'Available Itineraries',
        },
        {
          hid: 'keywordsItineraries',
          name: 'keywords',
          content: [this.tags.toString(),'leisure', 'Itineraries', 'Bergamo'],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
</style>