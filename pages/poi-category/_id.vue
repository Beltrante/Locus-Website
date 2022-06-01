<template>
  <div class="page container mt-5">
    <BreadCrump :items="breadcrumps" />
    <TopPageGeneric 
    :name="info.name"
    :description="info.description"
    :tags="tags"
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
        class="col-xl-3 p-2"
       />
    </div>
  </div>
</template>

<script>
import BreadCrump from '~/components/BreadCrump.vue'
export default {
  name: 'PoiCategory',
  components: {
    BreadCrump,
  },
  async asyncData({ params, $axios }) {
     // get poi-category full data based on route id and relative pois preview
    const id = params.id
    const { data } = await $axios.get('/api/poi-category/'+id)

    const tagList = []
    data.pois.forEach((poi) => {
      tagList.push(poi.name)
    })

    return {
      info: {
        name: data.name,
        description: data.description
      },
      pois: data.pois,
      tags: tagList
    }
  },
  data() {
    // used to reroute user when a card is pressed
    return {
      pathToPoi:"all-pois"
    }
  },
  computed: {
    // define breadcrumbs route
    breadcrumps() {
      return [
        {
          label: 'All Places',
          url: '/all-pois',
        },
             
      ]
    },
  },
}
</script>

<style scoped>
</style>