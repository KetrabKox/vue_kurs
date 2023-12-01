<template>
  <div class="modal">
    <div class="modal-content">
      <span class="close-button" @click="$emit('close')">&times;</span>
      <h2>Historia Połączeń</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "callHistModal",
};
</script>