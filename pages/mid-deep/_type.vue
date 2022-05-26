<template>
  <div class="container mt-5">
    <TopPageGeneric :info="info" />
    <div class="row mt-4 g-0">
      <!-- la classe di CardComponent detta la grandezza della stessa
      tramite il numero "6" -->
      <CardComponent
        v-for="poiType in poiTypes"
        :key="poiType.id"
        :card="poiType"
        :type="type"
        class="col-sm-6 p-2"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MidDeep',
  async asyncData({ route, $axios }) {
    const { type } = route.params
    const { data } = await $axios.get('/api/' + type+"Type")
    return {
      poiTypes: data,
      // type can be poi/event intended as poiType/eventType
      type: {name: "big-deep/"+type}
    }
  },
   // TODO can store be used like this?
  computed: {
    info() {
      return this.$store.getters.getAllOfType(this.$route.params.type)
    },
  },
}
</script>

<style scoped>
.row {
  justify-content: center;
}
</style>