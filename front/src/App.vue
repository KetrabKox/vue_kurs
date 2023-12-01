<template>
  <div class="window">
    <div class="circle c-top"></div>
    <div class="circle c-bottom"></div>
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style src="./style/style.css"></style>