<template>
  <div class="container mt-5">
    <TopPageGeneric 
    :name="header.name"
    :description="header.description"  />
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
    const { data } = await $axios.get('/api/all-itineraries')
    return {
      itineraries: data,
    }
  },
  data() {
    return {
      header: {
        name: 'All Itineraries',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi veniam in, eos tempora, molestias modi voluptatem totam quidem delenitieveniet obcaecati, atque fugiat! Dolor incidunt excepturi, essedoloremque repellat tempora?',
      },
      pathToItinerary:"itinerary"
    }
  },
}
</script>

<style lang="scss" scoped>
</style>