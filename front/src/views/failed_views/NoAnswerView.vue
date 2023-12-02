<template>
  <div class="box wbuttons">
    <div class="header">Brak odpowiedzi.</div>
    <div class="call-button bottom" @click="tryAgain">Again</div>
  </div>
</template>

<script>
export default {
  methods: {
    tryAgain() {
      localStorage.removeItem("phoneNumber");
      this.$router.push(`/`);
    },
  },
};
</script>