/* ############################## START COMPONENT DESCRIPTION ############################## */

/* this component is used for the creation of the section displaying the interactive map for the 
preview of the selected itinerary (NB: it is different form the map we implemented for the pois). 
This section allows not only to interact with a classic map but, also, to preview how the 
itinerary will looks like in reality thanks to the contibution of users that have used their own 
mobile devices in order to map the environment (like as google street view but anyone can 
contribute and create his/her segments!). The required parameters are:
    - the link of the segment we want the user to interact with (each segment loaded on the mapillary 
      website has its own link);*/
    
/* ############################## END COMPONENT DESCRIPTION ############################### */
<template>
  <div>
    <!-- inside the "src", the link of the segment is passed and the interactive map is created -->
    <iframe title="Itinerary player" class="mapillary" :src="`${link}`" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  name: 'SegmentComponent',
  props:{
    link:{
      type: String,
      required: true,
    }
  }
}
</script>

<style scoped>
.mapillary {
  width: 100%;
  height: 350px;
  border-radius: 10px;
}
</style>