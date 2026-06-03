<template>
  <div class="page">

    <!-- HERO -->
    <section class="hero">
      <h1 class="mono-text">SleepOS_</h1>
      <p>極簡主義下的熬夜生存與效率管理</p>

      <div class="btn-group">
        <button class="btn-black" @click="step = 1">開始測驗</button>
        <button @click="step = 3" class="btn-gray">查看分析</button>
      </div>
    </section>

    <!-- FEATURES (v-for) -->
    <section class="grid">
      <div v-for="item in features" :key="item.title" class="card">
        <div class="icon">
          <img v-if="item.icon.startsWith('http')" :src="item.icon" class="icon-img-small" />
          <span v-else>{{ item.icon }}</span>
        </div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.desc }}</p>
      </div>
    </section>

    <!-- INTRODUCTION SECTION -->
    <section class="intro-section">
      <div class="intro-content">
        <h2 class="section-title">什麼是熬夜？</h2>
        <p class="intro-text">
          熬夜（Sleep Deprivation）是指在常規睡眠時間外就寢，或長期睡眠時數不足。這會打亂身體的生理時鐘，導致免疫力下降、內分泌失調及大腦認知功能受損。
        </p>
        <div class="impact-cards">
          <div class="impact-mini-card">
            <h4>🛡️ 免疫力下降</h4>
            <p>睡眠不足會削弱免疫細胞活性，誘發全身性慢性發炎，增加感冒與感染風險。</p>
          </div>
          <div class="impact-mini-card">
            <h4>🧠 心理與情緒問題</h4>
            <p>導致專注力變差。REM 睡眠不足是隔天容易情緒化、易怒、焦慮與發脾氣的主因。</p>
          </div>
          <div class="impact-mini-card">
            <h4>💓 心血管與糖尿病</h4>
            <p>皮質醇與腎上腺素分泌過多導致血管發炎硬化。長期不足 6 小時會產生胰島素阻抗引發糖尿病。</p>
          </div>
          <div class="impact-mini-card">
            <h4>🍔 肥胖與代謝問題</h4>
            <p>飢餓素增加、瘦體素減少導致食慾暴增。深夜攝取高熱量宵夜更易引發肥胖與腸胃負擔。</p>
          </div>
          <div class="impact-mini-card">
            <h4>🦒 兒童發育遲緩</h4>
            <p>生長激素分泌高峰在晚上 9 點至凌晨 1 點。熬夜將嚴重影響孩童的身高發育，務必早點睡。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- TRIVIA DATABASE SECTION (FLIP CARDS) -->
    <section class="trivia-section">
      <h2 class="section-title">💡 熬夜冷知識資料庫 (點擊翻面)</h2>
      <div class="trivia-grid">
        <div v-for="(card, i) in triviaCards" :key="i" class="trivia-flip-card" :class="{ 'is-flipped': card.flipped }" @click="card.flipped = !card.flipped">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h4>{{ card.title }}</h4>
              <div class="flip-hint">Click to reveal</div>
            </div>
            <div class="flip-card-back">
              <p>{{ card.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- RECOVERY RITUAL SECTION -->
    <section class="recovery-ritual">
      <h2 class="section-title">🕒 熬夜後「續命」恢復儀式</h2>
      <div class="ritual-list">
        <div v-for="(task, i) in recoveryTasks" :key="i" class="ritual-item">
          <div class="ritual-check"></div>
          <div class="ritual-content">
            <h4>{{ task.time }} - {{ task.action }}</h4>
            <p>{{ task.why }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- AVOID FOODS SECTION -->
    <section class="food-guide">
      <h2 class="guide-title">🚫 熬夜地雷食物（睡前避免）</h2>
      <div class="food-grid">
        <div 
          v-for="food in avoidFoods" 
          :key="food.name" 
          class="food-item"
          @click="selectedFood = food"
        >
          <div class="food-icon">
            <img v-if="food.icon.startsWith('http')" :src="food.icon" class="icon-img-small" />
            <span v-else>{{ food.icon }}</span>
          </div>
          <div class="food-info">
            <h4>{{ food.name }}</h4>
            <p>{{ food.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SLEEP AID VIDEOS SECTION -->
    <section class="video-guide">
      <h2 class="guide-title video-title">🌙 助眠精選影片</h2>
      <div class="video-grid">
        <div v-for="video in sleepVideos" :key="video.title" class="video-card">
          <div class="iframe-container">
            <iframe 
              :src="video.url" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen></iframe>
          </div>
          <p class="video-desc">{{ video.title }}</p>
        </div>
      </div>
    </section>

    <!-- PERSONALITY DETECTOR SECTION -->
    <section class="personality-section">
      <!-- 背景粒子動畫 -->
      <div class="particles-bg">
        <div v-for="n in 12" :key="n" class="particle"></div>
      </div>
      <h2 class="section-title">🌌 熬夜人格大解析</h2>
      <div v-if="!userPersonalityChoice" class="personality-quiz">
        <p class="intro-text">深夜時分，你通常是因為什麼而清醒？</p>
        <div class="personality-options">
          <button v-for="p in personalities" :key="p.id" @click="userPersonalityChoice = p.id" class="btn-option">
            {{ p.icon }} {{ p.question }}
          </button>
        </div>
      </div>
      <div v-else class="personality-result">
        <div class="result-badge">專屬稱號：{{ detectedPersonality.title }}</div>
        <h3>人格：{{ detectedPersonality.name }}</h3>
        <p class="suggestion-text">建議：{{ detectedPersonality.suggestion }}</p>
        <button @click="userPersonalityChoice = null" class="btn-gray">重新判定</button>
      </div>
    </section>

    <!-- IMPACT ANALYSIS SECTION -->
    <section class="impact-guide">
      <div class="impact-column">
        <h2 class="impact-title pros">✨ 深夜的優點 (短期效益)</h2>
        <div v-for="(p, i) in impactData.pros" :key="i" class="impact-item">
          <span class="impact-num">{{ i + 1 }}</span>
          <div class="impact-info">
            <h4>{{ p.title }}</h4>
            <p>{{ p.desc }}</p>
          </div>
        </div>
      </div>
      <div class="impact-column">
        <h2 class="impact-title cons">⚠️ 熬夜的代價 (健康損害)</h2>
        <div v-for="(c, i) in impactData.cons" :key="i" class="impact-item">
          <span class="impact-num">{{ i + 1 }}</span>
          <div class="impact-info">
            <h4>{{ c.title }}</h4>
            <p>{{ c.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- STEP INDICATOR -->
    <div class="steps">
      <div :class="{ active: step === 1 }">1</div>
      <div :class="{ active: step === 2 }">2</div>
      <div :class="{ active: step === 3 }">3</div>
    </div>

    <!-- STEP 1: 10-Question Questionnaire -->
    <transition name="slide" mode="out-in">
      <section v-if="step === 1" class="quiz-card survey-card" key="step1">
        <h2>生活習慣深度量表 (10 題)</h2>
        <p class="survey-hint">請根據最近一週的真實情況選擇 (1: 差 ~ 5: 優)</p>
        
        <div class="survey-list">
          <div v-for="(q, idx) in questions" :key="idx" class="survey-item">
            <p class="q-text">{{ idx + 1 }}. {{ q }}</p>
            <div class="radio-group">
              <label v-for="val in 5" :key="val" class="radio-label">
                <input type="radio" :name="'q'+idx" :value="val" v-model="answers[idx]" />
                <span class="custom-radio"></span>
                <span class="val-num">{{ val }}</span>
              </label>
            </div>
          </div>
        </div>

        <div class="input-group mt-20">
          <label>昨晚幾點睡？ (0-23)</label>
          <input v-model="sleepTime" type="number" placeholder="例如 2" />
        </div>
        
        <button @click="step = 2">下一步</button>
      </section>
    </transition>

    <!-- STEP 2 -->
    <transition name="slide" mode="out-in">
      <section v-if="step === 2" class="quiz-card" key="step2">
        <h2>2. 咖啡因飲品計算機</h2>
        <div class="input-group">
          <label>選擇剛喝過的飲品</label>
          <select v-model="selectedCaffeine">
            <option v-for="opt in drinkOptions" :key="opt.name" :value="opt.value">
              {{ opt.name }}
            </option>
          </select>
        </div>
        <div class="input-group">
          <label>飲用杯數</label>
          <input v-model="coffee" type="number" placeholder="例如 2" />
        </div>

        <div class="btns">
          <button @click="step = 1" class="secondary">上一步</button>
          <button @click="step = 3">查看分析結果</button>
        </div>
      </section>
    </transition>

    <!-- STEP 3 RESULT -->
    <section v-if="step === 3" class="quiz-card result">
      <h2>分析結果</h2>

      <div v-if="level">
        <h3 :style="{ color: level.color }">
          {{ level.name }}
        </h3>
        <p class="total-score-text">量表總分：{{ totalScore }} / 50 ({{ totalScore >= 45 ? '表現優異' : '尚有進步空間' }})</p>
        <p>{{ level.suggestion }}</p>
      </div>

      <p class="caffeine">咖啡因：{{ caffeine }} mg</p>

      <button @click="reset">重新測驗</button>
    </section>

    <!-- Food Detail Modal -->
    <div v-if="selectedFood" class="modal-overlay" @click="selectedFood = null">
      <div class="modal-content" @click.stop>
        <button class="close-btn" @click="selectedFood = null">&times;</button>
        <img :src="selectedFood.image" :alt="selectedFood.name" class="modal-image" />
        <div class="modal-text">
          <h3>{{ selectedFood.name }}</h3>
          <p>{{ selectedFood.desc }}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

/* STEP */
const step = ref(1)
const selectedFood = ref(null)
const selectedCaffeine = ref(150)

/* 10 QUESTIONS DATA */
const questions = [
  "你的入睡時間是否規律？",
  "睡前一小時內是否遠離電子產品？",
  "你的臥室環境是否足夠安靜且黑暗？",
  "週末是否避免報復性補眠（睡過頭）？",
  "下午過後是否避免攝取大量咖啡因？",
  "醒來後是否感到精神飽滿？",
  "睡前是否會進行適度的放鬆活動？",
  "是否沒有午睡超過一小時的習慣？",
  "是否能有效排解影響睡眠的壓力？",
  "你對目前的整體睡眠質量感到滿意嗎？"
]
const answers = ref(Array(10).fill(3)) // 預設中間值 3

/* DATA */
const sleepTime = ref(null)
const coffee = ref(0)

const drinkOptions = [
  { name: '美式咖啡 (約150mg)', value: 150 },
  { name: '拿鐵咖啡 (約80mg)', value: 80 },
  { name: '義式濃縮 (約100mg)', value: 100 },
  { name: '能量飲料 (約160mg)', value: 160 },
  { name: '濃茶 (約50mg)', value: 50 }
]

/* FEATURES (v-for) */
const features = [
  { title: '即時分析', desc: '判斷熬夜狀態', icon: 'https://cdn-icons-png.flaticon.com/512/912/912213.png' },
  { title: '補救建議', desc: '改善睡眠品質', icon: 'https://cdn-icons-png.flaticon.com/512/2966/2966327.png' },
  { title: '咖啡計算', desc: '避免攝取過量', icon: 'https://cdn-icons-png.flaticon.com/512/924/924514.png' }
]

/* TRIVIA CARDS DATA (WITH FLIP STATE) */
const triviaCards = ref([
  { title: '🕒 世界最長不睡紀錄', content: '1964年，17歲的 Randy Gardner 持續 264 小時（約 11 天）沒睡覺，這是醫學界最著名的不睡紀錄，但過程產生嚴重幻覺。', flipped: false },
  { title: '🍗 半夜想吃炸雞的原因', content: '睡眠不足會讓「飢餓素」上升、「瘦體素」下降，加上大腦對高脂高糖食物的獎勵訊號變強，讓你意志力瞬間崩潰。', flipped: false },
  { title: '⚡ 凌晨為何突然精神好', content: '這稱為「第二次清醒（Second Wind）」，生理時鐘在凌晨 1-3 點會短暫提升警覺性以應對遠古時代可能的危險。', flipped: false }
])

/* PERSONALITY DATA */
const userPersonalityChoice = ref(null)
const personalities = [
  { id: 'report', name: '報告趕工型', title: '文字搬運工', question: '在趕期末報告或公事', suggestion: '番茄鐘工作法是你的救星，別在深夜才開始寫第一行字。', icon: '📝' },
  { id: 'drama', name: '追劇爆肝型', title: '螢幕守望者', question: '停不下來的影集連播', suggestion: '下一集不會跑掉，但你的膠原蛋白會。設定強制關機時間吧。', icon: '📺' },
  { id: 'game', name: '遊戲戰神型', title: '虛擬世界的主宰', question: '再贏一場就睡覺', suggestion: '贏了比賽輸了健康。深夜反應力下降，其實你白天玩的勝率更高。', icon: '🎮' },
  { id: 'exam', name: '考前衝刺型', title: '知識的煉金術師', question: '為了明天的考試拼命', suggestion: '睡眠有助於記憶鞏固，硬背不睡覺反而容易在大腦當機。', icon: '📚' },
  { id: 'phone', name: '無意識滑手機型', title: '演算法的囚徒', question: '沒事做，但就是想滑手機', suggestion: '藍光會抑制褪黑激素。試著把手機放遠，給大腦 20 分鐘的安靜期。', icon: '📱' }
]

const detectedPersonality = computed(() => 
  personalities.find(p => p.id === userPersonalityChoice.value)
)

/* TRIVIA DATA */
const triviaData = [
  { title: '🧠 感覺不累，不代表大腦沒累', content: '熬夜後大腦會暫時提高壓力激素維持清醒，讓你覺得精神還不錯，但反應速度其實已經下降。' },
  { title: '🚗 反應能力接近酒駕', content: '連續清醒約 17～19 小時後，反應速度可能和血液酒精濃度約 0.05% 時相似。' },
  { title: '📉 凌晨 3～5 點是最睏時段', content: '這是人體生理時鐘安排的低谷期，體溫、警覺性都接近一天最低點。' },
  { title: '💸 補眠無法還清睡眠債', content: '週末狂睡雖有幫助，但研究發現部分注意力、代謝功能不一定能完全恢復。' },
  { title: '🍕 熬夜讓食物更誘人', content: '睡眠不足時，大腦獎勵系統對高糖油食物反應更強，這就是為什麼宵夜特別罪惡。' }
]

/* 計算問卷總分 (10-50) */
const totalScore = computed(() => answers.value.reduce((a, b) => a + b, 0))

/* RECOVERY DATA */
const recoveryTasks = [
  { time: '08:00', action: '迎接自然光', why: '讓大腦停止分泌褪黑激素，重新對齊生理時鐘。' },
  { time: '08:30', action: '補充足量水分', why: '熬夜會導致身體脫水，這才是你頭痛的主因。' },
  { time: '13:00', action: '90分鐘午休', why: '完成一個完整的睡眠週期，而非碎片化的短睡。' },
  { time: '15:00', action: '停止咖啡因', why: '給大腦足夠時間在今晚入睡前代謝掉興奮物質。' }
]

/* AVOID FOODS DATA */
const avoidFoods = [
  { name: '高濃度咖啡因', desc: '咖啡、濃茶、能量飲。會阻斷大腦睡眠訊號，讓人亢奮。', icon: 'https://cdn-icons-png.flaticon.com/512/3127/3127450.png', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=500' },
  { name: '蛋糕 (高糖分甜點)', desc: '蛋糕與手搖飲含有大量精緻糖，血糖快速飆升後隨之而來的驟降會嚴重干擾深層睡眠週期。', icon: 'https://cdn-icons-png.flaticon.com/512/2682/2682413.png', image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=500' },
  { name: '辛辣與油炸物', desc: '麻辣鍋、炸雞。升高體溫並加重腸胃負擔，難以入睡。', icon: 'https://cdn-icons-png.flaticon.com/512/2122/2122731.png', image: 'https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=500' },
  { name: '酒精飲品', desc: '雖能助眠但會破壞睡眠結構，讓你隔天更加疲憊。', icon: 'https://cdn-icons-png.flaticon.com/512/3126/3126431.png', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=500' }
]

/* IMPACT DATA */
const impactData = {
  pros: [
    { title: '環境寂靜', desc: '無外部干擾，能進入高密度的深度工作狀態。' },
    { title: '創造力高峰', desc: '放鬆的夜間模式有助於非線性思考與靈感湧現。' },
    { title: '心理補償', desc: '享受「偷來的時間」，釋放白天被壓縮的自由感。' },
    { title: '效率爆發', desc: 'Deadline 前的急迫感能讓大腦運轉速度最大化。' },
    { title: '社交安寧', desc: '訊息通知減少，能更專注於當下的學習或專案。' }
  ],
  cons: [
    { title: '免疫力崩塌', desc: '免疫細胞修補中斷，身體抵抗力急遽下降。' },
    { title: '記憶力斷片', desc: '大腦無法進行有效的海馬體鞏固，學過就忘。' },
    { title: '代謝與膚質', desc: '皮質醇水平紊亂，導致皮膚暗沉與內分泌失調。' },
    { title: '心血管負荷', desc: '心跳與血壓無法得到必要的夜間調適，負擔加重。' },
    { title: '心理亞健康', desc: '情緒調節能力減弱，容易感到焦慮、易怒或抑鬱。' }
  ]
}

/* SLEEP VIDEOS DATA */
const sleepVideos = [
  { title: '432Hz 深度睡眠修復音樂', url: 'https://www.youtube.com/embed/77ZozI0rw7w' },
  { title: '大自然雨聲環境音 (10小時)', url: 'https://www.youtube.com/embed/mPZkdNFkNps' },
]

/* COMPUTED：熬夜等級 */
const level = computed(() => {
  const t = Number(sleepTime.value)
  if (!t) return null

  // 綜合判斷：睡眠時間與問卷分數
  if ((t >= 22 || t < 2) && totalScore.value >= 45) {
    return {
      name: '生理平衡狀態',
      color: '#22c55e',
      suggestion: '目前您的節律正常，請繼續保持 👍'
    }
  }

  if (t < 5 || totalScore.value <= 30) {
    return {
      name: '過度疲勞預警',
      color: '#f59e0b',
      suggestion: '您的系統偵測到高度疲勞，強烈建議補眠 😴'
    }
  }

  return {
    name: '極度熬夜狀態',
    color: '#ef4444',
    suggestion: '警告：大腦運轉效能下降，需要立即深度休息 ⚠️'
  }
})

/* COMPUTED：咖啡因 */
const caffeine = computed(() => coffee.value * selectedCaffeine.value)

/* RESET */
function reset() {
  step.value = 1
  sleepTime.value = null
  coffee.value = 0
  selectedFood.value = null
  answers.value = Array(10).fill(3)
  selectedCaffeine.value = 150
}
</script>

<style scoped>
.page {
  min-height: 100vh;
  padding: 60px;
  color: #1a1a1a;
  background: #ffffff;
  font-family: sans-serif;
}

/* HERO */
.hero {
  text-align: center;
  margin-bottom: 80px;
}

.hero h1 {
  font-size: 64px;
  font-weight: 800;
  letter-spacing: -2px;
}

.hero p {
  color: #888888;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 14px;
}

.btn-group {
  margin-top: 20px;
}

/* BUTTON */
button {
  padding: 12px 32px;
  border-radius: 4px;
  border: none;
  margin: 5px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.2s;
}

.btn-black {
  background: #000000;
  color: #ffffff;
}

.btn-gray {
  background: #e0e0e0;
  color: #333333;
}

/* INTRO SECTION */
.intro-section {
  margin-bottom: 80px;
  padding: 0 10px;
}

.intro-text {
  font-size: 18px;
  line-height: 1.8;
  color: #444;
  margin-bottom: 30px;
  max-width: 800px;
}

.impact-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.impact-mini-card {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 12px;
  border-top: 4px solid #1a1a1a;
}

.impact-mini-card h4 {
  margin-top: 0;
  color: #1a1a1a;
}

/* TRIVIA SECTION */
.trivia-section {
  margin-bottom: 80px;
  padding: 0 10px;
}
.trivia-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

/* FLIP CARD STYLES */
.trivia-flip-card {
  background-color: transparent;
  height: 200px;
  perspective: 1000px;
  cursor: pointer;
}
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
}
.trivia-flip-card.is-flipped .flip-card-inner {
  transform: rotateY(180deg);
}
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}
.flip-card-front {
  background: #fff;
  border: 1px solid #eee;
  border-top: 4px solid #6366f1;
}
.flip-card-back {
  background: #6366f1;
  color: white;
  transform: rotateY(180deg);
}
.flip-card-back p {
  font-size: 15px;
  line-height: 1.6;
  margin: 0;
}
.flip-hint {
  font-size: 12px;
  color: #94a3b8;
  margin-top: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* PERSONALITY SECTION */
.personality-section {
  margin-bottom: 80px;
  padding: 60px 40px;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  border-radius: 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
  color: #fff;
}

.personality-section .section-title {
  border-left-color: #6366f1;
  color: #fff;
}

.personality-section .intro-text {
  color: rgba(255, 255, 255, 0.8);
}

/* 粒子背景樣式 */
.particles-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.particle {
  position: absolute;
  background: rgba(99, 102, 241, 0.4);
  border-radius: 50%;
  filter: blur(8px);
  animation: float-particle var(--duration) infinite ease-in-out;
  opacity: 0;
}

/* 生成隨機位置與動畫 */
.particle:nth-child(1) { width: 40px; height: 40px; left: 10%; top: 20%; --duration: 8s; animation-delay: 0s; }
.particle:nth-child(2) { width: 60px; height: 60px; left: 80%; top: 10%; --duration: 12s; animation-delay: -2s; }
.particle:nth-child(3) { width: 30px; height: 30px; left: 50%; top: 50%; --duration: 10s; animation-delay: -4s; }
.particle:nth-child(4) { width: 50px; height: 50px; left: 20%; top: 70%; --duration: 15s; animation-delay: -1s; }
.particle:nth-child(5) { width: 25px; height: 25px; left: 85%; top: 80%; --duration: 7s; animation-delay: -3s; }
.particle:nth-child(6) { width: 45px; height: 45px; left: 40%; top: 15%; --duration: 11s; animation-delay: -5s; }
.particle:nth-child(n+7) { width: 20px; height: 20px; opacity: 0.2; }

@keyframes float-particle {
  0%, 100% { transform: translate(0, 0); opacity: 0; }
  25% { opacity: 0.6; }
  50% { transform: translate(30px, -50px); opacity: 0.4; }
  75% { opacity: 0.6; }
}

.personality-quiz, .personality-result {
  position: relative;
  z-index: 1;
}

.personality-options {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}
.btn-option {
  background: #fff;
  border: 1px solid #ddd;
  padding: 15px 25px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 16px;
  color: #1a1a1a;
}
.btn-option:hover {
  background: #6366f1;
  color: #fff;
  transform: scale(1.05);
}
.personality-result {
  padding: 20px;
  animation: fadeIn 0.5s ease;
}
.result-badge {
  display: inline-block;
  padding: 5px 15px;
  background: #6366f1;
  color: #fff;
  border-radius: 999px;
  font-size: 12px;
  margin-bottom: 10px;
}
.suggestion-text { color: #cbd5e1; font-style: italic; margin-bottom: 20px; }

/* GRID */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 40px;
}

.section-title {
  font-size: 24px;
  border-left: 4px solid #1a1a1a;
  padding-left: 15px;
  margin-bottom: 30px;
}

/* RECOVERY RITUAL */
.recovery-ritual {
  margin-bottom: 80px;
}
.ritual-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 25px;
  background: #f8f9fa;
  border-radius: 12px;
  margin-bottom: 10px;
}
.ritual-check {
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  margin-top: 5px;
}
.ritual-content h4 { margin: 0; font-size: 18px; color: #1a1a1a; }
.ritual-content p { margin: 5px 0 0; color: #888; font-size: 14px; }

.food-guide {
  margin-bottom: 80px;
  padding: 0 10px;
}

.guide-title {
  text-align: left;
  margin-bottom: 25px;
  color: #1a1a1a;
  font-weight: 800;
}

.food-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.food-item {
  background: #f2f2f2;
  border: 1px solid #e0e0e0;
  padding: 15px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  transition: transform 0.2s, background 0.2s;
}
.food-item:hover {
  border-color: #999;
  background: #ebebeb;
}

.food-icon { font-size: 32px; }
.food-info h4 { margin: 0; color: #1a1a1a; }
.food-info p { margin: 5px 0 0; font-size: 13px; color: #666; line-height: 1.4; }

/* VIDEO GUIDE STYLES */
.video-guide {
  margin-bottom: 60px;
  padding: 0 10px;
}
.video-title { color: #2c3e50; }
.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}
.video-card {
  background: #f2f2f2;
  border-radius: 16px;
  overflow: hidden;
  padding-bottom: 15px;
}
.iframe-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
}
.iframe-container iframe {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
}
.video-desc {
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
  color: #666;
}

/* IMPACT GUIDE STYLES */
.impact-guide {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-bottom: 60px;
  padding: 0 10px;
}
.impact-title {
  font-size: 24px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}
.impact-title.pros { color: #2ecc71; }
.impact-title.cons { color: #fb7185; }

.impact-item {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  background: #f2f2f2;
  padding: 15px;
  border-radius: 12px;
}
.impact-num {
  font-size: 20px;
  font-weight: 800;
  color: rgba(255,255,255,0.15);
}
.impact-info h4 {
  margin: 0 0 5px 0;
  font-size: 16px;
}
.impact-info p {
  margin: 0;
  font-size: 14px;
  color: #666;
  line-height: 1.5;
}

.card {
  background: #f2f2f2;
  padding: 20px;
  border-radius: 16px;
  transition: 0.3s;
  text-align: center;
}

.card:hover {
  transform: translateY(-5px);
  background: #e8e8e8;
}

.icon { margin-bottom: 10px; }
.icon-img-small {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

/* STEPS */
.steps {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;
}

.steps div {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #222;
  display: flex;
  align-items: center;
  justify-content: center;
}

.steps .active {
  background: #ffffff;
  color: #000;
}

/* QUIZ STEP CARD (修正原本與 Grid Card 的衝突) */
.quiz-card {
  background: #f2f2f2;
  padding: 35px;
  border: 1px solid #ddd;
  max-width: 500px;
  margin: auto;
  color: #1a1a1a;
}

/* INPUT */
input {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
  background: #fff;
  color: #1a1a1a;
}

/* SURVEY STYLES */
.survey-card {
  max-width: 600px;
}

.survey-hint {
  font-size: 14px;
  color: #94a3b8;
  margin-bottom: 20px;
}

.survey-list {
  max-height: 400px;
  overflow-y: auto;
  padding-right: 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid #222;
}

/* 客製化滾動條 */
.survey-list::-webkit-scrollbar { width: 4px; }
.survey-list::-webkit-scrollbar-thumb { background: #6366f1; border-radius: 10px; }

.survey-item {
  margin-bottom: 25px;
  text-align: left;
}

.q-text {
  font-weight: bold;
  margin-bottom: 10px;
  color: #1a1a1a;
}

.radio-group {
  display: flex;
  justify-content: space-between;
  max-width: 300px;
}

.radio-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  position: relative;
}

.radio-label input { display: none; }

.custom-radio {
  width: 24px;
  height: 24px;
  border: 2px solid #555;
  border-radius: 50%;
  display: inline-block;
  transition: 0.2s;
}

.radio-label input:checked + .custom-radio {
  background: #000;
  border-color: #000;
}

.val-num { font-size: 12px; color: #94a3b8; }

select {
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  border-radius: 4px;
  background: #fff;
  color: #1a1a1a;
  border: 1px solid #ccc;
}

.input-group {
  margin-bottom: 25px;
  text-align: left;
}

.mt-20 { margin-top: 20px; }

.range-value {
  text-align: right;
  font-weight: bold;
  color: #1a1a1a;
  margin-top: 5px;
}

/* BUTTON */
button {
  margin-top: 15px;
  padding: 10px 15px;
  border-radius: 999px;
  border: none;
  background: #fff;
  color: #000;
  cursor: pointer;
}

.btns {
  display: flex;
  justify-content: space-between;
}

/* HISTORY */
.history {
  margin-top: 20px;
  font-size: 14px;
  opacity: 0.8;
}

/* ANIMATION */
.slide-enter-active {
  transition: all 0.3s ease;
}
.slide-enter-from {
  transform: translateX(20px);
  opacity: 0;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* MODAL STYLES */
.modal-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.85);
  display: flex; justify-content: center; align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
}
.modal-content {
  background: #f2f2f2;
  border: 1px solid #ddd;
  border-radius: 20px;
  max-width: 400px; width: 90%;
  overflow: hidden;
  position: relative;
  box-shadow: 0 20px 50px rgba(0,0,0,0.5);
}
.modal-image { width: 100%; height: 250px; object-fit: cover; }
.modal-text { padding: 20px; text-align: left; }
.modal-text h3 { margin-bottom: 10px; color: #1a1a1a; }
.modal-text p { color: #666; }
.close-btn {
  position: absolute;
  top: 10px; right: 15px;
  background: rgba(0,0,0,0.5);
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  border-radius: 50%;
  width: 32px; height: 32px;
  display: flex; align-items: center; justify-content: center;
}
.total-score-text {
  font-weight: 800;
  margin: 10px 0;
  color: #1a1a1a;
}
</style>