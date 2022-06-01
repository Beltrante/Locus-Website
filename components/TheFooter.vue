<template>
  <div class="footer">
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-xl space">
            <div class="logo">
              <img
                class="logo-img"
                src="https://i.ibb.co/VHwpzMq/Opera-senza-titolo-2-1.png"
                alt="Logo"
              />
            </div>
            <div class="paragraph-sx">
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
          <div class="col-xl space">
            <h3 class="title-footer">Vision</h3>
            <p class="paragraph">
              The vision of Locus is to provide an immersive and wonderful
              experience in visiting one of the most beautiful city of northern
              Italy: Bergamo. The history of Bergamo is full of art, nature and
              adventures and our vision is to spread it all over the word making
              it accesible with our intercative website!
            </p>
          </div>
          <div class="col-xl space">
            <NuxtLink class="section" to="/all-itineraries">Itineraries</NuxtLink>
            <hr />
            <NuxtLink class="section" to="/all-pois">Points of interest</NuxtLink>
            <hr />
            <NuxtLink class="section" to="/all-events">Events</NuxtLink>
            <hr />
            <NuxtLink class="section" to="/all-services">Services</NuxtLink>
            <hr />
            <NuxtLink class="section" to="/about-the-town">About the town</NuxtLink>
            <hr />
            <NuxtLink class="section" to="/contact-us">Contact-Us</NuxtLink>
          </div>
          <div class="col-xl space">
            <div class="row">
              <div class="social col">
                <a href="https://www.facebook.com"
                  ><img
                    class="icons"
                    src="https://i.ibb.co/s5yYc4F/5305154-fb-facebook-facebook-logo-icon.png"
                    alt="facebook_icon"
                /></a>
              </div>
              <div class="social col">
                <a href="https://www.linkedin.com"
                  ><img
                    class="icons"
                    src="https://i.ibb.co/rZjJsxZ/5305157-connection-linkedin-network-linkedin-logo-icon.png"
                    alt="linkedin_icon"
                /></a>
              </div>
              <div class="social col">
                <a href="https://www.twitter.com"
                  ><img
                    class="icons"
                    src="https://i.ibb.co/HrfSGKT/104501-twitter-bird-icon.png"
                    alt="twitter_icon"
                /></a>
              </div>
              <div class="social col">
                <a href="https://github.com/FBosso/Locus"
                  ><img
                    class="icons"
                    src="https://i.ibb.co/8XbDq3g/4747499-github-icon.png"
                    alt="github_icon"
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
  font-size: 0.95rem;
}
@media screen and (max-width: 500px) {
  .paragraph {
    text-align: left;
  }
}
.paragraph-sx{
  text-align: left;
  font-size: 0.95rem;
}
.space {
  padding: 40px;
}
hr {
  margin: 15px;
}
</style>