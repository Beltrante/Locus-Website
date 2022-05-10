<template>
  <div>
    <iframe
      id="inlineFrameExample"
      title="Inline Frame Example"
      src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"
    >
    </iframe>
  </div>
</template>

<script>
export default {
  name: 'MapComponent',
}
</script>

<style scoped>
#inlineFrameExample {
  width: 100%;
  height: 350px;
  border-radius: 5px;
}
</style>