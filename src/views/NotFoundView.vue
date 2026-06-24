<template>
  <main class="not-found">
    <div class="glitch-code">404</div>
    <h1>航道不存在</h1>
    <p>这个路由没有挂载到当前框架控制台。等待 API 文档生成前，不创建临时业务路径。</p>
    <a-button type="primary" @click="$router.replace('/')">返回主控台</a-button>
  </main>
</template>

<style scoped>
.not-found {
  display: grid;
  min-height: 100vh;
  place-content: center;
  padding: 32px;
  color: #dceeff;
  text-align: center;
  background:
    radial-gradient(circle at 50% 30%, rgba(32, 247, 255, 0.18), transparent 34%),
    #050a14;
}

.glitch-code {
  color: #20f7ff;
  font-size: clamp(80px, 18vw, 180px);
  font-weight: 900;
  line-height: 1;
  text-shadow: 0 0 24px rgba(32, 247, 255, 0.8);
}

h1 {
  color: #fff;
}

p {
  max-width: 560px;
  color: #89a7c8;
}
</style>
