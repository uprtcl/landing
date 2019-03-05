<template>
  <div id="app">
    <app-landing-page></app-landing-page>
  </div>
</template>

<script>
import LandingPage from './components/LandingPage.vue'

export default {
  name: 'app',
  components: {
    'app-landing-page': LandingPage
  }
}
</script>

<style>

html, body, h1, h2, h3, h4, h5 {
  font-family: 'Montserrat', sans-serif;
}

#app {
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
