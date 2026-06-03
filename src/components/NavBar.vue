<template>
  <nav class="nav">
    <div class="logo">SleepOS_</div>

    <div class="links">
      <router-link to="/" exact-active-class="active">首頁</router-link>
      <router-link to="/quiz" active-class="active">測驗</router-link>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  padding: 20px 60px;
  background: #000000;
  color: white;
  border-bottom: 1px solid #222;
}
.logo {
  font-weight: 800;
  letter-spacing: -1px;
}
.links a {
  margin-left: 24px;
  color: #888;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  transition: 0.3s;
}
.links a:hover, .links a.active {
  color: #fff;
}
</style>