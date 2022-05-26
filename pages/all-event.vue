<template>
  <div class="container mt-5">
    <TopPageGeneric :info="header" />
    <hr />
    <!-- row of category links -->
    <div class="row">
      <div class="col-lg-4 snippet-categories">
        Choose a category or scroll down to see all the events
      </div>
      <div class="col-lg-8">
        <div class="row">
          <CategoryComponent
            v-for="season in seasons"
            :key="season.id"
            :category="season"
            class="col-md-6"
          />
        </div>
      </div>
    </div>
    <!-- rows of poi cards -->
    <div class="row mt-4 g-0">
      <CardComponent
        v-for="event in events"
        :key="event.id"
        :card="event"
        :type="type"
        class="col-xxl-3 p-2"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllEventPage',
  data() {
    return {
      header: {
        name: 'All Bergamo\'s events',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi veniam in, eos tempora, molestias modi voluptatem totam quidem delenitieveniet obcaecati, atque fugiat! Dolor incidunt excepturi, essedoloremque repellat tempora?',
      },
      seasons: {
        season1: {
          id: 0,
          name: 'Summer',
          image:
            'https://drive.google.com/uc?export=view&id=1qb6OFPd80xdxOeIUnPzRxk30aTbb0uEZ',
        },
        season2: {
          id: 1,
          name: 'Autumn',
          image:
            'https://drive.google.com/uc?export=view&id=1lbra7kySbtZbWmJ22Q-LhRiIgA9ypUTd',
        },
        season3: {
          id: 2,
          name: 'Winter',
          image:
            'https://drive.google.com/uc?export=view&id=1u_MzEa7OQEac_0cHNvG3Q-2fN-Nwbntr',
        },
        season4: {
          id: 3,
          name: 'Spring',
          image:
            'https://drive.google.com/uc?export=view&id=1bjiAzjX8vUQ6tTU20LEf7hH02yXEmWzI',
        },
      },
      events: {
        event1: {
          id: 0,
          name: '"Mura" on party',
          image:
            'https://storage.ecodibergamo.it/media/photologue/2017/7/9/photos/mura-patrimonio-dellumanita-la-storiatutte-le-tappe-dello-storico-riconos_d1e3b284-648e-11e7-be2d-693bc9a2b343_998_397.jpg',
        },
        event2: {
          id: 1,
          name: 'S.Agostino in summer',
          image:
            'https://storage.ecodibergamo.it/media/photologue/2019/4/10/photos/estivi-santagostino-apre-gia-il-1-maggiobando-della-trucca-va-deserto-d_6ec48678-5ba0-11e9-9a27-d6d04fdbc1c3_900_566.jpg',
        },
        event3: {
          id: 2,
          name: 'Everyone\'s funicular - Summer',
          image:
            'https://www.visitbergamo.net/rimg/4lc/c/d/3/1/cd31e0d43c7b2c436bc0c8c520498e90_cda4a5ed.jpg',
        },
        event4: {
          id: 3,
          name: 'Open culture - Summer',
          image:
            'https://i0.wp.com/monstermovieitalia.com/wp-content/uploads/2019/03/capodoglio_museo_scienze_naturali_bergamo_monster_movie.jpg?resize=1000%2C563&ssl=1',
        },
      },
      type: {
        name: 'event',
      },
    }
  },
}
</script>

<style scoped>
</style>