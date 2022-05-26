<template>
  <div class="page container mt-5">
    <TopPageGeneric :info="info" />
    <div class="row mt-4 g-0">
      <!-- la classe di CardComponent detta la grandezza della stessa
      tramite il numero "3" -->
      <CardComponent
        v-for="child in children"
        :key="child.id"
        :card="child"
        :type="childType"
        class="col-sm-3 p-2"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BigDeep',
  async asyncData({ route, $axios }) {
    const { type } = route.params
    const { data } = await $axios.get('/api/' + type)
    return {
      // children can be all itineraries/serevicies/pois/events
      children: data,
      // type can be: poi/itinerary/service/event
      childType: { name: type },
    }
  },
  // TODO can store be used like this?
  computed: {
    info() {
      return this.$store.getters.getAllOf(this.$route.params.type)
    },
  },
}
</script>

<style scoped>
</style>