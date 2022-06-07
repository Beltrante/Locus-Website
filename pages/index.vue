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
          image: "https://i.ibb.co/89svVxH/places-11zon.webp",
          col: 7,
          path: "all-places"
        },
        s2:{
          id: 1,
          name: "Itineraries",
          image: "https://i.ibb.co/YbTpHfG/itineraries-1-80.webp",
          col: 5,
          path: "all-itineraries"
        },
        s3:{
          id: 2,
          name: "Events",
          image: "https://i.ibb.co/dPjytym/events-11zon-1-80.webp",
          col: 5,
          path: "all-events"
        },
        s4:{
          id: 3,
          name: "Services",
          image: "https://i.ibb.co/frb1D4T/services-11zon-1-80.webp",
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
