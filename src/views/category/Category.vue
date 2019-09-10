<template>
  <div id="home">
    <h2>分类</h2>
    <!-- <nav-bar class="home-nav"><div slot="center">分类</div></nav-bar> -->
  </div>
</template>

<script>
  // import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: 'Category',
    components: {
      // NavBar
    }
  }
</script>

<style>
  .home-nav {
    background-color: var(--color-tint);
    color: white
  }
</style>