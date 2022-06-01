<template>
  <div class="container mt-5">
    <TopPageGeneric
      :name="serviceOfTypeX.typeName"
      :description="serviceOfTypeX.typeDescription"
    />
    <div class="mt-5">
      <ListComponent
        v-for="service in serviceOfTypeX.services"
        :key="service.id"
        :section="service"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceType',
  data() {
    return {
      serviceOfTypeX: {
        /* so che il nome della categoria è al singolare ma, se possibile
                    lo metterei al plurale in qualche modo per la pagina della singola
                    categoria, altrimenti il singolare sembra un erroe si battitura */
        typeName: 'Pharmacies',

        typeDescription:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nemo modi accusamus laudantium eaque reprehenderit molestias molestiae iusto maiores voluptates a harum mollitia quasi neque esse deserunt, repellendus quo perspiciatis?',
        services: {
          pharmacy1: {
            id: 0,
            name: 'Farmacia Comunale Bergamo N. 1',
            op_hours:
              'Monday: 08:30 – 20:00;Tuesday: 08:30 – 20:00;Wednesday: 08:30 – 20:00;Thursday: 08:30 – 20:00;Friday: 08:30 – 20:00;Saturday: 08:30 – 20:00;Sunday: 9.00-13:00',
            address: 'Via Giuseppe Verdi 2 (cap 24121)',
            website:
              'https://lloydsfarmacia.it/pages/store-locator-7016-farmacia-comunale-bergamo-n-1?utm_source=search&utm_medium=gmb&utm_campaign=trovami',
            image:
              'https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg',
          },
          pharmacy2: {
            id: 1,
            name: 'Farmacia Comunale Bergamo N. 1',
            op_hours:
              'Monday: 08:30 – 20:00;Tuesday: 08:30 – 20:00;Wednesday: 08:30 – 20:00;Thursday: 08:30 – 20:00;Friday: 08:30 – 20:00;Saturday: 08:30 – 20:00;Sunday: 9.00-13:00',
            address: 'Via Giuseppe Verdi 2 (cap 24121)',
            website:
              'https://lloydsfarmacia.it/pages/store-locator-7016-farmacia-comunale-bergamo-n-1?utm_source=search&utm_medium=gmb&utm_campaign=trovami',
            image:
              'https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg',
          },
          pharmacy3: {
            id: 2,
            name: 'Farmacia Comunale Bergamo N. 1',
            op_hours:
              'Monday: 08:30 – 20:00;Tuesday: 08:30 – 20:00;Wednesday: 08:30 – 20:00;Thursday: 08:30 – 20:00;Friday: 08:30 – 20:00;Saturday: 08:30 – 20:00;Sunday: 9.00-13:00',
            address: 'Via Giuseppe Verdi 2 (cap 24121)',
            website:
              'https://lloydsfarmacia.it/pages/store-locator-7016-farmacia-comunale-bergamo-n-1?utm_source=search&utm_medium=gmb&utm_campaign=trovami',
            image:
              'https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg',
          },
          pharmacy4: {
            id: 3,
            name: 'Farmacia Comunale Bergamo N. 1',
            op_hours:
              'Monday: 08:30 – 20:00;Tuesday: 08:30 – 20:00;Wednesday: 08:30 – 20:00;Thursday: 08:30 – 20:00;Friday: 08:30 – 20:00;Saturday: 08:30 – 20:00;Sunday: 9.00-13:00',
            address: 'Via Giuseppe Verdi 2 (cap 24121)',
            website:
              'https://lloydsfarmacia.it/pages/store-locator-7016-farmacia-comunale-bergamo-n-1?utm_source=search&utm_medium=gmb&utm_campaign=trovami',
            image:
              'https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg',
          },
          pharmacy5: {
            id: 4,
            name: 'Farmacia Comunale Bergamo N. 1',
            op_hours:
              'Monday: 08:30 – 20:00;Tuesday: 08:30 – 20:00;Wednesday: 08:30 – 20:00;Thursday: 08:30 – 20:00;Friday: 08:30 – 20:00;Saturday: 08:30 – 20:00;Sunday: 9.00-13:00',
            address: 'Via Giuseppe Verdi 2 (cap 24121)',
            website:
              'https://lloydsfarmacia.it/pages/store-locator-7016-farmacia-comunale-bergamo-n-1?utm_source=search&utm_medium=gmb&utm_campaign=trovami',
            image:
              'https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg',
          },
          pharmacy6: {
            id: 5,
            name: 'Farmacia Comunale Bergamo N. 1',
            op_hours:
              'Monday: 08:30 – 20:00;Tuesday: 08:30 – 20:00;Wednesday: 08:30 – 20:00;Thursday: 08:30 – 20:00;Friday: 08:30 – 20:00;Saturday: 08:30 – 20:00;Sunday: 9.00-13:00',
            address: 'Via Giuseppe Verdi 2 (cap 24121)',
            website:
              'https://lloydsfarmacia.it/pages/store-locator-7016-farmacia-comunale-bergamo-n-1?utm_source=search&utm_medium=gmb&utm_campaign=trovami',
            image:
              'https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg',
          },
          pharmacy7: {
            id: 6,
            name: 'Farmacia Comunale Bergamo N. 1',
            op_hours:
              'Monday: 08:30 – 20:00;Tuesday: 08:30 – 20:00;Wednesday: 08:30 – 20:00;Thursday: 08:30 – 20:00;Friday: 08:30 – 20:00;Saturday: 08:30 – 20:00;Sunday: 9.00-13:00',
            address: 'Via Giuseppe Verdi 2 (cap 24121)',
            website:
              'https://lloydsfarmacia.it/pages/store-locator-7016-farmacia-comunale-bergamo-n-1?utm_source=search&utm_medium=gmb&utm_campaign=trovami',
            image:
              'https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg',
          },
          pharmacy8: {
            id: 7,
            name: 'Farmacia Comunale Bergamo N. 1',
            op_hours:
              'Monday: 08:30 – 20:00;Tuesday: 08:30 – 20:00;Wednesday: 08:30 – 20:00;Thursday: 08:30 – 20:00;Friday: 08:30 – 20:00;Saturday: 08:30 – 20:00;Sunday: 9.00-13:00',
            address: 'Via Giuseppe Verdi 2 (cap 24121)',
            website:
              'https://lloydsfarmacia.it/pages/store-locator-7016-farmacia-comunale-bergamo-n-1?utm_source=search&utm_medium=gmb&utm_campaign=trovami',
            image:
              'https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg',
          },
          pharmacy9: {
            id: 8,
            name: 'Farmacia Comunale Bergamo N. 1',
            op_hours:
              'Monday: 08:30 – 20:00;Tuesday: 08:30 – 20:00;Wednesday: 08:30 – 20:00;Thursday: 08:30 – 20:00;Friday: 08:30 – 20:00;Saturday: 08:30 – 20:00;Sunday: 9.00-13:00',
            address: 'Via Giuseppe Verdi 2 (cap 24121)',
            website:
              'https://lloydsfarmacia.it/pages/store-locator-7016-farmacia-comunale-bergamo-n-1?utm_source=search&utm_medium=gmb&utm_campaign=trovami',
            image:
              'https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg',
          },
          pharmacy10: {
            id: 9,
            name: 'Farmacia Comunale Bergamo N. 1',
            op_hours:
              'Monday: 08:30 – 20:00;Tuesday: 08:30 – 20:00;Wednesday: 08:30 – 20:00;Thursday: 08:30 – 20:00;Friday: 08:30 – 20:00;Saturday: 08:30 – 20:00;Sunday: 9.00-13:00',
            address: 'Via Giuseppe Verdi 2 (cap 24121)',
            website:
              'https://lloydsfarmacia.it/pages/store-locator-7016-farmacia-comunale-bergamo-n-1?utm_source=search&utm_medium=gmb&utm_campaign=trovami',
            image:
              'https://www.mark-up.it/wp-content/uploads/sites/3/2019/03/farmacia-2-696x390.jpg',
          },
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
</style>