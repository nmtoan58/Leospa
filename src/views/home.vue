<template>
  <div class="banner">
    <div class="container">
      <div class="wrap-banner-content">
        <div class="banner-content">
          <span>spa & beauty center</span>
          <span>Beauty and success starts here.</span>
          <span
            >Together creeping heaven upon third dominion be upon won't darkness
            rule behold it created good saw after she'd Our set living.</span
          >
          <div class="button-container">
            <div class="button-wrap">
              <router-link class="btn-reserve" to="/feature"
                >RESERVE NOW</router-link
              >
            </div>
            <div>
              <router-link
                class="video-control"
                to="/feature"
              >
                <i class="ti-control-play"></i>
                Watch our story
              </router-link>
            </div>
          </div>
        </div>
        <div class="banner-img">
          <img src="../assets/images/spa.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  <About></About>
  <div class="body-treatment">
    <div class="body-treatment-show">
      <div class="body-treatment-item">
        <div class="body-treatment-img">
          <img src="../assets/images/body-treatment/1.jpg" alt="" />
        </div>
        <div class="body-treatment-hover">
          <div class="body-treatment-overlay">
            <img src="../assets/images/body-treatment/1.png" alt="" />
            <span>Body Treatment</span>
          </div>
        </div>
      </div>
      <div class="body-treatment-item">
        <div class="body-treatment-img">
          <img src="../assets/images/body-treatment/2.jpg" alt="" />
        </div>
        <div class="body-treatment-hover">
          <div class="body-treatment-overlay">
            <img src="../assets/images/body-treatment/1.png" alt="" />
            <span>Body Treatment</span>
          </div>
        </div>
      </div>
      <div class="body-treatment-item">
        <div class="body-treatment-img">
          <img src="../assets/images/body-treatment/3.jpg" alt="" />
        </div>
        <div class="body-treatment-hover">
          <div class="body-treatment-overlay">
            <img src="../assets/images/body-treatment/1.png" alt="" />
            <span>Body Treatment</span>
          </div>
        </div>
      </div>
      <div class="body-treatment-item">
        <div class="body-treatment-img">
          <img src="../assets/images/body-treatment/4.jpg" alt="" />
        </div>
        <div class="body-treatment-hover">
          <div class="body-treatment-overlay">
            <img src="../assets/images/body-treatment/1.png" alt="" />
            <span>Body Treatment</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Procerdure></Procerdure>
  <slider-vue></slider-vue>
   <team-vue></team-vue>
  <appointment-vue></appointment-vue>
  <blog></blog>
  <contact-vue></contact-vue>
 
</template>
<script>
import About from "../components/About.vue";
import Procerdure from "../components/Procerdure.vue";
import Blog from "../components/Blog.vue";
import ContactVue from "../components/Contact.vue";
import TeamVue from '../components/Team.vue'
import AppointmentVue from "../components/Appointment.vue";
import SliderVue from "../components/Slider.vue";
export default {
  components: {
    About,
    Procerdure,
    Blog,
    ContactVue,
    TeamVue,
    AppointmentVue,
    SliderVue
  },
};
</script>
<style scoped>
.body-treatment {
  height: 57rem;
}
.banner {
  padding: 8%;
  position: relative;
  background: url("../assets/images/leaf.png");
  background-repeat: no-repeat;
  background-position: left;
  background-position-y: center;
}
.wrap-banner-content {
  width: 100%;
  display: flex;
}
.banner-content {
  display: flex;
  flex-direction: column;
  width: 50%;
}
.banner-content span:nth-child(1) {
  color: var(--primary-color);
  font-family: "Rufina";
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
  font-size: 1.5rem;
}
.banner-content span:nth-child(2) {
  font-size: 6rem;
  font-weight: 600;
  margin-bottom: 2.5rem;
  line-height: 7.5rem;
}
.banner-content span:nth-child(3) {
  font-family: "Roboto";
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--sub-text-color);
  margin-bottom: 5rem;
}
.banner-img {
  position: absolute;
  right: 0;
  top: -13%;
  z-index: -1;
}
.button-container {
  display: flex;
  align-items: center;
  font-family: "Roboto";
}
.btn-reserve {
  display: block;
  text-align: center;
  background-color: var(--primary-color);
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 0.8;
  text-transform: uppercase;
  min-width: 17rem;
  padding: 2rem 1.5rem;
  margin-right: 1.5rem;
  color: var(--white-color);
}

.ti-control-play {
  border-radius: 50%;
  background-color: #fcf5ee;
  color: var(--primary-color);
  display: inline-block;
  line-height: 4.4rem;
  text-align: center;
  margin-right: 1rem;
  height: 4.4rem;
  width: 4.4rem;
}
.video-control {
  color: #555;
  font-size: 15px;
  font-weight: 400;
}

/* TREATMENT */
.body-treatment-show {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}
.body-treatment-item {
  width: 25%;
  position: relative;
  height: 100%;
  
}
.body-treatment-item:not(:first-child, :last-child) {
margin: 0 0.3rem;
}
.body-treatment-item:first-child {
margin-right: 0.3rem;
}
.body-treatment-item:last-child {
margin-left: 0.3rem;
}
.body-treatment-item:hover .body-treatment-hover {
  display: flex;
}
.body-treatment-hover {
  position: absolute;
  z-index: 1;
  top: 0;
  display: none;
  flex-direction: column;
  background-color: rgba(255, 129, 126, 0.9);
  width: 100%;
  height: 100%;
  align-content: center;
  justify-content: center;
}

.body-treatment-img img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
.body-treatment-img {
  width: 100%;
  height: 100%;
}

.body-treatment-hover img {
  width: 4.7rem;
  margin-bottom: 2rem;
  z-index: 1;
}
.body-treatment-overlay {
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  font-size: 1.5rem;
  font-family: "Rufina";
  color: var(--white-color);
}

</style>
