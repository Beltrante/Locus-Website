<template>
  <div class="container mt-5">
    <TopPageGeneric :info="header" />
    <!-- rows of poi cards -->
    <div class="row mt-4 g-0">
      <CardComponent
        v-for="itinerary in itineraries"
        :key="itinerary.id"
        :card="itinerary"
        :type="type"
        class="col-lg-3 p-2"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllItinerayPage',
  data() {
    return {
      header: {
        name: 'All Itineraries',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi veniam in, eos tempora, molestias modi voluptatem totam quidem delenitieveniet obcaecati, atque fugiat! Dolor incidunt excepturi, essedoloremque repellat tempora?',
      },
      itineraries: {
        itinerary1: {
          id: 0,
          name: 'History of Bergamo',
          image:
            'https://drive.google.com/uc?export=view&id=11BUPWHoWC_FTi7Ry4kw3S47R_Kq7yRRm',
        },
        itinerary2: {
          id: 1,
          name: 'Churches and life',
          image:
            'https://drive.google.com/uc?export=view&id=14DXGMiBvc_VQuZ-WARYwK6AN8BVOcy60',
        },
        itinerary3: {
          id: 2,
          name: 'Porte e Spazi',
          image:
            'https://drive.google.com/uc?export=view&id=1vXCwQK4oABhBAATd6cwA9WPz9zX7UXh2',
        },
      },
      type: {
        name: 'itinerary',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
</style>