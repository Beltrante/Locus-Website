<template>
  <div class="container mt-5">
    <TopPageGeneric />
    <div class="row mt-4 g-0">
      <!-- la classe di CardComponent detta la grandezza della stessa
      tramite il numero "6" -->
      <CardComponent
        v-for="category in student"
        :key="category.id"
        :cat="category"
        class="col-sm-6 p-2"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
  data() {
    return {
      student: {
        student1: {
          id: 1,
          name: 'Alessandro Austoni',
          img: 'https://www.greenme.it/wp-content/uploads/2015/08/leonardo_di_caprio_ambiente.jpg',
        },
        student2: {
          id: 2,
          name: 'Matteo Beltrante',
          img: 'https://www.greenme.it/wp-content/uploads/2015/08/leonardo_di_caprio_ambiente.jpg',
        },
        student3: {
          id: 3,
          name: 'Francesco Bosso',
          img: 'https://www.greenme.it/wp-content/uploads/2015/08/leonardo_di_caprio_ambiente.jpg',
        },
        student4: {
          id: 4,
          name: 'Thomas Martinoli',
          img: 'https://www.greenme.it/wp-content/uploads/2015/08/leonardo_di_caprio_ambiente.jpg',
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