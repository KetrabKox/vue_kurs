<template>
  <div class="box wbuttons">
    <div class="text">Konsultant jest zajęty.</div>
    <div class="call-button bottom" @click="tryAgain">Spróbuj ponownie</div>
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