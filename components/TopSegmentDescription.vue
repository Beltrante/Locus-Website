<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <SegmentComponent :link="link" />
      </div>
      <div class="col-md-6">
        <TitleDescription
          :name="name"
          :description="description"
        />
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'TopSegmentDescriptionComponent',
        props:{
          link:{type:String,
            required: true,},
          name:{type:String,
            required: true,},
          description:{type:String,
            required: true,}
        }
    }
</script>

<style lang="scss" scoped>

</style>