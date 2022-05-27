<template>
  <div class="page container mt-5">
    <TopPageGeneric 
    :name="info.name"
    :description="info.description"
    />
    <div class="row mt-4 g-0">
      <!-- la classe di CardComponent detta la grandezza della stessa
      tramite il numero "3" -->
      <CardComponent
        v-for="poi in pois"
        :id="poi.id"
        :key="poi.id"
        :name="poi.name"
        :image="poi.image"
        :path="pathToPoi"
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
      // TODO maybe move this to data and not async
      pathToPoi:"poi"
    }
  }
}
</script>

<style scoped>
</style>