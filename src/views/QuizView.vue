<template>
  <div class="quiz-container">
    <h2>熬夜程度自我檢測</h2>
    <div class="quiz-card">
      <div class="input-group">
        <label>昨晚幾點睡？ (24小時制)</label>
        <input type="number" v-model="sleepTime" placeholder="例如: 3">
      </div>

      <div v-if="level" class="result-area">
        <div class="level-tag" :style="{ backgroundColor: level.color }">
          {{ level.name }}
        </div>
        <p class="suggestion">{{ level.suggestion }}</p>
      </div>
      
      <div class="tips">
        <h4>💡 小提醒：</h4>
        <p>如果你現在感到頭痛，請先停止看螢幕，喝 300ml 的溫水。</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const sleepTime = ref(null)

const level = computed(() => {
  if (sleepTime.value === null) return null
  const time = sleepTime.value
  
  if (time >= 0 && time < 2) {
    return { name: '輕微熬夜', color: '#10b981', suggestion: '建議中午補眠 20 分鐘即可恢復精神。' }
  } else if (time >= 2 && time < 4) {
    return { name: '深度熬夜', color: '#f59e0b', suggestion: '今天請避免攝取過量咖啡因，並在晚上 11 點前入睡。' }
  } else {
    return { name: '修仙模式', color: '#ef4444', suggestion: '這是非常危險的狀態！請立即補充水分，並尋找時間午休 90 分鐘。' }
  }
})
</script>

<style scoped>
.quiz-container { max-width: 600px; margin: 0 auto; padding: 2rem; }
.quiz-card {
  background: #111111;
  border: 1px solid #333333;
  padding: 2.5rem;
  border-radius: 4px;
}
.input-group { margin-bottom: 2rem; }
input {
  width: 100%;
  padding: 1rem;
  background: #000000;
  border: 1px solid #444444;
  border-radius: 4px;
  color: white;
  font-size: 1.2rem;
  margin-top: 10px;
}
.result-area {
  text-align: center;
  padding: 2rem;
  border-radius: 15px;
  background: rgba(255,255,255,0.05);
  margin-bottom: 1.5rem;
}
.level-tag {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-weight: bold;
  margin-bottom: 1rem;
}
</style>