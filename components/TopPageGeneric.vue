<template>
  <div class="containert">
    <div class="row">
      <div class="col-md">
        <h1 class="header">{{ name }}</h1>
      </div>
      <div class="col-md">
        <p class="snippet">
          {{ description }}
        </p>
        <p class="tags"># {{dynTags[0]}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopPageGeneric',
  props: {
    name: { type: String, required: true },
    description: { type: String, required: true },
    tags:{type: Array,required:true}
  },
  data() {
    return {
      // props are unmodifiable and i want change order for animation
      dynTags: this.tags
    }
  },
  mounted(){
    window.setInterval(()=>{
      this.pollTag();
    }, 500);

  },
  methods: {
    pollTag(){
      const first = this.dynTags.shift();
      this.dynTags = this.dynTags.concat(first);
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 4rem;
  margin-bottom: 4rem;
}
.tags {
  font-size: 1.8rem;
  font-weight: 800;
}
</style>