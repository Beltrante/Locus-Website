<template>
  <div class="page container mt-5">
    <TopPageGeneric />
    <div class="row mt-3">
      <LargeCard
        v-for="category in poi"
        :key="category.id"
        :cat="category"
        class="col-sm-2 m-2"
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
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Pisa_-_Chiesa_di_San_Paolo_a_Ripa_02.JPG/1920px-Pisa_-_Chiesa_di_San_Paolo_a_Ripa_02.JPG',
        },
        cat2: {
          id: 2,
          name: 'Edifici Storici',
          img: 'https://www.visittivoli.eu/images/edifici-storici/rocca-pia.jpg',
        },
        cat3: {
          id: 3,
          name: 'Piazze',
          img: 'https://static2-viaggi.corriereobjects.it/wp-content/uploads/2021/02/Siena_Piazza_del_Campo_iStock-1080x540.jpg?v=421473',
        },
        cat4: {
          id: 4,
          name: 'Parchi',
          img: 'https://www.quibrescia.it/photogallery_new/images/2013/10/parcoducos-444451.660x368.jpg',
        },
      },
    }
  },
}
</script>

<style scoped>
</style>