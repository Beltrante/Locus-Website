<template>
  <div class="container mt-5">
    <!--     <TopPageGeneric /> -->
    <h1 class="subtitle">Specific mail for specific issues</h1>
    <div class="row center">
      <StaticCardComponent
        v-for="contact in contacts"
        :key="contact.id"
        :section="contact"
        class="col-md-3"
      />
    </div>
    <hr />
    <h1 class="subtitle">Share your doubts with us!</h1>
    <ContactForm />
    <hr />
    <h1 class="subtitle">General contacts</h1>
     <StaticCardComponent :section="generic" class="col-md-6" />
  </div>
</template>

<script>
export default {
  name: 'ContactUsPage',
  data() {
    return {
      contacts: {
        contact2: {
          id: 1,
          name: 'Itineraries info',
          mail: 'itineraries@live.com',
          img: 'https://drive.google.com/uc?export=view&id=1zax5f1MFQg06wlmYIENJgoJmdtloTdhI',
          color: "black"
        },
        contact3: {
          id: 2,
          name: 'Points of interest info',
          mail: 'poi@live.com',
          img: 'https://drive.google.com/uc?export=view&id=1OEVTvggYTxVInZKYBvjbMqNriuw5N4S2',
          color: "black"
        },
        contact1: {
          id: 0,
          name: 'Event info',
          mail: 'event@live.com',
          img: 'https://drive.google.com/uc?export=view&id=11Bx_5QjC5OTML7LYSkekCj_eWMjGkBvM',
          color: "black"
        },
      },
      generic:{
        img: "https://www.ioriarredamenti.it/wp-content/uploads/2021/09/come-arredare-ufficio-moderno.jpeg"
      },
    }
  }
}
</script>

<style scoped>
.center {
  justify-content: center;
}
</style>