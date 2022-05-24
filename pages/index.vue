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
          img: "https://bonkaday.com/wp-content/uploads/2014/06/Immagini-casuali-del-giorno-22.jpg",
          col: 7,
          where: "mid-deep/poi"
          /* color: "#ff595e" */
        },
        s2:{
          id: 1,
          name: "Itineraries",
          img: "https://us.123rf.com/450wm/fisher4/fisher41908/fisher4190800168/127978666-sfere-luminose-al-neon-.jpg?ver=6",
          col: 5,
          where: "big-deep/itinerary"
          /* color: "#ffca3a" */
        },
        s3:{
          id: 2,
          name: "Events",
          img: "https://thumbs.dreamstime.com/b/influenza-della-particella-effetti-luce-luminosi-137015117.jpg",
          col: 5,
          where: "mid-deep/event"
          /* color: "#8ac926" */
        },
        s4:{
          id: 3,
          name: "Services",
          img: "https://img.freepik.com/vektoren-kostenlos/spiel-visuelle-effekte-und-gluehendes-funkeln_22350-716.jpg",
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
.row .menu:hover .img-fluid {
  opacity: 0.3;
}
.row .menu:hover .middle {
  opacity: 0.3;
}
</style>
