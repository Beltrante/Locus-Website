<template>
  <div>
    <iframe
      id="inlineFrameExample"
      title="Inline Frame Example"
      :src="`https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&amp;layer=mapnik&amp;marker=${marker}`"
      
    ></iframe
    ><br /><small
      ><a
        href="https://www.openstreetmap.org/?mlat=6.91386&amp;mlon=79.85334#map=19/6.91386/79.85334&amp;layers=ND"
        >Visualizza mappa ingrandita</a
      ></small
    >
  </div>
</template>

<script>
export default {
  name: 'MapComponent',
  props:{
    bbox:{type: String,
      required: true,},
    marker:{type: String,
      required: true,}
  }
}
</script>

<style scoped>
#inlineFrameExample {
  width: 100%;
  height: 350px;
  border-radius: 10px;
}
</style>