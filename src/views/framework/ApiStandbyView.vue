<template>
  <a-space direction="vertical" :size="18" class="deck-page">
    <a-card class="cockpit-card standby-card" :bordered="false">
      <div class="standby-orb">
        <span />
      </div>
      <div>
        <a-tag color="gold">API DOCUMENTATION REQUIRED</a-tag>
        <h2>接口等待舱</h2>
        <p>
          当前没有业务页面、业务 API client 或业务 DTO。
          后端 API 文档生成后，将从接口路径、请求体、响应体、状态码和业务约束重新生成前端领域模块。
        </p>
      </div>
    </a-card>

    <a-card class="cockpit-card" :bordered="false" title="下一轮生成清单">
      <a-timeline>
        <a-timeline-item color="cyan">解析 API 文档，提取领域、接口、DTO、状态码</a-timeline-item>
        <a-timeline-item color="cyan">生成 shared/api/httpClient、endpoints、错误映射</a-timeline-item>
        <a-timeline-item color="cyan">生成 entities/*/api、model、adapter、dictionary</a-timeline-item>
        <a-timeline-item color="cyan">生成 pages/* 工作台、列表、详情、抽屉和空状态</a-timeline-item>
        <a-timeline-item color="green">执行 type-check、build、本地路由冒烟</a-timeline-item>
      </a-timeline>
    </a-card>
  </a-space>
</template>
