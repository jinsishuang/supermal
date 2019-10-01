<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- <swiper>
      <swiper-item v-for="(item, index) in banner" :key="index">
        <img :src="item.url" alt="" style="{width: '80px', height: '80px'}">
      </swiper-item>
    </swiper> -->
    <carousel />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata } from "network/home";
import { Swiper, SwiperItem } from "components/common/swiper";
import Carousel from 'components/common/carousel/Carousel';
export default {
  name: "Home",
  components: {
    NavBar,
    Swiper,
    SwiperItem,
    Carousel
  },
  data() {
    return {
      banner: [],
      recommends: null
    };
  },
  created() {
    getHomeMultidata().then(res => {
      this.recommends = res.data.recommends;
      this.banner = res.data.banner;
    });
  }
};
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
  color: white;
}
</style>