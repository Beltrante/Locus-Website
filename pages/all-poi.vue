<template>
  <div class="container mt-5">
    <TopPageGeneric :info="header" />
    <hr />
    <!-- row of category links -->
    <div class="row">
      <div class="col-lg-4 snippet-categories">
        Choose a category or scroll down to see all the points of interest
      </div>
      <div class="col-lg-8">
        <div class="row">
          <CategoryComponent
            v-for="category in categories"
            :key="category.id"
            :category="category"
            class="col-md-6"
          />
        </div>
      </div>
    </div>
    <!-- rows of poi cards -->
    <div class="row mt-4 g-0">
      <CardComponent
        v-for="poi in pois"
        :key="poi.id"
        :card="poi"
        :type="type"
        class="col-xl-3 p-2"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllPoiPage',
  data() {
    return {
      header: {
        name: 'All Points of interest',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi veniam in, eos tempora, molestias modi voluptatem totam quidem delenitieveniet obcaecati, atque fugiat! Dolor incidunt excepturi, essedoloremque repellat tempora?',
      },
      categories: {
        churches: {
          id: 0,
          name: 'Churches',
          image:
            'https://drive.google.com/uc?export=view&id=1z4zMtUI6eatV_AVA0U4j7U93HttESxbw',
        },
        h_monuments: {
          id: 1,
          name: 'Historical Monuments',
          image:
            'https://drive.google.com/uc?export=view&id=1hvQGPYoY3MfUhZ0E_m-fI_XVY6WX6WvE',
        },
        sq_st: {
          id: 2,
          name: 'Squares and streets',
          image:
            'https://drive.google.com/uc?export=view&id=1WmIFzdmMWIjXM4Q0B6O4GFiOa5WnnLBP',
        },
        c_services: {
          id: 3,
          name: 'Cultural services',
          image:
            'https://drive.google.com/uc?export=view&id=1-U4q91dd6V6_skg-BnWO_gt60gfQWi5R',
        },
      },
      pois: {
        poi1: {
          id: 0,
          name: 'Funicolare città alta',
          image:
            'https://www.visitbergamo.net/rimg/4lc/c/d/3/1/cd31e0d43c7b2c436bc0c8c520498e90_cda4a5ed.jpg',
        },
        poi2: {
          id: 1,
          name: 'Piazza vecchia',
          image:
            'https://www.visitbergamo.net/rimg/4lc/3/5/f/b/35fbeefa6ee984a3b3d68ccac043954c_1ffca0eb.jpg',
        },
        poi3: {
          id: 2,
          name: 'S.Maria Maggiore',
          image:
            'https://images.placesonline.com/photos/424010103210244_Bergamo_209231990-min.jpeg?quality=80&w=700',
        },
        poi4: {
          id: 3,
          name: 'Campanone',
          image:
            'https://storage.ecodibergamo.it/media/photologue/2017/6/11/photos/cache/i-rintocchi-del-campanone-di-citta-alta-sono-veramente-cento-li-avete-cont_b37148e0-4eac-11e7-ac63-8437cfd3f37a_512_512_new_square_large.jpg',
        },
      },
      type: {
        name: 'poi',
      },
    }
  },
}
</script>

<style scoped>
</style>