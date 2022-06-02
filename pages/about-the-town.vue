<template>
  <!-- this div contains the whole page that is divided in 4 row, one for each main period of the hystory of bergamo -->
  <!-- I will comment on the first row, everything is also applied to the remaining 3 rows -->
  <div class="container mt-5">
    <!-- First row - it contains an image (passed in StaticCard Component) and an explaination -->
    <div class="row">
      <!-- the breakpoint is set to lg to better increase responsiveness and UI quality -->

      <!-- the classes order-lg-1 and order-1 are used to allow the alternate visualization of images and text while 
      using desktop version and, at the same time, to allow the mobile versione to always stack the image on top of 
      the explaination (in order to have an appealing and coherent visualization) -->
      <div class="col-lg-5 order-lg-1 order-1">
        <!-- The StaticCardComponent takes an image and, with it, produces a static card (i.e: a non clickable card) -->
        <StaticCardComponent :image="sections.section1.image" />
      </div>
      <!-- for the text, the ordering classes are order-lg-2 and order-2 beacuse this row, both in desktop and mobile,
      visualization, will display first the image and than the text -->
      <div class="col-lg-7 order-lg-2 order-2">
        <h2 class="subtitle">
          Name's origin
          <p class="snippet">
            There are numerous hypotheses put forward to explain the origin of
            the toponym Bergamo. In classical Latin the toponym is attested as
            Bergomum, while in late Latin Bergame. A plausible hypothesis links
            it to the prelatin base barga "hut" or to Ligurian names such as
            Bergima (locality near Marseille) from a root * bherg, "high". The
            historian and politician from Bergamo Bortolo Belotti has compared
            the toponym to previous pre-Celtic names which would be followed by
            the name Bèrghem, of which Bergomum would have been only the
            Latinization. Antonio Tiraboschi instead supported the hypothesis of
            a Germanic derivation of Bergamo from berga "mountain" and * haima,
            "settlement" but also "world"; however this hypothesis clashes with
            the absence of documents regarding Germanic settlements in the area
            before the Roman conquest.
          </p>
        </h2>
      </div>
    </div>
    <hr />
    <!-- Second row -->
    <div class="row">
      <!-- here the ordering classes are alternated (order-lg-1 and order-2) because:
      - in desktop the displaying order will be: Text, Image
      - in mobile the displaiyng order will be (as always): Image, Text  -->
      <div class="col-lg-7 order-lg-1 order-2">
        <h2 class="subtitle">The Lombard duchy</h2>
        <p class="snippet">
          With the invasion of 568 led by Alboino, Bergamo also fell under the
          Lombard dominion, assuming considerable importance for its
          geopolitical position. Bergamo, in fact, was the crossroads between
          the military roads that connected Friuli to the western part of the Po
          Valley and to Pavia, the capital of the kingdom. The Duchy of Bergamo
          was one of the territorial entities that formed the Lombard kingdom.
          Created around 570, shortly after the invasion led by Alboino, it
          ceased to be the seat of the ducal in 702. During the decade of
          Lombard anarchy (Period of the Dukes) following the killing of Alboino
          and Clefi, Bergamo was ruled by Wallari, first duke of Bergamo and its
          territory in the tumultuous period of the Lombard conquest not yet
          consolidated.
        </p>
      </div>
      <div class="col-lg-5 order-lg-2 order-1">
        <StaticCardComponent :image="sections.section2.image" />
      </div>
    </div>
    <hr />
    <!-- Third row -->
    <div class="row">
      <div class="col-lg-5 order-lg-1 order-1">
        <StaticCardComponent :image="sections.section3.image" />
      </div>
      <div class="col-lg-7 order-lg-2 order-2">
        <h2 class="subtitle">The Lombard-Venetian kingdom</h2>
        <p class="snippet">
          The Congress of Vienna, in 1815, made Bergamo part of the Kingdom
          Lombardo-Veneto, and the capital of the province of the same name.
          initially the Austrians were destined as the restorers of the order,
          the city it received in 1816 and in 1825 the visit of Francesco I.
          When in 1838 Ferdinand I of Austria came to visit the city,
          accompanied for over 200 dukes and nobles of all kinds, there was a
          party that lasted three days with lights, shows and ceremonies. In
          memory of this visit were raised the propylaea of Porta Nuova and the
          road that from the station (not yet existing) it went up to Porta S.
          Agostino, it was called Via Ferdinandea.
        </p>
      </div>
    </div>
    <hr />
    <!-- Fourth row -->
    <div class="row">
      <div class="col-lg-7 order-lg-1 order-2">
        <h2 class="subtitle">Nowadays</h2>
        <p class="snippet">
          From 9 July 2017 the Venetian walls of Bergamo became part of UNESCO,
          as a World Heritage Site, in the transnational serial site "Venetian
          defense works between the 16th and 17th centuries: State from
          Land-State from Western Sea". In October of the same year, the 43rd G7
          summit on agriculture was held in Bergamo as part of the larger
          international meeting organized in Taormina. The "Bergamo Charter", an
          international commitment signed during the summit, aims to reduce
          world hunger by 2030, strengthen cooperation for agricultural
          development in Africa and ensure price transparency.
        </p>
      </div>
      <div class="col-lg-5 order-lg-2 order-1">
        <StaticCardComponent :image="sections.section4.image" />
      </div>
    </div>
    <div class="row"></div>
  </div>
</template>

<script>
export default {
  name: 'AboutTheTown',
  data() {
    return {
      sections: {
        section1: {
          id: 0,
          image:
            'https://media.meer.com/attachments/007fd5ffb8cce02004b2a6c2171bddbee15c3e08/store/fill/1020/574/288e0badbcabaf1286daa7f26bcd98c52f102cebc6f960db9c0ceec7e31c/Bergamo-Alta.jpg',
        },
        section2: {
          id: 1,
          image: 'https://www.vivitelese.it/wp-content/uploads/2019/01/aa.jpg',
          title: '',
        },
        section3: {
          id: 2,
          image:
            'https://www.arte2000.it/wp-content/uploads/2018/08/2018-09-leone-san-marco-porta-carta-marmo-1100x431.jpg',
          title: '',
        },
        section4: {
          id: 3,
          image:
            'https://www.eccolecco.it/wp-content/uploads/bergamo-citta-alta-centro-storico.jpg',
          title: '',
        },
      },
    }
  },
}
</script>

<style scoped>
.subtitle {
  font-weight: 400;
}
</style>