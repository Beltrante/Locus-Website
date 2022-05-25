<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-5">
        <StaticCardComponent :section="sections.section1" />
      </div>
      <div class="col-md-7">
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
    <hr>
    <div class="row">
      <div class="col-md-7">
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
      <div class="col-md-5">
        <StaticCardComponent :section="sections.section2" />
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-md-5">
        <StaticCardComponent :section="sections.section3" />
      </div>
      <div class="col-md-7">
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
    <hr>
    <div class="row">
      <div class="col-md-7">
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
      <div class="col-md-5">
        <StaticCardComponent :section="sections.section4" />
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
          img: 'https://static.miraheze.org/nonciclopediawiki/thumb/d/d1/Bergamo_in_una_tipica_giornata_primaverile.jpg/450px-Bergamo_in_una_tipica_giornata_primaverile.jpg',
        },
        section2: {
          id: 1,
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Alexander-of-Bergamo-San_Alessandro.jpg/220px-Alexander-of-Bergamo-San_Alessandro.jpg',
          title: '',
        },
        section3: {
          id: 2,
          img: 'https://www.arte2000.it/wp-content/uploads/2018/08/2018-09-leone-san-marco-porta-carta-marmo-1100x431.jpg',
          title: '',
        },
        section4: {
          id: 3,
          img: 'https://www.eccolecco.it/wp-content/uploads/bergamo-citta-alta-centro-storico.jpg',
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