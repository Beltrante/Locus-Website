/* Page for ALL (top 3) SERVICES & SERVICE CATEGORIES */
<template>
<!-- class container in order to center the contend -->
  <!-- class mt-5 in order to heva a margin top of 5 units -->
  <div class="container mt-5">
    <!-- this component creates the top (first row) of the page. 
    The passed parameters are the name (for the title of the page), 
    the descritpion (in order to describe the content) and the tags 
    (in order to dynamically display the hashtags) -->
    <TopPageGeneric :name="header.name" :description="header.description" :tags="tags" />
    <hr />
    <!-- row of category links -->
    <div class="row">
      <div class="col-lg-4 snippet-categories">
        Choose a category or scroll down to see the top 3 services for each category
      </div>
      <div class="col-lg-8">
        <div class="row">
          <!-- this component creates the "pseudo buttons" referred to each service category -->
          <CategoryComponent
            v-for="service in serviceTypes"
            :id="service.id"
            :key="service.id"
            :name="service.name"
            :image="service.image"
            :path="servicePath"
            class="col-md-6"
          />
        </div>
      </div>
    </div>
    <!-- rows of service sections -->
    <div class="row mt-4">
      <!-- this component will create six clusters (one for each category) displaying the top 3 
      rated services for each of them -->
      <TopRatedService
        v-for="type in serviceTypes"
        :key="type.id"
        :data="type"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllServicePage',

  async asyncData({ $axios }) {
    // Get all the service types previews data from server
    const { data } = await $axios.get('/api/all-serviceTypes')

    const tagList = []
    data.forEach((type) => {
      tagList.push(type.name)
    })

    return {
      // data has id/name/image/services as a list of the top n rated
      serviceTypes: data,
      tags: tagList
    }
  },

  data() {
    return {
      header: {
        name: 'All Services',
        description:
          'A city is not only adventure but also relax and comfort. The following page shows some of the services the city of Bergamo offers',
      },
      servicePath: 'all-services',
    }
  },
  head() {
    return {
      title: 'Service Caregories | Services',
      meta: [
        {
          hid: 'descriptionServiceCategories',
          name: 'description',
          content: 'Service Categories and Top 3 rated services by category',
        },
        {
          hid: 'keywordsServiceCategories',
          name: 'keywords',
          content: [this.tags.toString(), 'Services', 'Bergamo'],
        },
      ],
    }
  },
}
</script>

<style scoped>
</style>



