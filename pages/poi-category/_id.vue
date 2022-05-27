<template>
  <div class="page container mt-5">
    <TopPageGeneric 
    :info="info"/>
    <div class="row mt-4 g-0">
      <!-- la classe di CardComponent detta la grandezza della stessa
      tramite il numero "3" -->
      <CardComponent
        v-for="poi in pois"
        :key="poi.id"
        :card="poi"
        :type="childType"
        class="col-sm-3 p-2"
       />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PoiCategory',
  async asyncData({ params, $axios }) {
    // type can be poi/event intended as poiType/eventType
    const id = params.id
    const { data } = await $axios.get('/api/poi-category/'+id)
    return {
      info: {
        name: data.name,
        description: data.description
      },
      pois: data.pois,
      childType: {name: "poi"}
    }
  }
}
</script>

<style scoped>
</style>