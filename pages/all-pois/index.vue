<template>
  <div class="container mt-5">
    <TopPageGeneric :name="header.name" :description="header.description" />
    <hr />
    <!-- row of category links -->
    <div class="row">
      <div class="col-lg-4 snippet-categories">
        Choose a category or scroll down to see all the points of interest
      </div>
      <div class="col-lg-8">
        <div class="row">
          <CategoryComponent
            v-for="category in categories"
            :id="category.id"
            :key="category.id"
            :name="category.name"
            :image="category.image"
            :path="categoryPath"
            class="col-md-6"
          />
        </div>
      </div>
    </div>
    <!-- rows of poi cards -->
    <div class="row mt-4 g-0">
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
export default {
  name: 'AllPoiPage',
  async asyncData({ $axios }) {
    // Get all the pois and categories preview data from server
    const { data } = await $axios.get('/api/all-pois')

    const tagList = []
    data.categories.forEach((category) => {
      tagList.push(category.name)
    })

    return {
      categories: data.categories,
      pois: data.pois,
      tags: tagList
    }
  },

  data() {
    // static data that never changes
    return {
      header: {
        name: 'All Points of interest',
        description:
          'Numerous, enchanting and wonderful are the places, the buildings that the city offers. Do not miss a single one during your stay, so let yourself be fascinated by the attractions along the streets of Bergamo.',
      },
      // used to reroute when a preview is pressed
      pathToPoi: 'all-pois',
      categoryPath: 'poi-category',
    }
  },
}
</script>

<style scoped>
</style>