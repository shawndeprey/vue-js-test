<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    created() {
      this.$store.dispatch('getCoins');
      this.$store.dispatch('getMarketData');
    }
  }
</script>

<style src='@/assets/styles/app.css'>
</style>