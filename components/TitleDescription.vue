<template>
    <div>
        <h1 class="header">{{ name }}</h1>
        <p class="snippet">
          {{ description }}
        </p>
    </div>
</template>

<script>
    export default {
        name: "TitleDescription",
        props:{
            name:{
                type:String,
                required:true
            },
            description:{
                type:String,
                required:true
            }
        } 
    }
</script>

<style scoped>

</style>