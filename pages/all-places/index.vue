/* Page for ALL POIs & POI CATEGORIES */
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
    <!-- row of category links -->
    <div class="row">
      <div class="col-lg-4 snippet-categories">
        Choose a category or scroll down to see all the points of interest
      </div>
      <div class="col-lg-8">
        <div class="row">
          <!-- this component creates the "pseudo buttons" referred to 
          each POI category -->
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
    <div class="row mt-4">
      <!-- this component creates a number of cards equal to the total 
      number of POIs (because in this page a user can filter for specific 
      category - thanks to the CategoryComponent - or look at all the available 
      POIs displayed thanks to the CardComponent) -->
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
      tags: tagList,
    }
  },
  data() {
    // static data that never changes
    return {
      header: {
        name: "All Bergamo's Places",
        description:
          'Numerous, enchanting and wonderful are the places, the buildings that the city offers. Do not miss a single one during your stay, so let yourself be fascinated by the attractions along the streets of Bergamo.',
      },
      // used to reroute when a preview is pressed
      pathToPoi: 'all-places',
      categoryPath: 'place-category',
    }
  },
  head() {
    return {
      title: 'All Places | Places',
      meta: [
        {
          hid: 'descriptionPlaceCategories',
          name: 'description',
          content: 'Available Places and Place Categories',
        },
        {
          hid: 'keywordsPlaceCategories',
          name: 'keywords',
          content: [this.tags.toString(), 'leisure', 'Places', 'Bergamo'],
        },
      ],
    }
  },
}
</script>

<style scoped>
</style>