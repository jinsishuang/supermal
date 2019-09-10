<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import { getHomeMultidata } from 'network/home'
  export default {
    name: 'Home',
    components: {
      NavBar
    },
    data() {
      return {
        list: [],
        data: []
      }
    },
    created() {
      getHomeMultidata().then(res => {
        console.log(res)
        this.list = res.data;
      })
    }
  }
</script>

<style>
  .home-nav {
    background-color: var(--color-tint);
    color: white
  }
</style>