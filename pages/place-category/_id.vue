/* Page for the individual POI CATEGORY */
<template>
  <!-- class container in order to center the contend -->
  <!-- class mt-5 in order to heva a margin top of 5 units -->
  <div class="container mt-5">
    <!-- this component will include the breadcrumps in the page -->
    <BreadCrump :items="breadcrumps" />
    <!-- this component creates the top (first row) of the page. 
    The passed parameters are the name (for the title of the page), 
    the descritpion (in order to describe the content) and the tags 
    (in order to dynamically display the hashtags) -->
    <TopPageGeneric
      :name="info.name"
      :description="info.description"
      :tags="tags"
    />
    <div class="row mt-4">
      <!-- this component is used to display the cards of the POIs 
      belonging to the selected POI Category (the card is clickable 
      and redirects to the depicted POI) -->
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
    const { data } = await $axios.get('/api/poi-category/' + id)

    const tagList = []
    data.pois.forEach((poi) => {
      tagList.push(poi.name)
    })

    return {
      info: {
        name: data.name,
        description: data.description,
      },
      pois: data.pois,
      tags: tagList,
    }
  },
  data() {
    // used to reroute user when a card is pressed
    return {
      pathToPoi: 'all-places',
    }
  },
  head() {
    return {
      title: `All ${this.info.name} | Places`,
      meta: [
        {
          hid: 'descriptionPlaceCategory',
          name: 'description',
          content: `Available Places for the ${this.info.name} category`,
        },
        {
          hid: 'keywordsPlaceCategory',
          name: 'keywords',
          content: [ this.info.name, 'leisure', 'Bergamo'],
        },
      ],
    }
  },
  computed: {
    // define breadcrumbs route
    breadcrumps() {
      return [
        {
          label: 'All Places',
          url: '/all-places',
        },
      ]
    },
  },
}
</script>

<style scoped>
</style>