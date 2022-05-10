<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <IndexCard v-for="event in events" :key="event.id" :section="event" />
      </div>
      <div class="col-md-6">
        <h1 class="header">{{ events.ev1.name }}</h1>
        <p class="snippet">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A rerum eos
          ipsam omnis voluptas nulla tempore cupiditate. Eveniet excepturi
          corrupti odit, fuga veritatis ad saepe perferendis optio. Id, dicta
          itaque. Lorem ipsum dolor sit, amet consectetur adipisicing elit. A rerum eos
          ipsam omnis voluptas nulla tempore cupiditate. Eveniet excepturi
          corrupti odit.
        </p>
      </div>
    </div>
    <div class="row involved-poi">
      <h2 class="subtitle">Hosting Point of interest</h2>
      <!-- Display carta larga con tutto il container più informazioni
      dato che il point of interest da mostrare è uno solo -->
      <CardComponent
        v-for="event in events"
        :key="event.id"
        cat="event"
        class="col-sm p-2"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleEvent',
  data() {
    return {
      events: {
        ev1: {
          id: 0,
          name: 'Festa del paese',
          img: 'https://www.andelfood.it/images/sagre-paese.jpg',
          HostingPoi: {
            id: 1,
            name: 'Parco della trucca',
            place: 'Bergamo',
            img: 'https://storage.ecodibergamo.it/media/old_media/2012/10/cache/404901_859105_EcoBg_052__14631839_v3_xl_16_9.jpg',
          },
        },
      },
    }
  },
}
</script>

<style scoped>
.event-image {
  height: 100%;
  width: 100%;
}
</style>