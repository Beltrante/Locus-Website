<template>
  <div class="page container mt-5">
    <TopPageGeneric />
    <div class="row mt-4 g-0">
      <!-- la classe di CardComponent detta la grandezza della stessa
      tramite il numero "3" -->
      <CardComponent
        v-for="evento in eventi"
        :key="evento.id"
        :cat="evento"
        class="col-sm-3 p-2"
       />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BigDeep',
  data() {
    return {
      eventi: {
        cat1: {
          id: 1,
          name: 'Evento 1',
          img: 'https://i.picsum.photos/id/853/700/300.jpg?hmac=83_-bFZdt6xuzY9fzc5Qy1Obfn9QcIbIW2c8JDnp0UE',
        },
        cat2: {
          id: 2,
          name: 'Evento 2',
          img: 'https://i.picsum.photos/id/853/700/300.jpg?hmac=83_-bFZdt6xuzY9fzc5Qy1Obfn9QcIbIW2c8JDnp0UE',
        },
        cat3: {
          id: 3,
          name: 'Evento 3',
          img: 'https://i.picsum.photos/id/387/700/500.jpg?hmac=W_ukdhNWG5VoRDhQKERMmkivjeSXnnZR0P-kLhxlsPM',
        },
        cat4: {
          id: 4,
          name: 'Evento 4',
          img: 'https://i.picsum.photos/id/929/500/300.jpg?hmac=r9ItvELFjxlV0PYNe9P84rk1YbruyuGgpUDSU0Y7sro',
        },
         cat5: {
          id: 5,
          name: 'Evento 1',
          img: 'https://i.picsum.photos/id/853/700/300.jpg?hmac=83_-bFZdt6xuzY9fzc5Qy1Obfn9QcIbIW2c8JDnp0UE',
        },
        cat6: {
          id: 6,
          name: 'Evento 2',
          img: 'https://i.picsum.photos/id/853/700/300.jpg?hmac=83_-bFZdt6xuzY9fzc5Qy1Obfn9QcIbIW2c8JDnp0UE',
        },
        cat7: {
          id: 7,
          name: 'Evento 3',
          img: 'https://i.picsum.photos/id/387/700/500.jpg?hmac=W_ukdhNWG5VoRDhQKERMmkivjeSXnnZR0P-kLhxlsPM',
        },
        cat8: {
          id: 8,
          name: 'Evento 4',
          img: 'https://i.picsum.photos/id/929/500/300.jpg?hmac=r9ItvELFjxlV0PYNe9P84rk1YbruyuGgpUDSU0Y7sro',
        },
      },
    }
  }
}
</script>

<style scoped>
</style>