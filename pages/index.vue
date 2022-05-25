<template>
  <div class="container mt-5">
    <TopMainPage />
    <div class="row mt-4 g-0">
      <IndexCard v-for="section in sections" :key="section.id" :section="section" :class="`col-sm-${section.col} p-2 active position-relative menu`" />
    </div>
  </div>

</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return{
      sections: {
        s1:{
          id: 0,
          name: "Points of interest",
          img: "https://images.placesonline.com/photos/424010103210244_Bergamo_209231990-min.jpeg?quality=80&w=700",
          col: 7,
          where: "mid-deep/poi"
          /* color: "#ff595e" */
        },
        s2:{
          id: 1,
          name: "Itineraries",
          img: "https://drive.google.com/uc?export=view&id=1qEiwWlkdnKB8fvn0TZObIF0Ddzo2GGV0",
          col: 5,
          where: "big-deep/itinerary"
          /* color: "#ffca3a" */
        },
        s3:{
          id: 2,
          name: "Events",
          img: "https://storage.ecodibergamo.it/media/photologue/2019/4/10/photos/estivi-santagostino-apre-gia-il-1-maggiobando-della-trucca-va-deserto-d_6ec48678-5ba0-11e9-9a27-d6d04fdbc1c3_900_566.jpg",
          col: 5,
          where: "mid-deep/event"
          /* color: "#8ac926" */
        },
        s4:{
          id: 3,
          name: "Services",
          img: "https://www.travelfar.it/wp-content/uploads/mercati-di-Palermo-gente-e-profumi.jpg",
          col: 7,
          where: "big-deep/service"
          /* color: "#1982c4" */
        },
      }
    }
  },
 /*  
  created() {
     for (let index = 0; index < Object.keys(this.sections).length; index++) {
      const state = this.sections[Object.keys(this.sections)[index]]
      if (index%2 == 0) {
        state.col = 7
        
        console.log(state.col)} 
      else {
        state.col = 5
        console.log(state.col)
      }      
    } 
  }
*/
}


</script>

<style scoped>

</style>
