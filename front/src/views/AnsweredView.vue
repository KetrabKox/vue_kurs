<template>
  <div class="box wbuttons">
    <div class="header">Połączenie zakończone.</div>
    <div class="header">Czas trwania: {{ callDuration }}</div>
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
    this.phoneNum = localStorage.getItem("phoneNumber");
    this.callHistory = JSON.parse(localStorage.getItem("callHistory")) || [];
    this.callHistory.push({
      id: this.callHistory.length + 1,
      number: this.phoneNum,
      duration: this.callDuration,
    });
    localStorage.setItem("callHistory", JSON.stringify(this.callHistory));
  },
  methods: {
    formatTime(time) {
      return new Date(time * 1000).toISOString().substr(11, 8);
    },
  },
};
</script>