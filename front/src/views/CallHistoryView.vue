<template>
  <div class="modal">
    <div class="modal-content">
      <span class="close-button" @click="$emit('close')">&times;</span>
      <h2 class="modal-header">Historia Połączeń</h2>
      <div></div>
      <div class="callHist-list">
        <div v-if="callHistory.length === 0">Brak połączeń</div>
        <div
          v-for="call in callHistory"
          :key="call.id"
          class="callHist-Wrapper"
        >
          <div>{{ call.id }}</div>
          <div>{{ call.number }}</div>
          <div>{{ call.duration }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "callHistModal",
  data() {
    return {
      callHistory: [],
    };
  },
  mounted() {
    this.callHistory = localStorage.getItem("callHistory")
      ? JSON.parse(localStorage.getItem("callHistory"))
      : [];
  },
};
</script>