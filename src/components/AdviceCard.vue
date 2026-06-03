<template>
  <div class="advice-card">
    <div v-if="image" class="card-image-container">
      <img :src="image" class="card-image" alt="advice-image" />
    </div>
    <div class="card-body">
      <div class="card-icon">
        <img v-if="icon.startsWith('http')" :src="icon" class="icon-img" />
        <span v-else>{{ icon }}</span>
      </div>
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-desc">{{ desc }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  desc: String,
  icon: String,
  image: String
})
</script>

<style scoped>
.advice-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), background 0.3s;
  backdrop-filter: blur(10px);
  overflow: hidden;
}
.advice-card:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.2);
}

.card-body {
  padding: 2rem;
}

.card-image-container {
  height: 180px;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.advice-card:hover .card-image {
  transform: scale(1.1);
}

.card-icon { margin-bottom: 1rem; }
.icon-img {
  width: 48px;
  height: 48px;
  object-fit: contain;
  filter: grayscale(1) brightness(2);
}
.card-title { color: #ffffff; margin-bottom: 0.5rem; }
.card-desc { color: #94a3b8; font-size: 0.95rem; line-height: 1.6; }
.has-action { cursor: pointer; }
</style>