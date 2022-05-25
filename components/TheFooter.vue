<template>
  <div class="footer">
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-lg space">
            <div class="logo">
              <img
                class="logo-img"
                src="https://drive.google.com/uc?export=view&id=10PsHvYIL1H7_3zTNsNDPPCpW3XyZw2xa"
                alt=""
              />
            </div>
            <div class="paragraph">
              <span class="subtitle-footer">Bergamo, Lombardia (IT)</span>
              <br />
              <span class="subtitle-footer">Postal Code:</span> 24121-24129
              <br />
              <span class="subtitle-footer">Coordinates:</span> 45°41′N ,
              9°40′E
              <br>
              <span class="subtitle-footer">Neighboring municipalities:</span>
              Azzano San Paolo, Curno, Gorle, Lallio, Mozzo, Orio al Serio,
              Paladina, Ponteranica, Seriate, Sorisole, Stezzano, Torre Boldone,
              Treviolo, Valbrembo
            </div>
          </div>
          <div class="col-lg space">
            <h3 class="title-footer">Vision</h3>
            <p class="paragraph">
              The vision of Locus is to provide an immersive and wonderful
              experience in visiting one of the most beautiful city of northern
              Italy: Bergamo. The history of Bergamo is full of art, nature and
              adventures and our vision is to spread it all over the word making
              it accesible with our intercative website!
            </p>
          </div>
          <div class="col-md space">
            <NuxtLink class="section" to="/big-deep/itinerary">Itineraries</NuxtLink>
            <hr />
            <NuxtLink class="section" to="/big-deep/poi">Points of interest</NuxtLink>
            <hr />
            <NuxtLink class="section" to="/big-deep/event">Events</NuxtLink>
            <hr />
            <NuxtLink class="section" to="/">Services</NuxtLink>
            <hr />
            <NuxtLink class="section" to="/about-the-town">About the town</NuxtLink>
            <hr />
            <NuxtLink class="section" to="/contact-us">Contact-Us</NuxtLink>
          </div>
          <div class="col-lg space">
            <div class="row">
              <div class="social col">
                <a href="https://www.facebook.com"
                  ><img
                    class="icons"
                    src="https://drive.google.com/uc?export=view&id=1DFz6iLcU6q79bTsbQ2Sfz9ZTfNUGgWKu"
                    alt=""
                /></a>
              </div>
              <div class="social col">
                <a href="https://www.linkedin.com"
                  ><img
                    class="icons"
                    src="https://drive.google.com/uc?export=view&id=1JUtjKlRA4WEWdVcDJiZxpQR43cOgtQps"
                    alt=""
                /></a>
              </div>
              <div class="social col">
                <a href="https://www.twitter.com"
                  ><img
                    class="icons"
                    src="https://drive.google.com/uc?export=view&id=1FFqGAmS1aaeNUj19j9Vidm4K4f6gh0s_"
                    alt=""
                /></a>
              </div>
              <div class="social col">
                <a href="https://github.com/FBosso/Locus"
                  ><img
                    class="icons"
                    src="https://drive.google.com/uc?export=view&id=1s5lYCBJdzd_whifexDB-tCsCFDvgjgLr"
                    alt=""
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'TheFooter',
}
</script>

<style scoped>
.footer {
  margin-top: 40px;
  background: rgb(60, 128, 125);
  width: 100%;
}
.row {
  text-align: center;
}

.section {
  text-decoration: none;
  color: rgb(171, 171, 171);
  font-size: 1em;
  transition: 0.2s ease;
}
.section:hover {
  color: white;
}
.icons {
  height: 50px;
  transition: 0.4s ease;
}
.icons:hover {
  filter: invert();
}
.social {
  padding: 0%;
  padding-top: 30px;
}
.title-footer {
  font-weight: 700;
  text-align: left;
}
.logo {
  text-align: left;
}
.logo-img {
  height: 60px;
  margin-bottom: 5px;
}
.subtitle-footer {
  font-weight: 600;
}
.paragraph {
  text-align: justify;
}
.space {
  padding: 40px;
}
hr {
  margin: 15px;
}
</style>