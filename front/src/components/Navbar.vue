<template>
  <nav>
    <router-link class="navbar home" to="/"
      ><i class="bi bi-telephone-fill"></i> Home</router-link
    >
    <a class="navbar callHist" @click="callHistModal">
      <i class="bi bi-gear-fill spin"></i> Historia Połączeń
    </a>
    <a class="navbar settings" @click="openSettings">
      <i class="bi bi-gear-fill spin"></i> Ustawienia
    </a>

    <SettingsModal
      v-if="isSettingsOpen"
      @close="isSettingsOpen = false"
    ></SettingsModal>

    <callHistModal
      v-if="isCallHistOpen"
      @close="isCallHistOpen = false"
    ></callHistModal>
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
  },
};
</script>