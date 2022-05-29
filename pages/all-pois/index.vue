<template>
  <div class="container mt-5">
    <TopPageGeneric 
    :name="header.name"
    :description="header.description"  />
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
    const { data } = await $axios.get('/api/all-pois')
    return{
      categories: data.categories,
      pois: data.pois,
    }
  },

  data() {
    return {
      header: {
        name: 'All Points of interest',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi veniam in, eos tempora, molestias modi voluptatem totam quidem delenitieveniet obcaecati, atque fugiat! Dolor incidunt excepturi, essedoloremque repellat tempora?',
      },
      pathToPoi: "all-pois",
      categoryPath: "poi-category"
    }
  },

}
</script>

<style scoped>
</style>