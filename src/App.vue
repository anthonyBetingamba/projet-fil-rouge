<template>
  <AppHeader />
  <router-view />
</template>


<script>
import AppHeader from "./components/AppHeader.vue";
export default {
  name: "app",
  components: {
    AppHeader,
  }
};
</script>

<style>
  /* @import './assets/style/app.css'; */
</style>
