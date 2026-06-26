<template>
  <div class="home-command">
    <section class="home-hero">
      <div class="home-hero__grid" />
      <div class="home-hero__content">
        <a-tag color="blue">DZCOM INVESTMENT CLOSED LOOP</a-tag>
        <h1>
          <span>投资闭环</span>
          <strong>业务驾驶舱</strong>
        </h1>
        <p class="home-hero__lead">
          从可信数据源到 Mock 交易复盘，把 AI 发现、投资报告、Prompt / Skill 治理和风控审计串成一条可追踪链路。
        </p>
        <div class="home-hero__chips">
          <span><b>TRACE</b> 全链路复盘</span>
          <span><b>GATE</b> 人工闸门</span>
          <span><b>SKILL</b> 能力治理</span>
          <span><b>MOCK</b> 仿真闭环</span>
        </div>
        <a-space wrap>
          <a-button type="primary" size="large" @click="router.push('/overview')">进入驾驶舱</a-button>
          <a-button size="large" @click="router.push('/config-center/data-source-discovery')">AI 治理</a-button>
          <a-button size="large" @click="router.push('/config-center/ai-skills')">维护 AI Skill</a-button>
        </a-space>
      </div>
      <div class="home-orbit">
        <div class="home-orbit__ring ring-a" />
        <div class="home-orbit__ring ring-b" />
        <div class="home-orbit__ring ring-c" />
        <div class="home-orbit__core">
          <span>REAL API</span>
          <strong>ONLINE</strong>
        </div>
        <div class="home-orbit__label label-a">SKILL</div>
        <div class="home-orbit__label label-b">MOCK</div>
        <div class="home-orbit__label label-c">RISK</div>
      </div>
    </section>

    <a-row :gutter="[16, 16]">
      <a-col v-for="metric in metrics" :key="metric.label" :xs="24" :sm="12" :xl="6">
        <div class="home-metric">
          <span>{{ metric.label }}</span>
          <strong>{{ metric.value }}</strong>
          <small>{{ metric.hint }}</small>
        </div>
      </a-col>
    </a-row>

    <a-row :gutter="[16, 16]">
      <a-col :xs="24" :xl="15">
        <a-card class="page-card" :bordered="false" title="业务闭环主链路">
          <div class="home-flow">
            <button v-for="step in flowSteps" :key="step.title" class="home-flow__step" @click="router.push(step.path)">
              <span>{{ step.no }}</span>
              <strong>{{ step.title }}</strong>
              <small>{{ step.desc }}</small>
            </button>
          </div>
        </a-card>
      </a-col>
      <a-col :xs="24" :xl="9">
        <a-card class="page-card" :bordered="false" title="系统边界">
          <a-list :data-source="guards" size="small">
            <template #renderItem="{ item }">
              <a-list-item>
                <a-list-item-meta :title="item.title" :description="item.desc" />
                <a-tag :color="item.color">{{ item.badge }}</a-tag>
              </a-list-item>
            </template>
          </a-list>
        </a-card>
      </a-col>
    </a-row>

    <a-row :gutter="[16, 16]">
      <a-col v-for="entry in entries" :key="entry.path" :xs="24" :md="12" :xl="8">
        <a-card class="page-card home-entry" :bordered="false" @click="router.push(entry.path)">
          <a-space direction="vertical" :size="8">
            <a-tag :color="entry.color">{{ entry.badge }}</a-tag>
            <h3>{{ entry.title }}</h3>
            <p>{{ entry.desc }}</p>
          </a-space>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const metrics = [
  { label: '主链路', value: '7', hint: '从 AI 治理到驾驶舱复盘' },
  { label: '人工闸门', value: '4', hint: '数据源 / Prompt / 模型 / 真实交易' },
  { label: '配置资产', value: '9+', hint: 'Skill、模型、Prompt、任务、产品等' },
  { label: '接口模式', value: 'POST', hint: '统一真实后端 API' },
]

const flowSteps = [
  { no: '01', title: 'AI 治理中枢', desc: '检查 Skill、模型绑定、Prompt 和评估回流', path: '/config-center/data-source-discovery' },
  { no: '02', title: 'AI 治理证据', desc: '追踪闭环运行、任务执行和报告快照证据', path: '/config-center/data-sources' },
  { no: '03', title: '采集编排', desc: '任务运行、触发和参数治理', path: '/data-ingestion' },
  { no: '04', title: '投资报告', desc: '质量门禁后的投资分析报告', path: '/report-studio' },
  { no: '05', title: 'Prompt / Skill', desc: '提示词和模型能力持续治理', path: '/prompt-lab' },
  { no: '06', title: 'Mock 交易', desc: '组合、下单、调仓和估值刷新', path: '/simulation' },
  { no: '07', title: '复盘闭环', desc: '回测、反馈、风控审计和驾驶舱', path: '/overview' },
]

const guards = [
  { title: '候选数据源不自动启用', desc: 'AI 只发现候选，保存后仍需人工审核。', badge: 'REVIEW', color: 'warning' },
  { title: 'Prompt 不自动上线', desc: '生成和评分后，需要人工确认 ACTIVE。', badge: 'HUMAN', color: 'purple' },
  { title: '模型不自动生效', desc: '模型候选停留在 DRAFT / VALIDATING。', badge: 'GATE', color: 'blue' },
  { title: '真实交易禁用', desc: '当前闭环只允许 Mock 交易自动执行。', badge: 'SAFE', color: 'red' },
]

const entries = [
  { title: '配置总览', badge: 'CONFIG', color: 'blue', path: '/config-center', desc: '进入 AI 治理、模型绑定、任务、产品、Prompt 等配置域。' },
  { title: 'AI Skill 工作台', badge: 'SKILL', color: 'purple', path: '/config-center/ai-skills', desc: '维护方向化采集、Prompt 治理、质量审计等模型能力说明。' },
  { title: '模型 Skill 绑定', badge: 'BINDING', color: 'geekblue', path: '/config-center/model-skills', desc: '按业务场景把模型实例绑定到指定 Skill 版本。' },
  { title: '产品风险', badge: 'RISK', color: 'orange', path: '/product-risk', desc: '查看产品池、风险画像、行情和产品风险上下文。' },
  { title: '风控审计', badge: 'AUDIT', color: 'red', path: '/risk-audit', desc: '追踪质量不足、现金不足、风险不匹配等拦截原因。' },
  { title: '回测反馈', badge: 'REVIEW', color: 'green', path: '/review-loop', desc: '把 Mock 和回测结果反馈给 Prompt、模型和 Skill 治理。' },
]
</script>
