<template>
  <div class="container mt-5">
    <BreadCrump :items="breadcrumps" />
    <TopMapDescription :section="sections.section" />
  </div>
</template>

<script>
import BreadCrump from '~/components/BreadCrump.vue'
export default {
  name: 'SingleService',
  components: {
    BreadCrump,
  },
  data() {
    return {
      sections: {
        section: {
          id: 0,
          name: 'Farmacia Rossi',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A rerum eos ipsam omnis voluptas nulla tempore cupiditate. Eveniet excepturi corrupti odit, fuga veritatis ad saepe perferendis optio. Id, dicta itaque. corrupti odit, fuga veritatis ad saepe perferendis optio.',
          type: 'Service',
          image:
            'https://www.polimi.it/uploads/pics/Rettorato_1920x816_v03_11.jpg',
          where: '',
          op_hours: {
            lunedì: {
              id: 0,
              str: 'Lunedì: 8:00 - 21:00',
            },
            martedì: {
              id: 2,
              str: 'Martedì: 8:00 - 21:00',
            },
            mercoledì: {
              id: 3,
              str: 'Mercoledì: 8:00 - 21:00',
            },
            giovedì: {
              id: 4,
              str: 'Giovedì: 8:00 - 21:00',
            },
            venerdì: {
              id: 5,
              str: 'Venerdì: 8:00 - 21:00',
            },
          },
          map: {
            bbox: '80.3807830810547%2C9.379882663276048%2C80.38974165916444%2C9.384762491698044',
            marker: '9.382322586071064%2C80.38526237010956',
          },
        },
      },
    }
  },
  computed: {
    // define breadcrumbs routes
    breadcrumps() {
      return [
        {
          label: 'All services',
          url: '/all-services',
        },
      ]
    },
  },
}
</script>

<style scoped>
</style>