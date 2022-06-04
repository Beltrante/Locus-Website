/* ############################## START COMPONENT DESCRIPTION ############################## */

/* this component is used for the creation of the all-pois pages and will produce the map in order 
to highlight the location of the selected point of interest. The required parameters are:
    - the bounding box fixing "viewing area" of the map (bbox);
    - the coordinates of the considered point of interest (marker);*/
    
/* ############################## END COMPONENT DESCRIPTION ############################### */
<template>
  <div>
    <!-- the specified parameters are then passed inside the link in the "src" in order to 
    exploit openstreetmap for the creation of the actual map according to our directives -->
    <iframe
      id="inlineFrame"
      title="Inline Frame"
      :src="`https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&amp;layer=mapnik&amp;marker=${marker}`"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: 'MapComponent',
  props: {
    bbox: { type: String, required: true },
    marker: { type: String, required: true },
  },
}
</script>

<style scoped>
#inlineFrame {
  width: 100%;
  height: 350px;
  border-radius: 10px;
}
</style>