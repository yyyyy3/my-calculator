<template>
  <div class="home">
    <h1>Night Owl</h1>

    <router-link to="/quiz">
      開始測驗
    </router-link>

    <div class="cards">
      <SleepCard
        v-for="item in levels"
        :key="item.title"
        :title="item.title"
        :desc="item.desc"
      />
    </div>
  </div>
</template>

<script setup>
import SleepCard from "../components/SleepCard.vue"

const levels = [
  { title: "輕度", desc: "還可以" },
  { title: "中度", desc: "需要休息" },
  { title: "重度", desc: "請睡覺" }
]
</script>

<style scoped>
.home {
  padding: 20px;
}
.cards {
  display: flex;
  gap: 10px;
}
</style>