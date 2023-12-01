<template>
  <div class="box wbuttons">
    <div class="text">Połączenie zakończone.</div>
    <div class="text">Czas trwania: {{ callDuration }}</div>
    <div class="call-button bottom" @click="tryAgain">Spróbuj</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      callDuration: null,
    };
  },
  mounted() {
    this.callDuration = this.formatTime(localStorage.getItem("callDuration"));
  },
  methods: {
    tryAgain() {
      localStorage.removeItem("phoneNumber");
      localStorage.removeItem("callDuration");
      this.$router.push(`/`);
    },
    formatTime(time) {
      return new Date(time * 1000).toISOString().substr(11, 8);
    },
  },
};
</script>