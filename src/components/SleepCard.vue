<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <p>{{ desc }}</p>
  </div>
</template>

<script setup>
defineProps(["title", "desc"])
</script>

<style scoped>
.card {
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 10px;
  width: 160px;
}
</style>