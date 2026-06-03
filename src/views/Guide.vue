<template>
  <div>
    <h2>指南</h2>

    <button @click="show = !show">
      切換
    </button>

    <ul v-if="show">
      <li v-for="t in tips" :key="t">{{ t }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue"

const show = ref(true)

const tips = ["喝水", "睡覺", "少咖啡", "補眠"]
</script>