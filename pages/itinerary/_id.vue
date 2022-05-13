<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <SegmentComponent />
      </div>
      <div class="col-md-6">
        <h1 class="header">{{ itinerary.name }}</h1>
        <p class="snippet">
          {{ itinerary.description }}
        </p>
      </div>
    </div>
    <hr />
    <div class="row">
      <h2 class="subtitle">Involved points of interest</h2>
      <CardComponent
        v-for="poi in itinerary.pois"
        :key="poi.id"
        cat="poi"
        class="col-sm-3 p-2"
      />
    </div>
  </div>
</template>



<script>
export default {
  name: 'SingleItinerary',
  data() {
    return {
      itinerary: {
        name: 'Bergamo Storica',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A rerum eos ipsam omnis voluptas nulla tempore cupiditate. Eveniet excepturi corrupti odit, fuga veritatis ad saepe perferendis optio. Id, dicta itaque.',
        pois: {
          poi1: {
            id: 0,
            name: 'Chiesa S.Maria',
            place: 'Bergamo',
            img: 'https://www.turismo.ra.it/wp-content/uploads/2020/12/ravenna-basilica_santa_maria_in_porto-archivio_comune_ravenna.jpg',
          },
          poi2: {
            id: 1,
            name: 'Parco della trucca',
            place: 'Bergamo',
            img: 'https://storage.ecodibergamo.it/media/old_media/2012/10/cache/404901_859105_EcoBg_052__14631839_v3_xl_16_9.jpg',
          },
          poi3: {
            id: 2,
            name: 'Piazza vecchia',
            place: 'Bergamo',
            img: 'https://mywowo.net/media/images/cache/bergamo_piazza_vecchia_01_presentazione_jpg_1200_630_cover_85.jpg',
          },
          poi4: {
            id: 3,
            name: 'Chiesa S.Agostino',
            place: 'Bergamo',
            img: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/635BergamoSAgostino.jpg',
          },
        },
      },
    }
  },
}
</script>

<style scoped>
</style>