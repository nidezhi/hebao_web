<template>
  <main class="rules-page">
    <section class="rules-header">
      <div>
        <span class="eyebrow">DZCOM FRONTEND LAW</span>
        <h2>DZCOM 前端开发铁律</h2>
        <p>
          当前阶段：<strong>按稳定 API 文档生成业务页面期</strong>。登录、鉴权、路由、布局、UI 规范和 API 基础设施保留；业务页面必须严格按 18 号前端生成蓝图生成。
        </p>
      </div>
      <a-alert
        show-icon
        type="warning"
        message="验收原则"
        description="违反铁律的页面不能进入验收；页面、接口、类型、图表和权限状态必须同步闭环。"
      />
    </section>

    <section class="rules-workbench">
      <aside class="rules-index">
        <a-anchor
          :affix="false"
          :items="sections.map((section) => ({
            key: section.id,
            href: `#${section.id}`,
            title: section.shortTitle,
          }))"
        />
      </aside>

      <div class="rules-document">
        <section
          v-for="section in sections"
          :id="section.id"
          :key="section.id"
          class="rules-section"
        >
          <div class="rules-section__heading">
            <span>{{ section.no }}</span>
            <div>
              <h3>{{ section.title }}</h3>
              <p>{{ section.summary }}</p>
            </div>
          </div>

          <ol class="rules-list">
            <li
              v-for="item in section.items"
              :key="item.text"
              :class="{ 'is-critical': item.critical }"
            >
              <span class="rules-list__index">{{ item.no }}</span>
              <span class="rules-list__text">{{ item.text }}</span>
              <a-tag v-if="item.critical" color="error">硬约束</a-tag>
            </li>
          </ol>
        </section>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
interface RuleItem {
  no: string
  text: string
  critical?: boolean
}

interface RuleSection {
  id: string
  no: string
  title: string
  shortTitle: string
  summary: string
  items: RuleItem[]
}

