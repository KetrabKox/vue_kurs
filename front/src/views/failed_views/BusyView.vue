<template>
  <div class="box wbuttons">
    <div class="header">Konsultant jest zajęty.</div>
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