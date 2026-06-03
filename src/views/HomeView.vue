<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <h1 class="gradient-text">熬夜生存，<br>極簡效能管理。</h1>
        <p class="hero-desc">
          專為追求極致產出的大學生設計。透過 SleepOS 數據監控，在黑白之間找回你的生理節律與大腦清晰度。
        </p>
        <div class="hero-actions">
          <router-link to="/quiz" class="btn-mono-white">立即分析 →</router-link>
          <a href="#" class="btn-mono-gray">查看指南</a>
        </div>
      </div>
      <div class="hero-visual">
        <!-- Stripe 常見的浮動幾何圖形 -->
        <div class="visual-card">🌙</div>
        <div class="visual-card small">☕</div>
      </div>
    </section>

    <section class="features">
      <AdviceCard 
        v-for="item in features" 
        :key="item.title"
        v-bind="item"
      />
    </section>
  </div>
</template>

<script setup>
import AdviceCard from '../components/AdviceCard.vue'
const features = [
  { title: '互動分析', desc: '透過精準測驗，找出你目前的疲勞等級。', icon: 'https://cdn-icons-png.flaticon.com/512/1055/1055644.png', image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=500' },
  { title: '補眠演算法', desc: '不是睡得久，而是要睡得科學。', icon: 'https://cdn-icons-png.flaticon.com/512/3094/3094413.png', image: 'https://images.unsplash.com/photo-1511295742364-917e70351634?q=80&w=500' },
  { title: '能量代謝', desc: '掌握咖啡因的黃金半衰期。', icon: 'https://cdn-icons-png.flaticon.com/512/2935/2935413.png', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=500' }
]
</script>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  gap: 60px;
  padding: 4rem 0;
  min-height: 500px;
}
.hero-content { flex: 1.2; }
.gradient-text {
  font-size: 4.5rem;
  font-weight: 800;
  line-height: 1.1;
  background: linear-gradient(to right, #ffffff, #666666);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1.5rem;
}
.hero-desc {
  font-size: 1.4rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  color: #888;
}

.btn-mono-white {
  background: #ffffff;
  color: #000000;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  margin-right: 1.5rem;
  transition: 0.3s;
}

.btn-mono-white:hover {
  background: #cccccc;
}

.btn-mono-gray {
  background: #222222;
  color: #ffffff;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s;
}

.hero-visual {
  flex: 0.8;
  position: relative;
}

.visual-card {
  width: 200px; height: 200px;
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 24px;
  display: flex; align-items: center; justify-content: center;
  font-size: 5rem;
  box-shadow: 0 50px 100px -20px rgba(0,0,0,0.5);
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 6rem;
}
</style>