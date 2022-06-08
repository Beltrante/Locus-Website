<template>
  <!-- class container in order to center the contend -->
  <!-- class mt-5 in order to heva a margin top of 5 units -->
  <div class="container mt-5">
    <div class="row center">
      <h1 class="subtitle mb-4">Specific mail for specific issues</h1>
      <!-- this component will display three cards illustrating 
      the three different mail in order to ask spefic doubts 
      related to POIs, Events and Itineraries -->
      <StaticCardComponent
        v-for="contact in contacts"
        :key="contact.id"
        :title="contact.title"
        :image="contact.image"
        :footer="contact.footer"
        class="col-xl-3 mb-5"
      />
    </div>
    <hr />
    <div class="row">
      <h1 class="subtitle mb-4">Share your doubts with us!</h1>
      <!-- this component is used to include the form in the contact-us page -->
      <ContactForm />
    </div>
    <hr />
    <div class="row">
      <h1 class="subtitle mb-4">General contacts - Our office</h1>
      <div class="col-xxl-6">
        <!-- this component is used to display the image of the office of the company 
        responsable for the content of the page -->
        <StaticCardComponent :image="generic.image" />
      </div>
      <div class="col-xxl-6 p-3 alignment">
        <div class="row">
          <div class="col-md-5 mb-5">
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
          <div class="col-md alignment">
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
          image: 'https://i.ibb.co/x1nJB46/itinerari-35.webp',
          
        },
        contact3: {
          id: 2,
          title: 'Places info',
          footer: 'place@live.com',
          image: 'https://i.ibb.co/cbQXyK3/places-35.webp',
          
        },
        contact1: {
          id: 0,
          title: 'Event info',
          footer: 'event@live.com',
          image: 'https://i.ibb.co/kH0Qy0W/events-11zon-2-40.webp',
          
        },
      },
      generic: {
        image:
          'https://i.ibb.co/d2QtLvw/office-11zon.webp',
      },
    }
  },
  head() {
    return {
      title: `Contact us`,
      meta: [
        {
          hid: 'descriptionContactUs',
          name: 'description',
          content: `All the ways to keep in touch with the Locus team: mails for specific issues (itinerary or events or places), form if the issue is more generic and xcontacts of the office`,
        },
        {
          hid: 'keywordsContactUs',
          name: 'keywords',
          content: ['Contacts', `email - ${this.contacts.contact1.title}`, `email - ${this.contacts.contact2.title}`, `email - ${this.contacts.contact3.title}`, 'submit form', 'address', 'opening hours' ],
        },
      ],
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
.alignment {
  text-align: left;
}
@media screen and (max-width: 1285px) {
  .alignment {
    text-align: center;
  }
}
</style>