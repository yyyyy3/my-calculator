<template>
  <div class="quiz-container">
    <h2>測驗</h2>

    <div class="input-group">
      <label>昨晚睡了幾小時？</label>
      <input 
        v-model.number="hours" 
        type="number" 
        min="0" 
        max="24" 
        class="styled-input"
      />
    </div>

    <div class="result-box">
      <p>狀態：<strong>{{ status }}</strong></p>
      <p>建議：<strong>{{ advice }}</strong></p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"

const hours = ref(6)

const status = computed(() => {
  if (hours.value >= 7) return "正常"
  if (hours.value >= 5) return "輕度"
  if (hours.value >= 3) return "中度"
  return "重度"
})

const advice = computed(() => {
  if (hours.value >= 7) return "維持"
  if (hours.value >= 5) return "補眠"
  if (hours.value >= 3) return "休息"
  return "快睡"
})
</script>

<style scoped>
.quiz-container {
  max-width: 400px;
}
.input-group {
  margin-bottom: 20px;
}
.styled-input {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-left: 10px;
}
.result-box {
  background: #f4f4f9;
  padding: 15px;
  border-radius: 8px;
}
</style>