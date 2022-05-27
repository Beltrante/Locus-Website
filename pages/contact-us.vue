<template>
  <div class="container mt-5">
    <!--     <TopPageGeneric /> -->

    <div class="row center">
      <h1 class="subtitle">Specific mail for specific issues</h1>
      <StaticCardComponent
        v-for="contact in contacts"
        :key="contact.id"
        :title="contact.title"
        :image="contact.image"
        :footer="contact.footer"
        :color="contact.color"
        :background="contact.background"
        class="col-md-3 margine"
      />
    </div>
    <hr />
    <div class="row">
      <h1 class="subtitle">Share your doubts with us!</h1>
      <ContactForm />
    </div>
    <hr />
    <div class="row">
      <h1 class="subtitle">General contacts - Our office</h1>
      <div class="col-md-6">
        <StaticCardComponent 
        :image="generic.image" 
        />
      </div>
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-5">
            <span class="general-contact">City</span> : Bergamo
            <br />
            <span class="general-contact">Address</span> : Via Solata 10
            <br />
            <span class="general-contact">Postal code</span> : 24100
            <br />
            <span class="general-contact">Phone</span> : +39 1234567891
            <br />
            <span class="general-contact">Mail:</span> locus@live.com
          </div>
          <br />
          <div class="col-md">
            <p class="general-contact">Opening Hours:</p>
            <p>Monday: 08:00 - 13:00 , 14:30 - 19:00</p>
            <p>Tuesday: 08:00 - 13:00 , 14:30 - 19:00</p>
            <p>Wednesday: 08:00 - 13:00 , 14:30 - 19:00</p>
            <p>Thursday: 08:00 - 13:00 , 14:30 - 19:00</p>
            <p>Friday: 08:00 - 13:00 , 14:30 - 19:00</p>
            <p>Saturday: 08:00 - 13:00 , closed</p>
            <p>Sunday: closed</p>
          </div>
        </div>
      </div>
    </div>
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
          title: 'Itineraries info',
          footer: 'itin@live.com',
          image: 'https://drive.google.com/uc?export=view&id=1zax5f1MFQg06wlmYIENJgoJmdtloTdhI',
          color: 'black',
          background: 'rgba(60, 128, 125, 0.611)',
        },
        contact3: {
          id: 2,
          title: 'Points of interest info',
          footer: 'poi@live.com',
          image: 'https://drive.google.com/uc?export=view&id=1OEVTvggYTxVInZKYBvjbMqNriuw5N4S2',
          color: 'black',
          background: 'rgba(60, 128, 125, 0.611);',
        },
        contact1: {
          id: 0,
          title: 'Event info',
          footer: 'event@live.com',
          image: 'https://drive.google.com/uc?export=view&id=11Bx_5QjC5OTML7LYSkekCj_eWMjGkBvM',
          color: 'black',
          background: 'rgba(60, 128, 125, 0.611);',
        },
      },
      generic: {
        image: 'https://www.ioriarredamenti.it/wp-content/uploads/2021/09/come-arredare-ufficio-moderno.jpeg',
      },
    }
  },
}
</script>

<style scoped>
.center {
  justify-content: center;
}
.general-contact {
  font-size: 25px;
  font-weight: 600;
}
</style>