<template>
  <div class="box">
    <div class="header">Trwa połączenie...</div>
    <div class="header">{{ callDuration }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      callDuration: "00:00:00",
    };
  },
  methods: {
    addTime() {
      let sec = 0;
      setInterval(() => {
        sec++;
        this.callDuration = this.formatTime(sec);
      }, 1000);
    },
    formatTime(time) {
      return new Date(time * 1000).toISOString().substr(11, 8);
    },
  },
  mounted() {
    this.addTime();
  },
};
</script>