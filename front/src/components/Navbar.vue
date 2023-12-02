<template>
  <nav>
    <label class="switch">
      <input type="checkbox" @change="toggleTheme" />
      <span class="slider round"></span>
    </label>

    <router-link class="navbar home" to="/" @click="tryAgain"
      ><i class="bi bi-telephone-fill"></i> Home</router-link
    >
    <a class="navbar callHist" @click="openCallHist">
      <i class="bi bi-hourglass"></i> Historia Połączeń
    </a>
    <transition name="slide">
      <callHistModal
        v-if="isCallHistOpen"
        @close="isCallHistOpen = false"
      ></callHistModal>
    </transition>
  </nav>
</template>

<script>
import callHistModal from "../views/CallHistoryView.vue";

export default {
  name: "NavBar",
  components: {
    callHistModal,
  },
  data() {
    return {
      isCallHistOpen: false,
      isDarkTheme: false,
    };
  },
  methods: {
    openCallHist() {
      this.isCallHistOpen = !this.isCallHistOpen;
    },
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme;
      document.body.className = this.isDarkTheme ? "dark-theme" : "";
    },
    tryAgain() {
      localStorage.removeItem("phoneNumber");
      localStorage.removeItem("callDuration");
      this.$router.push(`/`);
    },
  },
};
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease-in-out;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateY(-150%);
}
.slide-enter-to,
.slide-leave-from {
  transform: translateY(0);
}
</style>