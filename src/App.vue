<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
    <!-- history -->
    <!-- <a href="/#/login">Login</a> -->
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  name: 'app',
  components: {
    Navbar
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">

</style>