const sections: RuleSection[] = [
  {
    id: 'stage-boundary',
    no: '0',
    title: '当前阶段边界',
    shortTitle: '阶段边界',
    summary: '稳定 API 文档已确认，业务页面必须按蓝图生成真实工作台。',
    items: [
      { no: '0.1', text: '保留登录页、auth store、路由守卫、httpClient、endpoints、基础布局、UI 规范页、API 文档舱和开发铁律页。', critical: true },
      { no: '0.2', text: '业务页面必须调用真实 API client，不能继续展示统一重置占位。', critical: true },
      { no: '0.3', text: 'API client、DTO、adapter、dictionary 是页面生成的前置契约；页面不得直接解析复杂后端结构作为主要逻辑。' },
      { no: '0.4', text: '禁止根据旧页面效果修补；业务页必须按稳定 API 文档和 18 号蓝图重新生成。', critical: true },
      { no: '0.5', text: '恢复业务页面时，必须先补齐类型、接口、字典和 adapter，再生成 pages。', critical: true },
    ],
  },
  {
    id: 'reset-rules',
    no: '0.1',
    title: '业务生成铁律',
    shortTitle: '生成铁律',
    summary: '业务页必须展示真实工作台、列表、详情、图表或明确空状态。',
    items: [
      { no: '0.1.1', text: '所有业务路由必须展示真实工作台、列表、详情、图表或明确空状态。', critical: true },
      { no: '0.1.2', text: '业务页面必须通过 entities/*/api.ts 调用接口，不能在页面组件直接写接口路径。', critical: true },
      { no: '0.1.3', text: '禁止静态演示数据、临时图表数据、假聚合数据。', critical: true },
      { no: '0.1.4', text: '登录功能必须可用；未登录访问受保护路由仍必须跳转登录页。', critical: true },
      { no: '0.1.5', text: '生成完成后必须执行 type-check、build，并至少抽查登录页和一个受保护业务路由。', critical: true },
    ],
  },
  {
    id: 'information-architecture',
    no: '1',
    title: '信息架构',
    shortTitle: '信息架构',
    summary: '页面职责、路由、菜单和工作台必须有清晰业务边界。',
    items: [
      { no: '1.1', text: '一个页面只承担一个明确职责。配置、记录、资讯、分析等不同工作流必须拆成独立路由。', critical: true },
      { no: '1.2', text: '同一领域存在三个及以上页面时，必须使用父子菜单或工作区分组组织。' },
      { no: '1.3', text: '工作台用于业务概览、异常识别和趋势判断，不得作为快捷链接集合或功能说明页。', critical: true },
      { no: '1.4', text: '页面间跳转必须有明确业务必要性。详情、编辑和状态变更优先在当前页面通过抽屉、弹窗或局部面板完成。' },
      { no: '1.5', text: '兼容旧路径时使用路由重定向，不保留重复页面。' },
    ],
  },
  {
    id: 'api-types',
    no: '2',
    title: 'API 与类型',
    shortTitle: 'API 与类型',
    summary: '请求路径、DTO、字典、adapter 和图表模型必须分层治理。',
    items: [
      { no: '2.1', text: '业务接口统一通过 API client 调用，页面组件不得直接散写请求路径。', critical: true },
      { no: '2.2', text: '接口路径集中维护；同一接口不得在多个文件重复声明。', critical: true },
      { no: '2.3', text: '所有接口默认使用 POST + JSON body，除非后端 API 文档明确声明例外。' },
      { no: '2.4', text: 'DTO、领域 ViewModel、表单 Model 必须分层，不在页面里临时拼接复杂后端结构。', critical: true },
      { no: '2.5', text: '字典集中管理，筛选项、下拉、Tag、图例、文案共用同一份定义。' },
      { no: '2.6', text: '图表数据必须在 adapter 层转换，组件只消费稳定展示模型。', critical: true },
      { no: '2.7', text: 'JSON 字符串必须结构化解析，解析失败必须有明确降级状态。' },
      { no: '2.8', text: '所有需要用户选择并回传的 bizId、*BizId、businessBizId、targetBizId、userBizId 等字段，必须使用对象选择器或可搜索下拉；界面展示名称、编码、状态、时间等可识别信息，提交值才是真实 id。裸 id 输入只允许出现在只读证据、禁用字段或明确的高级调试模式。', critical: true },
      { no: '2.9', text: '当后端接口缺少列表、搜索、详情摘要、display 字段、状态字典、关联对象信息或错误上下文，导致前端无法满足开发铁律时，前端不得用手填 id、假数据、硬编码或堆 JSON 绕过；必须列出后端补齐清单，标明缺口接口、缺口字段、影响页面和阻塞的铁律。', critical: true },
    ],
  },
  {
    id: 'page-structure',
    no: '3',
    title: '页面结构',
    shortTitle: '页面结构',
    summary: '列表、筛选、详情和状态变更遵循固定工作流，避免页面膨胀。',
    items: [
      { no: '3.1', text: '列表页默认结构为“紧凑筛选区 + 主操作 + 数据表格”，主操作每页原则上不超过一个。' },
      { no: '3.2', text: '筛选项只保留高频字段，低频条件放入高级筛选，不得让工具栏占据主要视区。' },
      { no: '3.3', text: '详情页必须将结构化数据转换为指标、描述列表、图表或业务区块，不得直接堆放原始 JSON。', critical: true },
      { no: '3.4', text: '一个页面不得同时出现多组互不相关的 tab。不同工作流应拆路由，同一对象的紧密详情可使用 tab。', critical: true },
      { no: '3.5', text: '页面标题、菜单选中态和父级上下文必须与当前路由一致。' },
    ],
  },
  {
    id: 'cockpit-ui',
    no: '4',
    title: '操作舱 UI 规范',
    shortTitle: 'UI 规范',
    summary: '操作舱视觉必须服务效率，不能用装饰污染可读性。',
    items: [
      { no: '4.1', text: 'UI 方向为“科幻操作舱”：深色底、网格线、霓虹状态、玻璃面板、高信息密度。' },
      { no: '4.2', text: '科幻感必须服务操作效率，不得牺牲可读性、响应式布局和数据扫描效率。', critical: true },
      { no: '4.3', text: '第一屏必须是实际工作台或明确等待态，不做空泛欢迎页、营销页或说明书页。', critical: true },
      { no: '4.4', text: '页面区块使用全宽工作区或分栏布局，不做漂浮装饰区块。' },
      { no: '4.5', text: '卡片只用于独立对象或清晰区域；不做卡片套卡片；圆角不超过 8px。', critical: true },
      { no: '4.6', text: '状态必须有明确颜色和文案：正常、运行中、降级、待复核、拒绝、失败、无权限、数据不足。' },
      { no: '4.7', text: '按钮按频率和风险排序：主操作突出，次要操作收敛，危险操作必须二次确认。' },
      { no: '4.8', text: '桌面端和移动端均不得出现文字、按钮、表格或图表重叠。', critical: true },
    ],
  },
  {
    id: 'dashboard-charts',
    no: '5',
    title: '工作台与图表',
    shortTitle: '图表',
    summary: '图表只能来自真实接口数据，且必须匹配业务语义。',
    items: [
      { no: '5.1', text: '工作台图表必须使用真实接口数据，禁止用静态演示数据冒充业务数据。', critical: true },
      { no: '5.2', text: 'API 未就绪时展示 API Standby 或空状态，不展示假图表。', critical: true },
      { no: '5.3', text: '图表必须有明确标题、单位、图例和空数据状态，并随容器尺寸响应式调整。' },
      { no: '5.4', text: '图表类型应匹配数据：结构占比使用饼图，时间变化使用折线图，分类比较使用柱状图。' },
      { no: '5.5', text: '图表依赖必须按需引入，避免全量打包。' },
    ],
  },
  {
    id: 'errors-permissions',
    no: '6',
    title: '错误与权限',
    shortTitle: '错误权限',
    summary: '异常、权限、数据不足和高风险动作必须显式反馈。',
    items: [
      { no: '6.1', text: '401、403、404、409、500 必须映射为清晰前端状态。', critical: true },
      { no: '6.2', text: '403 统一展示为“当前记录不可见或已无权限访问”，不得暴露内部权限细节。' },
      { no: '6.3', text: '数据不足、接口缺失、字段缺失、解析失败必须在 UI 中显式展示，不得静默失败。', critical: true },
      { no: '6.4', text: '所有高风险动作必须有二次确认、失败原因和可追踪上下文。', critical: true },
    ],
  },
  {
    id: 'engineering',
    no: '7',
    title: '工程约束',
    shortTitle: '工程约束',
    summary: '修改前检查约定，修改后必须验证，不提交临时产物。',
    items: [
      { no: '7.1', text: '新增页面前先检查现有路由、API 封装、类型和组件模式，优先复用现有约定。' },
      { no: '7.2', text: '完成修改后必须执行 npm run type-check 和 npm run build；若环境无 npm，使用等价命令并记录原因。', critical: true },
      { no: '7.3', text: '涉及主要页面结构或图表变更时，必须启动本地服务检查目标路由。', critical: true },
      { no: '7.4', text: '不得提交构建产物、临时日志、调试脚本或未使用代码。' },
      { no: '7.5', text: '删除业务代码时，必须确保路由、导入、类型引用同步清理。' },
    ],
  },
  {
    id: 'rebuild-order',
    no: '8',
    title: '后续 API 文档生成后的重建顺序',
    shortTitle: '重建顺序',
    summary: '严格按 API、实体、动作流、页面和验证的顺序推进。',
    items: [
      { no: '8.1', text: '解析 API 文档和后端提示词产物，按业务域识别接口、请求体、响应体、状态码和业务约束。' },
      { no: '8.2', text: '生成或更新 shared/api/httpClient、shared/api/endpoints、错误处理和 Result 解包。' },
      { no: '8.3', text: '生成 entities/*/api、entities/*/model、adapter、dictionary；字段不明确时先停，不进入页面生成。', critical: true },
      { no: '8.4', text: '生成 features/* 表单与动作流；高风险动作必须带二次确认和失败状态。' },
      { no: '8.5', text: '生成 pages/* 工作台、列表、详情、抽屉、图表和空状态。' },
      { no: '8.6', text: '执行 type-check、build、本地路由冒烟；失败则回滚或修复，不进入下一阶段。', critical: true },
    ],
  },
]
</script>
