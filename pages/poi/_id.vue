<template>
  <div class="container mt-5">
    <TopMapDescription />
    <div class="row stacco-subtitle">
      <h2 class="subtitle">Hosted events</h2>
      <CardComponent
        v-for="event in h_events"
        :key="event.id"
        :cat="event"
        class="col-sm-3 p-2"
      />
    </div>
    <div class="row stacco-subtitle">
      <h2 class="subtitle">Involving Itineraries</h2>
      <CardComponent
        v-for="itinerary in in_itin"
        :key="itinerary.id"
        :cat="itinerary"
        class="col-sm-3 p-2"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SinglePoi',
  data() {
    return {
      h_events: {
        ev1: {
          id: 0,
          name: 'Sagra della polpetta',
          data: '09/09/2022',
          img: 'https://i.picsum.photos/id/408/700/500.jpg?hmac=emOh4NpqEksRvOrtzBhy8_zpqSGHhJFDjbzhPM4FoSo',
        },
        ev2: {
          id: 1,
          name: 'Sbirrando',
          data: '20/09/2022',
          img: 'https://i.picsum.photos/id/408/700/500.jpg?hmac=emOh4NpqEksRvOrtzBhy8_zpqSGHhJFDjbzhPM4FoSo',
        },
        ev3: {
          id: 2,
          name: 'Festa della città',
          data: '09/11/2022',
          img: 'https://i.picsum.photos/id/408/700/500.jpg?hmac=emOh4NpqEksRvOrtzBhy8_zpqSGHhJFDjbzhPM4FoSo',
        },
        ev4: {
          id: 3,
          name: 'Festa universitari',
          data: '13/08/2022',
          img: 'https://i.picsum.photos/id/408/700/500.jpg?hmac=emOh4NpqEksRvOrtzBhy8_zpqSGHhJFDjbzhPM4FoSo',
        },
      },
      in_itin: {
        it1: {
          id: 0,
          name: 'Itinerario dei pioppi',
          data: '09/09/2022',
          img: 'https://i.picsum.photos/id/408/700/500.jpg?hmac=emOh4NpqEksRvOrtzBhy8_zpqSGHhJFDjbzhPM4FoSo',
        },
        it2: {
          id: 1,
          name: 'Attraverso le Mura',
          data: '20/09/2022',
          img: 'https://i.picsum.photos/id/408/700/500.jpg?hmac=emOh4NpqEksRvOrtzBhy8_zpqSGHhJFDjbzhPM4FoSo',
        },
        it3: {
          id: 2,
          name: 'La natura di Bergamo',
          data: '09/11/2022',
          img: 'https://i.picsum.photos/id/408/700/500.jpg?hmac=emOh4NpqEksRvOrtzBhy8_zpqSGHhJFDjbzhPM4FoSo',
        },
        ev4: {
          id: 3,
          name: 'Bergamo storica',
          data: '13/08/2022',
          img: 'https://i.picsum.photos/id/408/700/500.jpg?hmac=emOh4NpqEksRvOrtzBhy8_zpqSGHhJFDjbzhPM4FoSo',
        },
      },
    }
  },
}
</script>

<style scoped>
</style>