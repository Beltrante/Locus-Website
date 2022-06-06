<template>
  <div class="container mt-5">
    <!-- this component will include the top (first row) of the homepage 
    containing the Title of the site and a small descritpion of its purpose -->
    <TopMainPage />
    <div class="row mt-4 g-0">
      <!-- this component creates the 4 main sections in which the site is 
      structured (POIs, Itineraries, Events and Services) -->
      <IndexCard 
      v-for="section in sections" 
      :key="section.id"
      :path="section.path"
      :name="section.name"
      :image="section.image"
      :class="`col-sm-${section.col} p-2 active position-relative menu`" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    // Home Page data never changes 
    return{
      sections: {
        s1:{
          id: 0,
          name: "Places",
          image: "https://images.placesonline.com/photos/424010103210244_Bergamo_209231990-min.jpeg?quality=80&w=700",
          col: 7,
          path: "all-places"
        },
        s2:{
          id: 1,
          name: "Itineraries",
          image: "https://i.ibb.co/HKsJdTQ/itineraries.png",
          col: 5,
          path: "all-itineraries"
        },
        s3:{
          id: 2,
          name: "Events",
          image: "https://storage.ecodibergamo.it/media/photologue/2019/4/10/photos/estivi-santagostino-apre-gia-il-1-maggiobando-della-trucca-va-deserto-d_6ec48678-5ba0-11e9-9a27-d6d04fdbc1c3_900_566.jpg",
          col: 5,
          path: "all-events"
        },
        s4:{
          id: 3,
          name: "Services",
          image: "https://www.travelfar.it/wp-content/uploads/mercati-di-Palermo-gente-e-profumi.jpg",
          col: 7,
          path: "all-services"
        },
      }
    }
  },
  head() {
    return {
      title: `Bergamo | Locus`,
      meta: [
        {
          hid: 'descriptionHomepage',
          name: 'description',
          content: `Homepage showing all possible sections of the site`,
        },
        {
          hid: 'keywordsHomepage',
          name: 'keywords',
          content: ['Homepage', 'Itineraries', 'Places', 'Events', 'Services', 'About the town', 'Contact-us', 'Fun', 'Culture','Art Town', 'Bergamo'],
        },
      ],
    }
  },
}


</script>

<style scoped>
</style>
