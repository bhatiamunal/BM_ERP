<template>
  <div id="app">
    <AppHeader />

    <!-- Routed components will be rendered here -->
    <router-view />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
 import AppHeader from './components/AppHeader.vue';
export default {
  name: 'App',
 components: {
  AppHeader
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
