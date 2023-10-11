<template>
  <div id="app">
    <Nav v-if="showNav" class="fixed inset-0 z-50 transition-all duration-500 ease-in-out transform bg-white shadow-lg max-h-16"></Nav>
    <div v-if="showNav" class="w-screen h-16"></div>
    <router-view></router-view>
    <Footer v-if="showFooter"></Footer>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import Home from '@/views/Home.vue'

export default {
  name: 'App',
  metaInfo: {
    title: '首页',
    titleTemplate: '%s | 领燕科技'
  },
  data() {
    return {
      showNav: this.$route.name != 'NotFound',
      showFooter: this.$route.name != 'NotFound',
    }
  },
  components: {
    Nav,
    Footer,
    Home,
  },
  mounted () {
  },
  watch: {
    $route() {
      this.showNav = this.$route.name != 'NotFound'
      this.showFooter = this.$route.name != 'NotFound'
    }
},
  methods: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
