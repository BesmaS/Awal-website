<template>
  <section id="portfolio" class="py-20 px-4 bg-black">
    <div class="max-w-6xl mx-auto">
      <h3 class="text-3xl font-bold mb-12 text-center text-beige">Réalisations</h3>

      <Swiper
        :modules="[Navigation, Pagination, Autoplay, EffectCoverflow]"
        effect="coverflow"
        :coverflowEffect="{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false
        }"
        :loop="true"
        :centeredSlides="true"
        :autoplay="{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }"
        :spaceBetween="20"
        :slidesPerView="1.2"
        navigation
        pagination
        class="mySwiper"
      >
        <SwiperSlide v-for="(video, index) in videos" :key="index">
          <a
            :href="video.link"
            target="_blank"
            class="block h-64 rounded shadow bg-[#1a1a1a] flex items-center justify-center text-xl font-semibold text-white hover:bg-[#2a2a2a] transition"
          >
            {{ video.title }}
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

const videos = [
  { title: 'Clip 2024 – Artiste X', link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
  { title: 'Aftermovie Festival', link: 'https://www.youtube.com/watch?v=ysz5S6PUM-U' },
  { title: 'Publicité Produit Y', link: 'https://www.youtube.com/watch?v=tgbNymZ7vqY' },
  { title: 'Teaser Nouveau Projet', link: 'https://www.youtube.com/watch?v=2Vv-BfVoq4g' },
  { title: 'Documentaire', link: 'https://www.youtube.com/watch?v=3fumBcKC6RE' },
  { title: 'Interview backstage', link: 'https://www.youtube.com/watch?v=ScMzIvxBSi4' }
]
</script>

<style scoped>
.mySwiper {
  position: relative;
}

/* Flèches masquées au repos */
.mySwiper :deep(.swiper-button-prev),
.mySwiper :deep(.swiper-button-next) {
  opacity: 0;
  color: #F4ECD8; /* beige clair, comme ton thème */

  transition: opacity 0.3s ease;
}

/* Flèches visibles au survol */
.mySwiper:hover :deep(.swiper-button-prev),
.mySwiper:hover :deep(.swiper-button-next),
.mySwiper :deep(.swiper-button-prev:hover),
.mySwiper :deep(.swiper-button-next:hover) {
  opacity: 1;
}
</style>
