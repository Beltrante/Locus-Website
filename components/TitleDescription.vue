/* ############################## START COMPONENT DESCRIPTION ############################## */

/* this component is used for the creation of a section made of "Title + Descritpion" releted to 
something specific. We used this component in each page where a "specific element" have to be 
displayed (a point of interest, an itinerary, an event) and it allows us to render its name and 
a short description. The required parameters are:
    - The name of the "specific element";
    - The description of the "specific element";*/
    
/* ############################## END COMPONENT DESCRIPTION ############################### */
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
  name: 'TitleDescription',
  props: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
</style>