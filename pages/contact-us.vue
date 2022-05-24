<template>
  <div class="container mt-5">
    <TopPageGeneric />
    <div class="row">
     <StaticCardComponent />
    </div>
    <hr />
    <h1 class="subtitle">Share your doubts with us!</h1>
    <ContactForm />
  </div>
</template>

<script>
export default {
  name: 'ContactUsPage',
  data() {
    return {
      // type definisce quando si clicca la card dove ti manda, ma queste carte non dovrebbero essere non cliccabili?
      // per ora ho messo event giusto per non avere la pagina che da errore

      type: { name: 'event' },
      contacts: {
        contact1: {
          id: 0,
          name: 'Event info - event@live.com',
          mail: '',
          image:
            'https://drive.google.com/uc?export=view&id=11Bx_5QjC5OTML7LYSkekCj_eWMjGkBvM',
        },
        contact2: {
          id: 1,
          name: 'Itineraries info - itineraries@live.com',
          mail: '',
          image:
            'https://drive.google.com/uc?export=view&id=1zax5f1MFQg06wlmYIENJgoJmdtloTdhI',
        },
        contact3: {
          id: 2,
          name: 'Points of interest info',
          mail: 'poi@live.com',
          image:
            'https://drive.google.com/uc?export=view&id=1OEVTvggYTxVInZKYBvjbMqNriuw5N4S2',
        },
      },
    }
  }
}
</script>

<style scoped>
.external-static {
    padding: 8px;
    height: 400px;
    border-radius: 10px;
    background: rgba(60, 128, 125, 0.611);
    border: 2px solid white;
    margin: 5px;
  }
</style>