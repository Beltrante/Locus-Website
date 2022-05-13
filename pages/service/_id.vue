<template>
  <div>
    <TopMapDescription :section="sections.section" />
  </div>
</template>

<script>
export default {
  name: 'SingleService',
  data() {
    return {
      sections: {
        section: {
          id: 0,
          img: 'https://www.polimi.it/uploads/pics/Rettorato_1920x816_v03_11.jpg',
          where: '',
          op_hours: {
              lunedì:{
                  id:0,
                  str:'Lunedì: 8:00 - 21:00',
              },
              martedì:{
                  id:2,
                  str:'Martedì: 8:00 - 21:00',
              },
              mercoledì:{
                  id:3,
                  str: 'Mercoledì: 8:00 - 21:00'
              },
              giovedì:{
                  id:4,
                  str: 'Giovedì: 8:00 - 21:00',
              },
              venerdì:{
                  id:5,
                  str:'Venerdì: 8:00 - 21:00',
              } 
          }
            
        },
      },
    }
  },
}
</script>

<style scoped>
</style>