<template>
  <div class="container mt-5">
    <TopPageGeneric />

    <div class="row mt-4 g-0">
      <LargeCard
        v-for="category in poi"
        :key="category.id"
        :cat="category"
        class="col-sm-6 p-2"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MidDeep',
  data() {
    return {
      poi: {
        cat1: {
          id: 1,
          name: 'Chiese',
          img: 'https://i.picsum.photos/id/853/700/300.jpg?hmac=83_-bFZdt6xuzY9fzc5Qy1Obfn9QcIbIW2c8JDnp0UE',
        },
        cat2: {
          id: 2,
          name: 'Edifici Storici',
          img: 'https://i.picsum.photos/id/853/700/300.jpg?hmac=83_-bFZdt6xuzY9fzc5Qy1Obfn9QcIbIW2c8JDnp0UE',
        },
        cat3: {
          id: 3,
          name: 'Piazze',
          img: 'https://i.picsum.photos/id/387/700/500.jpg?hmac=W_ukdhNWG5VoRDhQKERMmkivjeSXnnZR0P-kLhxlsPM',
        },
        cat4: {
          id: 4,
          name: 'Parchi',
          img: 'https://i.picsum.photos/id/929/500/300.jpg?hmac=r9ItvELFjxlV0PYNe9P84rk1YbruyuGgpUDSU0Y7sro',
        },
      },
    }
  },
}
</script>

<style scoped>

.row {
  justify-content: center;
  
}
</style>