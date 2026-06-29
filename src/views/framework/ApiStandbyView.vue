<template>
  <a-space direction="vertical" :size="18" class="deck-page">
    <a-card class="cockpit-card standby-card" :bordered="false">
      <div class="standby-orb">
        <span />
      </div>
      <div>
        <a-tag color="green">REAL API CONNECTED</a-tag>
        <h2>接口契约工作台</h2>
        <p>
          当前业务页面、API client 和 DTO 已接入真实后端。
          后续新增或变更接口时，以 dzcom/docs_new 的共享契约、handoff 和 gap list 为准。
        </p>
      </div>
    </a-card>

    <a-card class="cockpit-card" :bordered="false" title="联动变更清单">
      <a-timeline>
        <a-timeline-item color="cyan">先更新共享 handoff/API contract 或确认对应 gap</a-timeline-item>
        <a-timeline-item color="cyan">后端补接口、DTO、状态字典、错误上下文和测试</a-timeline-item>
        <a-timeline-item color="cyan">前端补 endpoints、entities、adapter、dictionary 和页面体验</a-timeline-item>
        <a-timeline-item color="cyan">接口不足时进入 backend gap list，前端不做假数据绕过</a-timeline-item>
        <a-timeline-item color="green">执行后端验证、前端 type-check/build 和目标路由冒烟</a-timeline-item>
      </a-timeline>
    </a-card>
  </a-space>
</template>
