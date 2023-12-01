<template>
  <div class="box">
    <div class="text">
      Połączenie zakończone. Czas trwania: {{ callDuration }} sekund.
    </div>
    <div class="call-button-bottom" @click="tryAgain">Spróbuj ponownie</div>
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
    this.callDuration = localStorage.getItem("callDuration");
  },
  methods: {
    tryAgain() {
      localStorage.removeItem("phoneNumber");
      localStorage.removeItem("callDuration");
      this.$router.push(`/`);
    },
  },
};
</script>