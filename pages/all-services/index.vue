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
    <!-- rows of service sections -->
    <div class="row mt-4 g-0">
      <TopRatedService v-for="esempio in esempi" :key="esempio.id" :data="esempio" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllServicePage',
  
  async asyncData({ $axios }) {
    // Get all the service types previews data from server
    const { data } = await $axios.get('/api/all-serviceTypes')
    return {
    // data has id/name/image
    serviceTypes: data,
    }
  },
  
  data() {
    return {
      header: {
        name: 'All Services',
        description:
          'The following page shows some of the services the city offers.',
      },
      servicePath: "all-services",

       esempi: {
        topType1: {
          id: 0,
          serviceType: 'Pharmacy',
          services: {
            esempio1: {
              id: 0,
              name: 'Farmacia Comunale Bergamo N. 1',
              address: 'Via Giuseppe Verdi 2 (cap 24121)',
              website:
                'https://lloydsfarmacia.it/pages/store-locator-7016-farmacia-comunale-bergamo-n-1?utm_source=search&utm_medium=gmb&utm_campaign=trovami',
              image: 'https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg',
              op_hours:
                'Monday: 08:30 – 20:00;Tuesday: 08:30 – 20:00;Wednesday: 08:30 – 20:00;Thursday: 08:30 – 20:00;Friday: 08:30 – 20:00;Saturday: 08:30 – 20:00;Sunday: 9.00-13:00',
            },
            esempio2: {
              id: 1,
              name: 'Farmacia Comunale Bergamo N. 1',
              address: 'Via Giuseppe Verdi 2 (cap 24121)',
              website:
                'https://lloydsfarmacia.it/pages/store-locator-7016-farmacia-comunale-bergamo-n-1?utm_source=search&utm_medium=gmb&utm_campaign=trovami',
              image: 'https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg',
              op_hours:
                'Monday: 08:30 – 20:00;Tuesday: 08:30 – 20:00;Wednesday: 08:30 – 20:00;Thursday: 08:30 – 20:00;Friday: 08:30 – 20:00;Saturday: 08:30 – 20:00;Sunday: 9.00-13:00',
            },
            esempio3: {
              id: 2,
              name: 'Farmacia Comunale Bergamo N. 1',
              address: 'Via Giuseppe Verdi 2 (cap 24121)',
              website:
                'https://lloydsfarmacia.it/pages/store-locator-7016-farmacia-comunale-bergamo-n-1?utm_source=search&utm_medium=gmb&utm_campaign=trovami',
              image: 'https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg',
              op_hours:
                'Monday: 08:30 – 20:00;Tuesday: 08:30 – 20:00;Wednesday: 08:30 – 20:00;Thursday: 08:30 – 20:00;Friday: 08:30 – 20:00;Saturday: 08:30 – 20:00;Sunday: 9.00-13:00',
            },
          },
        },
        topType2: {
          id: 1,
          serviceType: 'Bank',
          services: {
            esempio1: {
              id: 0,
              name: 'Banca Etica Filiale di Bergamo',
              address: 'Via Borgo Palazzo 9B (cap 24125)',
              website: 'https://www.bancaetica.it/filiale/filiale-di-bergamo/',
              image: 'https://media.istockphoto.com/photos/bank-building-picture-id640267784?k=20&m=640267784&s=612x612&w=0&h=3j1dH5Ty9qAq69ciYra7oBOn4C3zxyzMCgg2Hdo8ang=',
              op_hours:
                'Monday: 08:30 – 20:00;Tuesday: 08:30 – 20:00;Wednesday: 08:30 – 20:00;Thursday: 08:30 – 20:00;Friday: 08:30 – 20:00;Saturday: 08:30 – 20:00;Sunday: 9.00-13:00',
            },
            esempio2: {
              id: 1,
              name: 'Banca Etica Filiale di Bergamo',
              address: 'Via Borgo Palazzo 9B (cap 24125)',
              website: 'https://www.bancaetica.it/filiale/filiale-di-bergamo/',
              image: 'https://media.istockphoto.com/photos/bank-building-picture-id640267784?k=20&m=640267784&s=612x612&w=0&h=3j1dH5Ty9qAq69ciYra7oBOn4C3zxyzMCgg2Hdo8ang=',
              op_hours:
                'Monday: 08:30 – 20:00;Tuesday: 08:30 – 20:00;Wednesday: 08:30 – 20:00;Thursday: 08:30 – 20:00;Friday: 08:30 – 20:00;Saturday: 08:30 – 20:00;Sunday: 9.00-13:00',
            },
            esempio3: {
              id: 2,
              name: 'Banca Etica Filiale di Bergamo',
              address: 'Via Borgo Palazzo 9B (cap 24125)',
              website: 'https://www.bancaetica.it/filiale/filiale-di-bergamo/',
              image: 'https://media.istockphoto.com/photos/bank-building-picture-id640267784?k=20&m=640267784&s=612x612&w=0&h=3j1dH5Ty9qAq69ciYra7oBOn4C3zxyzMCgg2Hdo8ang=',
              op_hours:
                'Monday: 08:30 – 20:00;Tuesday: 08:30 – 20:00;Wednesday: 08:30 – 20:00;Thursday: 08:30 – 20:00;Friday: 08:30 – 20:00;Saturday: 08:30 – 20:00;Sunday: 9.00-13:00',
            },
          },
        },
      },
    }
  }, 
}
</script>

<style lang="scss" scoped>
</style>



