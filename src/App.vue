<script>
  import Navbar from './components/partials/navbar.vue';

  export default {
    components:{
      Navbar
    }
  }
</script>

<template>
  <div class="container">
    <Navbar/>
    <router-view></router-view>
  </div>
</template>


<style lang="scss" scoped>

</style>