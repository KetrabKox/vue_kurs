<template>
  <nav>
    <div class="button-r" id="themeButton">
      <input type="checkbox" class="checkbox" />
      <div class="knobs"></div>
      <div class="layer"></div>
    </div>
    <router-link class="navbar home" to="/"
      ><i class="bi bi-telephone-fill"></i> Home</router-link
    >
    <a class="navbar callHist" @click="callHistModal">
      <i class="bi bi-hourglass"></i> Historia Połączeń
    </a>
    <a class="navbar settings" @click="openSettings">
      <i class="bi bi-gear-fill spin"></i> Ustawienia
    </a>
    <transition name="slide">
      <SettingsModal
        v-if="isSettingsOpen"
        @close="isSettingsOpen = false"
      ></SettingsModal>
    </transition>

    <transition name="slide">
      <callHistModal
        v-if="isCallHistOpen"
        @close="isCallHistOpen = false"
      ></callHistModal>
    </transition>
  </nav>
</template>

<script>
import SettingsModal from "../views/SettingsView.vue";
import callHistModal from "../views/CallHistoryView.vue";

export default {
  name: "NavBar",
  components: {
    SettingsModal,
    callHistModal,
  },
  data() {
    return {
      isCallHistOpen: false,
      isSettingsOpen: false,
    };
  },
  methods: {
    openSettings() {
      this.isSettingsOpen = true;
    },
    callHistModal() {
      this.isCallHistOpen = true;
    },
    toggleTheme() {
      document.body.classList.toggle("dark");
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
  transform: translateY(-100%);
}
.slide-enter-to,
.slide-leave-from {
  transform: translateY(0);
}
</style>