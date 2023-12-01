<template>
  <nav>
    <router-link class="navbar home" to="/"
      ><i class="bi bi-telephone-fill"></i> Home</router-link
    >
    <router-link class="navbar callHist" to="/callHistory"
      ><i class="bi bi-clock-fill"></i> Historia Połączeń</router-link
    >
    <router-link class="navbar settings" to="/settings"
      ><i class="bi bi-gear-fill spin"></i> Ustawienia</router-link
    >
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style src="../style/navbar.css"></style>