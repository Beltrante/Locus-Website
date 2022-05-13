<template>
  <div class="container mt-5">
    <TopMapDescription :section="poi" />
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
      poi: {
        name: 'Chiesa Agostino',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A rerum eos ipsam omnis voluptas nulla tempore cupiditate. Eveniet excepturi corrupti odit, fuga veritatis ad saepe perferendis optio. Id, dicta itaque.',
        type: 'POI',
        img: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/635BergamoSAgostino.jpg',
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
      },
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