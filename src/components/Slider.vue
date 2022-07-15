<template>
  <div class="slider">
    <div class="container">
      <swiper
        :spaceBetween="30"
        :centeredSlides="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>
          <div class="slider-item">
            <div class="quotes-img">
                <img src="../assets/images/quotes/quote.png" alt="">
            </div>
            <div class="quotes">
              <p>First i beast be fruitful open you tree all Won't can't likeness and you're have whales creature seed to two grass life blessed you meat shall you winged under from their there he 
                That you're one called gather make much red wherein set fourth green bearing fifth replenish given she had.</p>
            </div>
            <div class="client">
              <img src="../assets/images/quotes/client-1.png" alt="">
              <p>
                Jack Marsh, <span>Executive</span>
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slider-item">
            <div class="quotes-img">
                <img src="../assets/images/quotes/quote.png" alt="">
            </div>
            <div class="quotes">
              <p>First i beast be fruitful open you tree all Won't can't likeness and you're have whales creature seed to two grass life blessed you meat shall you winged under from their there he 
                That you're one called gather make much red wherein set fourth green bearing fifth replenish given she had.</p>
            </div>
            <div class="client">
              <img src="../assets/images/quotes/client-1.png" alt="">
              <p>
                Jack Marsh, <span>Executive</span>
              </p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>
<style scoped>
.slider {
  padding: 5rem;
  background-color: var(--footer-bg-color);
}
.slider-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 calc((1140px - 920px )/ 2);
}
.quotes-img {
  margin-bottom: 4.5rem;
  
}

.quotes p {
  margin-bottom: 4.5rem;
  margin-top: 0;
  font-size: 1.8rem;
  font-family: 'Rufina';
  text-align: center;
  color: var(--header-text-color);
}
.client {
  margin-bottom: 2.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.client img {
  border-radius: 50%;
  width: 7.6rem;
  height: 7.6rem;
  margin-bottom: 2.2rem;
}

.client p{
  display: block;
  margin-bottom: 5rem;
  font-size: 2.2rem;
  color: var(--header-text-color);
}
.client p span {
  font-size: 1.8rem;
}
</style>
