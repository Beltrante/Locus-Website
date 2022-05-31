<template>
  <div class="container mt-5">
    <TopPageGeneric 
    :name="header.name"
    :description="header.description" 
    />
    <hr />
    <!-- row of category links -->
    <div class="row">
      <div class="col-lg-4 snippet-categories">
        Choose a category or scroll down to see all services
      </div>
      <div class="col-lg-8">
        <div class="row">
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
    <!-- rows of poi cards -->
    <div class="row mt-4 g-0">LISTA DI COSE</div>
  </div>
</template>

<script>
export default {
  name: 'AllServicePage',
  /*
  async asyncData({ $axios }) {
    // Get all the service types previews data from server
    const { data } = await $axios.get('/api/all-serviceTypes')
    return {
      //data has id/name/image
      serviceTypes: data,
    }
  },
  */
  data() {
    return {
      header: {
        name: 'All Services',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi veniam in, eos tempora, molestias modi voluptatem totam quidem delenitieveniet obcaecati, atque fugiat! Dolor incidunt excepturi, essedoloremque repellat tempora?',
      },
      serviceTypes: {
        service1: {
          id: 1,
          name: 'Pharmacies',
          image:
            'https://drive.google.com/uc?export=view&id=1cQFWMRKLRXg6VANH5y83IlumjGN5PS2t',
        },
        service2: {
          id: 2,
          name: 'Supermarkets',
          image:
            'https://drive.google.com/uc?export=view&id=1PXKIlrUhvI7JaZHv56EOU07H8TuFSTJS',
        },
        service3: {
          id: 3,
          name: 'Banks',
          image:
            'https://drive.google.com/uc?export=view&id=1MCc7SwU7hxQrmzrpX7IR9m8fW5zBLtaG',
        },
        service4: {
          id: 4,
          name: 'Restaurants',
          image:
            'https://drive.google.com/uc?export=view&id=1ntZ2Rhspga_iWn-RUTri-hyR5FvGF9Gf',
        },
      },
      servicePath: "all-services"
    }
  },
}
</script>

<style lang="scss" scoped>
</style>



