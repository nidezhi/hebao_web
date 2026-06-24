<template>
  <a-space direction="vertical" :size="18" class="deck-page">
    <a-alert
      show-icon
      type="info"
      message="这些规则是下一轮根据后端 API 文档生成业务页面时的硬约束。违反规则的页面不能进入验收。"
    />
    <a-row :gutter="[18, 18]">
      <a-col v-for="section in rules" :key="section.title" :xs="24" :lg="12">
        <a-card class="cockpit-card rule-card" :bordered="false" :title="section.title">
          <ol>
            <li v-for="item in section.items" :key="item">{{ item }}</li>
          </ol>
        </a-card>
      </a-col>
    </a-row>
  </a-space>
</template>

<script setup lang="ts">
const rules = [
  {
    title: 'API 与类型',
    items: [
      '业务接口只允许写在 API client 层，页面不得直接散写 URL。',
      '所有接口默认 POST + JSON body，除非 API 文档明确声明例外。',
      'DTO、领域 ViewModel、表单 Model 必须分层，图表数据必须经 adapter 转换。',
      '后端字段必须在 TypeScript 类型中同步体现，JSON 字符串必须结构化解析。',
    ],
  },
  {
    title: '页面与路由',
    items: [
      '一个页面只承担一个明确业务职责，不把多条工作流塞进同一路由。',
      '同一领域三个及以上页面必须使用父子菜单或工作区分组。',
      '详情、编辑、状态变化优先用抽屉、弹窗或局部面板，不滥用跳转。',
      '兼容旧路径只能用 redirect，不保留重复页面。',
    ],
  },
  {
    title: 'UI 操作舱',
    items: [
      '第一屏必须是可操作工作台，不做欢迎页或说明书式首页。',
      '视觉可以科幻，但不能牺牲扫描效率、信息密度和响应式安全。',
      '状态必须有颜色、文案、原因和下一步：正常、降级、待复核、拒绝、失败。',
      '卡片圆角不超过 8px，不做卡片套卡片和漂浮装饰区块。',
    ],
  },
  {
    title: '验收',
    items: [
      '每次修改后必须执行 type-check 和 build。',
      '主要页面或图表变更必须启动本地服务检查目标路由。',
      '禁止用静态演示数据冒充真实接口数据；API 未就绪时展示等待态。',
      '发现 401/403/数据不足/越权/失败必须有明确前端状态。',
    ],
  },
]
</script>
