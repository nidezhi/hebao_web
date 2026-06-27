# 当前前端操作仓交付说明

生成日期：2026-06-27  
适用对象：后端接口、数据结构、业务架构、投资闭环一致性 review

本文档整理当前前端已经实现的：

1. 操作仓整体定位与闭环架构
2. 菜单栏结构
3. 菜单栏对应页面、功能、接口与数据结构诉求
4. 后端需要重点核对的闭环边界

> 当前前端不再按“演示数据页面”设计，而是按真实后端 API、真实鉴权、真实空状态、真实闭环证据展示。

---

## 1. 操作仓整体定位

### 1.1 操作仓名称

DZCOM AI 投资业务驾驶舱 / Investment Deck

### 1.2 前端核心目标

前端当前围绕“AI 投资闭环”组织页面：

```text
AI 治理中枢
  -> AI 治理证据
  -> 采集编排
  -> 投资报告
  -> Prompt / Skill 治理
  -> Mock 交易
  -> 回测反馈
  -> 风控审计
  -> Overview 汇总驾驶舱
```

首页展示的主链路为：

| 序号 | 节点 | 路由 | 前端定位 |
|---|---|---|---|
| 01 | AI 治理中枢 | `/config-center/data-source-discovery` | 检查 Skill、模型绑定、Prompt、评估回流和方向化任务是否具备 |
| 02 | AI 治理证据 | `/config-center/data-sources` | 聚合闭环运行、任务执行、报告快照、反馈和 Prompt 评估证据 |
| 03 | 采集编排 | `/data-ingestion` | 任务定义、方向化采集参数、任务触发和执行记录 |
| 04 | 投资报告 | `/report-studio` | 投资分析报告、质量门禁、报告生成 |
| 05 | Prompt / Skill | `/prompt-lab` | Prompt 版本、变量、Schema、预览、Skill 与模型绑定 |
| 06 | Mock 交易 | `/simulation` | Mock 组合、下单、调仓、估值、收益曲线 |
| 07 | 复盘闭环 | `/overview`、`/review-loop` | 闭环时间线、回测、反馈、Prompt 评估、风险审计 |

### 1.3 系统边界

前端已经明确表达以下边界，后端需要保持一致：

| 边界 | 前端表达 | 后端期望 |
|---|---|---|
| 候选数据源不自动启用 | AI 只发现候选，保存后仍需人工审核 | 发现、保存、启用需要分层；AI 不应直接让候选源进入生产可用态 |
| Prompt 不自动上线 | 生成和评分后，需要人工确认 ACTIVE | Prompt 状态变更必须有人工动作或明确审计字段 |
| 模型不自动生效 | 模型候选停留在 DRAFT / VALIDATING | 模型 ACTIVE / 归档 / 停用需要明确生命周期 |
| 真实交易禁用 | 当前闭环只允许 Mock 交易自动执行 | 后端不得在自动闭环中执行真实交易 |

### 1.4 鉴权假设

当前前端已实现登录、登出、刷新恢复会话、路由守卫。

| 能力 | 接口 |
|---|---|
| 登录 | `POST /api/auth/login` |
| 登出 | `POST /api/auth/logout` |
| 当前用户 | `POST /api/auth/me` |
| 注册 | `POST /api/auth/register` |

前端目前使用真实后端登录态访问业务接口。所有非公开页面均要求登录。

---

## 2. 菜单栏结构

当前左侧菜单分为 5 个一级域：

```text
业务驾驶舱

投资闭环
  - Overview
  - AI 治理中枢
  - AI 治理证据
  - 采集编排
  - 投资报告
  - Prompt 实验室
  - 模拟交易
  - 复盘闭环
  - 风控审计

配置中心
  - 配置总览
  - 数据质量
  - 产品风险

权限与规范
  - 本人账户
  - 用户管理
  - 角色权限

开发规范
  - UI 操作舱
  - 开发铁律
  - API 文档舱
```

还有若干配置中心子路由没有全部放入左侧菜单，但在配置总览中作为卡片入口存在：

```text
配置中心子模块
  - 任务配置
  - 产品与行情配置
  - Prompt 配置
  - 模型配置
  - AI Skill 工作台
  - 模型 Skill 绑定
  - 业务操作管理
```

---

## 3. 页面与功能明细

### 3.1 首页：业务驾驶舱

路由：`/`  
页面：`src/views/HomeView.vue`

#### 已实现功能

- AI 投资业务驾驶舱欢迎区
- 真实 API Online 运行态展示
- 主链路 7 步入口
- 系统边界治理卡片
- 指标卡片：
  - 主链路
  - 人工闸门
  - 配置资产
  - 接口模式
- 快捷入口：
  - 进入驾驶舱
  - AI 治理
  - 维护 Skill

#### 后端关注点

首页当前主要是导航和边界说明，不直接调用业务接口。其展示内容需要和后端闭环约束保持一致。

---

### 3.2 Overview 投资驾驶舱

路由：`/overview`  
页面：`src/pages/overview/OverviewPage.vue`

#### 已实现功能

- 闭环运行指标：
  - 闭环运行数
  - 闭环成功率
  - 方向化发现治理覆盖
  - 高风险拦截
- 自动闭环时间线：
  - 安全边界
  - 真实数据采集
  - 自动报告生成
  - 数据质量门禁
  - Prompt 候选
  - 模型候选
  - 自动 Mock 交易
  - 回测与反馈
  - Prompt 启用闸门
  - 模型启用闸门
  - 真实交易闸门
- 闭环运行选择器
- 闭环步骤证据抽屉：
  - 节点
  - 状态
  - 失败 / 阻断原因
  - 输入摘要 JSON
  - 输出摘要 JSON
- 自动化安全闸门：
  - Mock 自动交易：允许 / 需后端闸门确认
  - Prompt 正式启用：人工确认
  - 模型正式启用：灰度开关
  - 真实交易：禁用
- 机会雷达：
  - 最近投资报告
  - 报告质量条
- 待处理队列：
  - 缺少 ACTIVE Skill
  - 缺少模型 Skill 绑定
  - 失败任务
  - 待复核 Prompt
- 风控审计流
- Mock 资产摘要
- 回测摘要

#### 使用接口

| 功能 | 接口 |
|---|---|
| 闭环运行列表 | `POST /api/investment/closed-loop/runs/list` |
| 闭环运行详情 | `POST /api/investment/closed-loop/runs/detail` |
| AI Skill 列表 | `POST /api/ai/skills/list` |
| 模型 Skill 绑定列表 | `POST /api/ai/model-skills/list` |
| 数据源列表 | `POST /api/admin/data-sources/list` |
| 任务执行列表 | `POST /api/investment/tasks/executions/list` |
| 投资报告列表 | `POST /api/investment/analysis/reports/list` |
| Mock 组合列表 | `POST /api/mock/portfolios/mine` |
| 风控检查列表 | `POST /api/risk/checks/list` |
| 回测列表 | `POST /api/backtests/list` |
| Prompt 评估列表 | `POST /api/ai/prompt-evaluations/list` |

#### 后端数据结构诉求

闭环运行需要返回：

```ts
ClosedLoopRunDto {
  bizId: string
  runNo?: string
  runStatus: 'RUNNING' | 'SUCCEEDED' | 'FAILED' | 'BLOCKED' | 'PARTIAL' | string
  gateResult?: string
  qualityScore?: number
  summary?: string
  startedAt?: string
  finishedAt?: string
  steps?: ClosedLoopStepDto[]
}
```

闭环步骤需要返回：

```ts
ClosedLoopStepDto {
  bizId: string
  stepCode: string
  stepName?: string
  stepOrder?: number
  stepStatus: 'PENDING' | 'RUNNING' | 'SUCCEEDED' | 'FAILED' | 'BLOCKED' | 'SKIPPED' | string
  failureReason?: string
  inputSummary?: string
  outputSummary?: string
}
```

注意：

- `failureReason` 可能很长，前端列表只展示短状态，完整内容在抽屉中展示。
- `inputSummary` / `outputSummary` 支持 JSON 字符串或普通文本。
- `stepCode` 需要和前端时间线节点保持一致。

---

### 3.3 AI 治理中枢

路由：`/config-center/data-source-discovery`  
页面：`src/pages/config-center/modules/DataSourceDiscoveryPage.vue`

#### 已实现功能

- AI 治理链路展示
- 待办提醒：
  - 缺少 ACTIVE Skill
  - 缺少启用绑定
  - 缺少方向化任务
  - Prompt 评估分数偏低
- Skill 能力列表
- 模型绑定列表
- 采集任务列表
- Prompt 评估回流列表

#### 使用接口

| 功能 | 接口 |
|---|---|
| AI Skill 列表 | `POST /api/ai/skills/list` |
| 模型 Skill 绑定列表 | `POST /api/ai/model-skills/list` |
| AI 模型列表 | `POST /api/ai/models/list` |
| Prompt 列表 | `POST /api/ai/prompts/list` |
| Prompt 评估列表 | `POST /api/ai/prompt-evaluations/list` |
| 任务定义列表 | `POST /api/investment/tasks/definitions` |

#### 后端关注点

- 后端需要能按 `skillType`、`status` 判断 Skill 可用性。
- 模型 Skill 绑定需要有 `scenarioCode`、`enabled`、`priority`。
- 任务定义需要能识别方向化 AI 采集任务，例如 `AI_DATA_SOURCE_DISCOVERY`。

---

### 3.4 AI 治理证据

路由：`/config-center/data-sources`  
页面：`src/pages/config-center/modules/DataSourceConfigPage.vue`

#### 已实现功能

- 闭环运行列表与步骤时间线
- AI 门禁结果展示
- 任务执行证据
- 报告快照
- 反馈回流
- Prompt 评估
- 报告 Prompt 证据抽屉
- 闭环步骤证据抽屉

#### 使用接口

| 功能 | 接口 |
|---|---|
| 闭环运行列表 | `POST /api/investment/closed-loop/runs/list` |
| 闭环运行详情 | `POST /api/investment/closed-loop/runs/detail` |
| 任务执行列表 | `POST /api/investment/tasks/executions/list` |
| 投资报告列表 | `POST /api/investment/analysis/reports/list` |
| 反馈列表 | `POST /api/ai/feedback/list` |
| Prompt 评估列表 | `POST /api/ai/prompt-evaluations/list` |

#### 后端关注点

- 该页面用于解释“AI 为什么这么做”。
- 后端需要保存闭环步骤证据、报告输入输出、Prompt 评估、反馈回流之间的关联字段。
- 建议至少具备可关联字段：
  - `runBizId`
  - `stepBizId`
  - `reportBizId`
  - `promptBizId`
  - `portfolioBizId`
  - `backtestBizId`

---

### 3.5 采集编排

路由：`/data-ingestion`  
页面：`src/pages/data-ingestion/DataIngestionPage.vue`

#### 已实现功能

- 任务定义列表
- 最近执行记录
- 任务详情 / 配置 / 触发抽屉
- 方向化 AI 采集参数表单：
  - providerCode
  - modelCode
  - marketScope
  - directionCode
  - sourceType
  - queryText
  - resultLimit
  - minConfidence
  - trustLevel
  - autoSaveCandidate
  - endpoint
  - httpMethod
  - responseMapping
  - itemPath
  - fieldPaths
  - extraFieldPaths
- 原始参数 JSON 证据展示
- 手动触发任务

#### 使用接口

| 功能 | 接口 |
|---|---|
| 任务定义列表 | `POST /api/investment/tasks/definitions` |
| 保存任务定义 | `POST /api/investment/tasks/definitions/save` |
| 触发任务 | `POST /api/investment/tasks/trigger` |
| 任务执行列表 | `POST /api/investment/tasks/executions/list` |

#### 后端关注点

- 任务定义参数应支持结构化 JSON。
- `AI_DATA_SOURCE_DISCOVERY` 类任务需要承载方向化采集参数。
- 执行记录需要返回失败原因、结果摘要、触发来源、开始/结束时间。

---

### 3.6 投资报告

路由：`/report-studio`  
页面：`src/pages/report-studio/ReportStudioPage.vue`

#### 已实现功能

- 报告列表
- 报告详情
- 质量门禁展示
- 报告质量评分
- 报告生成表单：
  - providerCode
  - modelCode
  - marketScope
  - themeCode
  - lookbackDays
  - initialCapital
- 质量门禁通过后可进入 Prompt / Mock

#### 使用接口

| 功能 | 接口 |
|---|---|
| 报告列表 | `POST /api/investment/analysis/reports/list` |
| 生成报告 | `POST /api/investment/analysis/generate` |
| 从报告买入 Mock | `POST /api/mock/portfolios/orders/buy-from-report` |

#### 后端关注点

- 报告应包含质量评分、置信等级、失败原因、投资摘要。
- 质量门禁不过时，前端不会展示 Mock / Prompt 动作。

---

### 3.7 Prompt 实验室

路由：`/prompt-lab`  
页面：`src/pages/prompt-lab/PromptLabPage.vue`

#### 已实现功能

- Prompt 版本列表
- 模板 / 变量 / Schema 展示
- Prompt 预览变量输入
- Prompt 预览结果
- Skill 资产查看
- 模型绑定查看
- Prompt 评估列表

#### 使用接口

| 功能 | 接口 |
|---|---|
| Prompt 列表 | `POST /api/ai/prompts/list` |
| Prompt 预览 | `POST /api/ai/prompts/preview` |
| AI 模型列表 | `POST /api/ai/models/list` |
| AI Skill 列表 | `POST /api/ai/skills/list` |
| 模型 Skill 绑定列表 | `POST /api/ai/model-skills/list` |
| Prompt 评估列表 | `POST /api/ai/prompt-evaluations/list` |

#### 后端关注点

- Prompt 预览只做变量替换与校验，不触发真实模型。
- Prompt 需要提供变量、输出 Schema、版本、状态。

---

### 3.8 模拟交易

路由：`/simulation`  
页面：`src/pages/simulation/SimulationPage.vue`

#### 已实现功能

- Mock 组合列表
- 组合详情
- 买入 / 卖出
- 调仓执行
- 订单事件
- 组合收益曲线
- 估值刷新

#### 使用接口

| 功能 | 接口 |
|---|---|
| 我的 Mock 组合 | `POST /api/mock/portfolios/mine` |
| Mock 组合详情 | `POST /api/mock/portfolios/detail` |
| 买入 | `POST /api/mock/portfolios/orders/buy` |
| 卖出 | `POST /api/mock/portfolios/orders/sell` |
| 订单事件 | `POST /api/mock/portfolios/orders/events` |
| 收益曲线 | `POST /api/mock/portfolios/performance/curve` |
| 执行调仓 | `POST /api/mock/portfolios/rebalance/execute` |

#### 后端关注点

- Mock 交易允许自动执行。
- 真实交易禁止自动执行。
- Mock 交易需要与报告、产品、风控检查、回测反馈可关联。

---

### 3.9 复盘闭环

路由：`/review-loop`  
页面：`src/pages/review-loop/ReviewLoopPage.vue`

#### 已实现功能

- 回测列表
- 回测详情抽屉
- 反馈列表
- Prompt 评估列表
- 闭环链路可视化：
  - 报告
  - Prompt
  - Mock
  - 回测
  - 反馈
  - 评分

#### 使用接口

| 功能 | 接口 |
|---|---|
| 回测列表 | `POST /api/backtests/list` |
| 回测详情 | `POST /api/backtests/detail` |
| 从组合生成回测 | `POST /api/backtests/generate-from-portfolio` |
| 反馈列表 | `POST /api/ai/feedback/list` |
| Prompt 评估列表 | `POST /api/ai/prompt-evaluations/list` |

#### 后端关注点

- 回测、反馈、Prompt 评估应能回流到报告 / Prompt / 模型 / Skill。
- 建议后端保存复盘对象关系，支持从任意报告追溯到组合、订单、回测、反馈。

---

### 3.10 风控审计

路由：`/risk-audit`  
页面：`src/pages/risk-audit/RiskAuditPage.vue`

#### 已实现功能

- 风控指标
- 拦截原因聚合
- 风控检查列表
- 风控审计详情抽屉

#### 使用接口

| 功能 | 接口 |
|---|---|
| 风控检查列表 | `POST /api/risk/checks/list` |

#### 后端关注点

风控检查建议包含：

- `targetType`
- `targetBizId`
- `ruleCode`
- `reasonCode`
- `reasonMessage`
- `riskLevel`
- `checkResult`
- `detail`
- `checkedAt`

---

### 3.11 数据质量

路由：`/data-quality`  
页面：`src/pages/data-quality/DataQualityPage.vue`

#### 已实现功能

- 数据源健康矩阵
- 缺口与低质量源
- 数据源列表
- 数据源详情与质量趋势抽屉
- 质量趋势图
- 质量快照表

#### 使用接口

| 功能 | 接口 |
|---|---|
| 数据源列表 | `POST /api/admin/data-sources/list` |
| 数据质量快照列表 | `POST /api/admin/data-sources/quality/list` |

#### 后端关注点

- 数据源需要有可信等级、质量等级、启用状态、健康状态。
- 数据质量快照需要支持时间序列展示。

---

### 3.12 产品风险

路由：`/product-risk`  
页面：`src/pages/product-risk/ProductRiskPage.vue`

#### 已实现功能

- 产品池
- 产品详情
- 风险画像
- Mock 门禁
- 行情 / 净值曲线
- 关联风控审计

#### 使用接口

| 功能 | 接口 |
|---|---|
| 产品列表 | `POST /api/products/list` |
| 产品详情 | `POST /api/products/detail` |
| 行情历史 | `POST /api/products/quotes/history` |
| 风控检查列表 | `POST /api/risk/checks/list` |

#### 后端关注点

- 产品风险画像是 Mock 交易前置输入。
- 产品行情需要支持净值曲线或价格曲线。

---

## 4. 配置中心模块

### 4.1 配置总览

路由：`/config-center`  
页面：`src/pages/config-center/ConfigCenterPage.vue`

#### 已实现功能

- 按领域展示配置入口：
  - AI 治理与闭环编排
  - AI 能力资产
  - 业务资产
  - 权限与系统
- 指标：
  - Skill
  - 模型绑定
  - 任务定义
  - Prompt

#### 使用接口

| 功能 | 接口 |
|---|---|
| AI Skill 列表 | `POST /api/ai/skills/list` |
| 模型 Skill 绑定列表 | `POST /api/ai/model-skills/list` |
| 数据源发现 | `POST /api/admin/data-sources/discover` |
| 数据源列表 | `POST /api/admin/data-sources/list` |
| 任务定义列表 | `POST /api/investment/tasks/definitions` |
| Prompt 列表 | `POST /api/ai/prompts/list` |
| 模型列表 | `POST /api/ai/models/list` |

---

### 4.2 任务配置

路由：`/config-center/tasks`

#### 已实现功能

- 任务定义管理
- 新增 / 编辑任务定义
- 启停调度
- 手动触发
- 最近执行记录
- 方向化 AI 采集参数编辑

#### 使用接口

- `POST /api/investment/tasks/definitions`
- `POST /api/investment/tasks/definitions/save`
- `POST /api/investment/tasks/trigger`
- `POST /api/investment/tasks/executions/list`

---

### 4.3 产品与行情配置

路由：`/config-center/products`

#### 已实现功能

- 产品创建
- 产品编辑
- 产品状态变更
- 产品删除
- 投资画像保存
- 行情点保存

#### 使用接口

- `POST /api/admin/products/create`
- `POST /api/admin/products/update`
- `POST /api/admin/products/status`
- `POST /api/admin/products/delete`
- `POST /api/admin/products/attributes/save`
- `POST /api/admin/products/investment-profile/save`
- `POST /api/admin/products/quotes/save`

---

### 4.4 Prompt 配置

路由：`/config-center/prompts`

#### 已实现功能

- Prompt 模板管理
- 新增 / 编辑 Prompt
- 状态变更：
  - DRAFT
  - VALIDATING
  - ACTIVE
  - RETIRED
- 变量与 Schema 配置

#### 使用接口

- `POST /api/ai/prompts/list`
- `POST /api/ai/prompts/detail`
- `POST /api/ai/prompts/save`
- `POST /api/ai/prompts/status`

---

### 4.5 模型配置

路由：`/config-center/models`

#### 已实现功能

- AI 模型列表
- 新增 / 编辑模型
- 状态变更：
  - DRAFT
  - VALIDATING
  - ACTIVE
  - INACTIVE
- 模型归档
- 查看模型绑定 Skill

#### 使用接口

- `POST /api/ai/models/list`
- `POST /api/ai/models/detail`
- `POST /api/ai/models/save`
- `POST /api/ai/models/status`
- `POST /api/ai/models/archive`
- `POST /api/ai/model-skills/by-model`

---

### 4.6 AI Skill 工作台

路由：`/config-center/ai-skills`

#### 已实现功能

- Skill 版本管理
- 新增 / 编辑 Skill
- 指令、输入 Schema、输出 Schema、评估策略维护
- 状态变更：
  - DRAFT
  - ACTIVE
  - RETIRED
  - ARCHIVED

#### 使用接口

- `POST /api/ai/skills/list`
- `POST /api/ai/skills/detail`
- `POST /api/ai/skills/save`
- `POST /api/ai/skills/status`

---

### 4.7 模型 Skill 绑定

路由：`/config-center/model-skills`

#### 已实现功能

- 模型实例绑定到 Skill 版本
- 业务场景配置
- 优先级配置
- 启停状态配置

#### 使用接口

- `POST /api/ai/model-skills/list`
- `POST /api/ai/model-skills/detail`
- `POST /api/ai/model-skills/by-model`
- `POST /api/ai/model-skills/save`

---

### 4.8 业务操作管理

路由：`/config-center/actions`

#### 已实现功能

跨业务动作统一表单工作台，包含：

- 报告生成
- Mock 组合创建
- Mock 买入
- 根据报告买入
- Mock 卖出
- 取消订单
- 执行调仓
- 刷新估值
- 保存回测
- 从组合生成回测
- 保存反馈
- 保存 Prompt 评估

#### 使用接口

- `POST /api/investment/analysis/generate`
- `POST /api/mock/portfolios/create`
- `POST /api/mock/portfolios/orders/buy`
- `POST /api/mock/portfolios/orders/buy-from-report`
- `POST /api/mock/portfolios/orders/sell`
- `POST /api/mock/portfolios/orders/cancel`
- `POST /api/mock/portfolios/rebalance/execute`
- `POST /api/mock/portfolios/valuations/refresh`
- `POST /api/backtests/save`
- `POST /api/backtests/generate-from-portfolio`
- `POST /api/ai/feedback/save`
- `POST /api/ai/prompt-evaluations/save`

---

## 5. 权限与规范模块

### 5.1 本人账户

路由：`/account`

#### 已实现功能

- 当前用户信息
- 编辑本人资料
- 修改密码
- 个人偏好列表
- 保存偏好
- 删除偏好

#### 使用接口

- `POST /api/auth/me`
- `POST /api/users/me/update`
- `POST /api/users/me/password`
- `POST /api/users/me/preferences/list`
- `POST /api/users/me/preferences/set`
- `POST /api/users/me/preferences/delete`

---

### 5.2 用户管理

路由：`/users`

#### 已实现功能

- 用户列表
- 新增用户
- 编辑用户
- 用户详情
- 变更用户状态：
  - ACTIVE
  - DISABLED
  - LOCKED
- KYC 状态维护
- 风险等级维护
- 逻辑删除

#### 使用接口

- `POST /api/admin/users/list`
- `POST /api/admin/users/detail`
- `POST /api/admin/users/create`
- `POST /api/admin/users/update`
- `POST /api/admin/users/status`
- `POST /api/admin/users/kyc-status`
- `POST /api/admin/users/risk-level`
- `POST /api/admin/users/delete`

---

### 5.3 角色权限

路由：`/roles`

#### 已实现功能

- 角色列表
- 新增 / 编辑角色
- 启停角色
- 权限矩阵配置
- 分配用户角色
- 撤销用户角色

#### 使用接口

- `POST /api/admin/roles/list`
- `POST /api/admin/roles/create`
- `POST /api/admin/roles/update`
- `POST /api/admin/roles/status`
- `POST /api/admin/roles/permissions/configure`
- `POST /api/admin/roles/users/assign`
- `POST /api/admin/roles/users/revoke`

---

## 6. 开发规范模块

### 6.1 UI 操作舱

路由：`/ui-system`

用途：

- 展示当前 UI 令牌、状态表达、页面蓝图。
- 不依赖后端业务接口。

### 6.2 开发铁律

路由：`/development-rules`

用途：

- 展示开发约束。
- 验收规则包括：不得 mock 业务数据、接口真实、空状态真实、类型明确、页面不内嵌复杂业务逻辑。

### 6.3 API 文档舱

路由：`/standby/api`

用途：

- 展示 API 文档生成 / 接口等待说明。
- 当前真实接口已接入后，该页面主要作为规范入口。

---

## 7. 全局接口形态假设

### 7.1 请求方式

当前前端统一按 `POST JSON` 方式调用业务接口。登出使用 `postForm`，其余基本使用 `postJson`。

### 7.2 分页结构

前端期望分页接口统一返回：

```ts
PageResult<T> {
  items: T[]
  total: number
  page?: number
  size?: number
}
```

### 7.3 通用请求字段

列表接口普遍使用：

```ts
{
  page: number
  size: number
  sort?: string
  direction?: 'asc' | 'desc'
  [filter: string]: unknown
}
```

### 7.4 通用主键

前端默认使用 `bizId` 作为业务主键。

建议后端所有实体都保持：

```ts
{
  bizId: string
  createdAt?: string
  updatedAt?: string
}
```

---

## 8. 后端需要重点 review 的闭环问题

### 8.1 数据结构是否支撑完整链路追溯

后端需要确认这些对象之间是否能关联：

```text
ClosedLoopRun
  -> ClosedLoopStep
  -> TaskExecution
  -> DataSource / DataQualitySnapshot
  -> InvestmentReport
  -> PromptTemplate / PromptEvaluation
  -> AiSkill / AiModel / ModelSkillBinding
  -> MockPortfolio / MockOrder / Rebalance
  -> BacktestResult
  -> InvestmentFeedback
  -> RiskCheck
```

### 8.2 自动化边界是否由后端强制

前端已经展示边界，但真正约束必须在后端：

- 自动闭环可以触发 Mock 交易。
- 自动闭环不能自动启用 Prompt。
- 自动闭环不能自动启用模型。
- 自动闭环不能执行真实交易。
- 数据源候选不能绕过审核进入正式启用。

### 8.3 状态枚举是否稳定

前端已经使用以下状态类字段：

- `runStatus`
- `stepStatus`
- `status`
- `reviewStatus`
- `tradeStatus`
- `checkResult`
- `riskLevel`
- `kycStatus`
- `enabled`

后端需要确认枚举值稳定，避免页面状态标签失效。

### 8.4 JSON 证据是否可展示

前端已支持 JSON / 原始文本展示，但后端最好保证：

- `inputSummary`
- `outputSummary`
- `summary`
- `schemaJson`
- `parameters`
- `metrics`
- `detail`

这些字段要么是合法 JSON 字符串，要么是可读普通文本。

### 8.5 高风险操作是否具备审计字段

以下操作建议后端记录操作者、时间、原因、前后状态：

- Prompt ACTIVE
- Model ACTIVE
- Skill ACTIVE / ARCHIVED
- 产品删除 / 禁用
- 用户禁用 / 锁定
- 角色权限配置
- Mock 调仓 / 下单
- 自动闭环任务触发

---

## 9. 当前前端已覆盖接口总览

### Auth

- `POST /api/auth/login`
- `POST /api/auth/logout`
- `POST /api/auth/me`
- `POST /api/auth/register`

### User

- `POST /api/admin/users/list`
- `POST /api/admin/users/detail`
- `POST /api/admin/users/create`
- `POST /api/admin/users/update`
- `POST /api/admin/users/delete`
- `POST /api/admin/users/status`
- `POST /api/admin/users/kyc-status`
- `POST /api/admin/users/risk-level`
- `POST /api/users/me/update`
- `POST /api/users/me/password`
- `POST /api/users/me/preferences/list`
- `POST /api/users/me/preferences/set`
- `POST /api/users/me/preferences/delete`

### Role

- `POST /api/admin/roles/list`
- `POST /api/admin/roles/create`
- `POST /api/admin/roles/update`
- `POST /api/admin/roles/status`
- `POST /api/admin/roles/permissions/configure`
- `POST /api/admin/roles/users/assign`
- `POST /api/admin/roles/users/revoke`

### Data Source / Data Quality

- `POST /api/admin/data-sources/list`
- `POST /api/admin/data-sources/save`
- `POST /api/admin/data-sources/discover`
- `POST /api/admin/data-sources/health/save`
- `POST /api/admin/data-sources/quality/list`
- `POST /api/admin/data-sources/quality/save`

### Task

- `POST /api/investment/tasks/definitions`
- `POST /api/investment/tasks/definitions/save`
- `POST /api/investment/tasks/trigger`
- `POST /api/investment/tasks/executions/list`
- `POST /api/investment/tasks/articles/list`
- `POST /api/investment/tasks/article-relations/list`
- `POST /api/investment/tasks/snapshots/list`

### Closed Loop

- `POST /api/investment/closed-loop/runs/list`
- `POST /api/investment/closed-loop/runs/detail`

### Product / Market Quote

- `POST /api/products/list`
- `POST /api/products/detail`
- `POST /api/admin/products/create`
- `POST /api/admin/products/update`
- `POST /api/admin/products/delete`
- `POST /api/admin/products/status`
- `POST /api/admin/products/attributes/save`
- `POST /api/admin/products/investment-profile/save`
- `POST /api/products/quotes/history`
- `POST /api/products/quotes/latest`
- `POST /api/admin/products/quotes/save`

### Report

- `POST /api/investment/analysis/generate`
- `POST /api/investment/analysis/reports/list`

### Prompt

- `POST /api/ai/prompts/detail`
- `POST /api/ai/prompts/list`
- `POST /api/ai/prompts/preview`
- `POST /api/ai/prompts/save`
- `POST /api/ai/prompts/status`

### Mock Portfolio

- `POST /api/mock/portfolios/create`
- `POST /api/mock/portfolios/detail`
- `POST /api/mock/portfolios/mine`
- `POST /api/mock/portfolios/orders/buy`
- `POST /api/mock/portfolios/orders/buy-from-report`
- `POST /api/mock/portfolios/orders/sell`
- `POST /api/mock/portfolios/orders/cancel`
- `POST /api/mock/portfolios/orders/events`
- `POST /api/mock/portfolios/performance/curve`
- `POST /api/mock/portfolios/rebalance/execute`
- `POST /api/mock/portfolios/valuations/refresh`

### Risk

- `POST /api/risk/checks/list`

### Backtest

- `POST /api/backtests/detail`
- `POST /api/backtests/list`
- `POST /api/backtests/save`
- `POST /api/backtests/generate-from-portfolio`

### Feedback / Prompt Evaluation

- `POST /api/ai/feedback/detail`
- `POST /api/ai/feedback/list`
- `POST /api/ai/feedback/save`
- `POST /api/ai/prompt-evaluations/detail`
- `POST /api/ai/prompt-evaluations/list`
- `POST /api/ai/prompt-evaluations/save`

### AI Model / Skill

- `POST /api/ai/models/archive`
- `POST /api/ai/models/detail`
- `POST /api/ai/models/list`
- `POST /api/ai/models/save`
- `POST /api/ai/models/status`
- `POST /api/ai/skills/detail`
- `POST /api/ai/skills/list`
- `POST /api/ai/skills/save`
- `POST /api/ai/skills/status`
- `POST /api/ai/model-skills/by-model`
- `POST /api/ai/model-skills/detail`
- `POST /api/ai/model-skills/list`
- `POST /api/ai/model-skills/save`

---

## 10. 后端验收建议

建议后端按以下顺序 review：

1. 鉴权：登录、登出、刷新恢复会话是否稳定。
2. 分页：所有列表接口是否统一返回 `items + total`。
3. 闭环运行：`ClosedLoopRun -> ClosedLoopStep` 是否能完整支撑 Overview 时间线。
4. 治理中枢：Skill、Model、ModelSkillBinding、Prompt、TaskDefinition 是否能组成可执行 AI 能力矩阵。
5. 证据链：报告、反馈、Prompt 评估、回测、风控是否有统一关联字段。
6. 自动化边界：后端是否强制禁止自动启用 Prompt / 模型 / 真实交易。
7. 管理操作：创建、更新、状态变更、删除接口是否都有审计与权限控制。

---

## 11. 后端校验后的前端修订要求

校验时间：2026-06-27  
校验来源：后端 Controller / DTO / Mapper / 本地数据库 `dz_database`

本节用于修正当前 handoff 与后端真实接口、真实数据之间的误差。前端后续重构应以本节为准。

### 11.1 当前文档误差清单

| 模块 | 当前文档/前端表达 | 后端真实情况 | 前端修订要求 |
|---|---|---|---|
| 全局分页 | 写成裸 `PageResult<T>` | 接口统一返回 `Result<PageResponse<T>>`，真实数据在 `data.items/data.total/data.page/data.size/data.totalPages` | API client 必须统一 unwrap `Result.data`，分页组件读取 `totalPages` |
| 闭环运行 | `ClosedLoopRunDto.finishedAt` | 后端字段是 `completedAt` | 全部改为 `completedAt`，避免时间线结束时间为空 |
| 投资报告 | 只描述“报告详情、质量评分、摘要” | `reports/list` 已返回完整报告 JSON：`dataQualityGate/investmentSummary/trend/investmentPlan/simulatedReturn/chartPayload` | 报告模块必须结构化消费这些字段，不能只做列表和原始 JSON 展示 |
| 投资报告详情接口 | 暗示有报告详情页 | 当前后端没有 `/reports/detail`，`reports/list` 与 `generate` 返回完整报告 | 前端详情从列表项或生成结果进入；若后续需要独立详情，再提后端接口 |
| 采集编排参数 | 仍保留 `endpoint/httpMethod/responseMapping/itemPath/fieldPaths` 等旧采集器思路 | 当前默认闭环已转为 LLM 数据源发现；手工 endpoint 采集不是默认主链路 | 默认表单应展示 `marketScope/assetClass/dataTypes/topicKeywords/collectionDirection/skillCode/preferredTrustLevels/candidateLimit/environment/includeDisabledCandidates` |
| 数据源启用 | 文档说候选不自动启用，正确 | `/api/admin/data-sources/discover` 只发现；任务参数里才有 `autoRegisterCandidates/autoEnableCandidates` | 前端要区分“发现候选”“沉淀候选”“启用数据源”三个动作，不要混成一个开关 |
| 模型/Skill 版本 | 文档只说绑定存在即可 | 数据库里模型 Skill 绑定有 `modelVersion/skillVersion/scenarioCode/priority/enabled`；当前 active model 是 `default-v1`，部分绑定快照仍是 `mock-v1` | 前端必须展示版本快照，并在 active modelVersion 与绑定 modelVersion 不一致时给出“版本漂移”提示 |
| 图表数据 | 文档只提趋势图 | 真实报告 `chartPayload.series` 已有数据；最近报告每条 `series=100`，但 `news=0` | 前端必须能展示“有行情/主题序列、无新闻事件”的非空状态 |
| 质量门禁 | 文档说不过不展示 Mock/Prompt，方向正确但过粗 | 最近报告均 `LOW_CONFIDENCE`、`dataQualityScore=0.1330`、`gate_passed=false`，但仍有可展示图表和数据缺口说明 | 前端不能把门禁失败当成无报告；应展示“数据缺口报告”，禁用交易/Prompt 动作并解释原因 |
| 闭环失败 | 文档要求失败原因展示，正确 | 最近闭环有 `RUNNING` 和多条 `BLOCKED`，失败原因包括模型 JSON 不合法、HTTP 524、子任务失败 | Overview 要突出最新运行状态、阻断步骤、失败原因预览和完整抽屉，不要只统计成功率 |

### 11.2 数据库核查结果摘要

本次直接查询本地数据库得到以下事实：

| 数据项 | 当前值 | 前端含义 |
|---|---:|---|
| 投资报告总数 | 36 | 报告模块不应是空页面 |
| 成功报告数 | 36 | `status=SUCCEEDED` 不代表质量门禁通过 |
| 最新报告质量 | `LOW_CONFIDENCE / 0.1330` | 列表和详情必须展示低可信状态 |
| 最新报告门禁 | `passed=false` | Mock / Prompt 动作必须禁用或降级 |
| 最新报告图表 | `chartPayload.series=100`、`chartPayload.news=0` | 要画序列图，同时显示“暂无新闻事件” |
| LLM 数据源任务 | 6 个启用 | 采集编排应按方向化任务分组展示 |
| LLM 任务候选数 | `candidateLimit=4` | 前端默认值应为 4，不要再默认 8 |
| Active 模型 | `openai-compatible-analysis/default-v1` | 模型配置页应展示当前 active 版本 |
| 远程模型 | `gpt-5.5`、`baseUrl=https://apinebula.com/v1` | 模型详情要展示远程模型与网关 |
| 模型调用配置 | `mockEnabled=false`、`timeoutSeconds=180`、`maxTokens=3000` | 前端保存模型配置时必须保留这些字段 |
| Active Skills | 12 条 | Skill 工作台不是空资产页 |
| 最新闭环 | 1 条 `RUNNING`，多条 `BLOCKED` | Overview 要支持运行中态和阻断态 |

### 11.3 投资报告模块必须重构

当前投资报告模块“实现得不好”的核心原因，是它没有把后端报告当成一个结构化投资报告，而只是当成列表数据或 JSON 附件。前端必须按以下信息架构重做。

#### 11.3.1 报告列表

每一行/卡片至少展示：

- `themeCode/themeName`
- `generatedAt`
- `providerCode/modelCode`
- `status`
- `confidenceLevel`
- `dataQualityScore`
- `dataQualityGate.passed`
- `dataQualityGate.displayMessage`
- `chartPayload.series.length`
- 可执行动作状态：查看、生成 Prompt、Mock 买入

动作规则：

- `status !== SUCCEEDED`：只允许查看失败原因。
- `dataQualityGate.passed === false`：允许查看报告和图表；禁用 Mock 买入；Prompt 生成入口应显示为“数据不足，建议先补采集”。
- `allowedActions` 如果存在，应优先按 `allowedActions` 判断按钮可用性，不要只看分数。

#### 11.3.2 报告详情

详情页必须分为 6 个区域：

| 区域 | 使用字段 | UI 要求 |
|---|---|---|
| 质量门禁 | `dataQualityGate` | 顶部醒目状态条；展示 passed、reasons、displayMessage、allowedActions |
| 投资摘要 | `investmentSummary` | 指标化展示 sampleCount、newsCount、averageReturn、averageMomentum、averageHeat、latestSnapshotTime |
| 趋势判断 | `trend` | 展示 direction、lookbackDays、weightedHeatScore、dataQualityScore；不能只显示一段文本 |
| 图表 | `chartPayload.series/news` | 至少三条序列：收益、动量、热度；news 为空时显示空事件层，不隐藏主图 |
| 投资方案 | `investmentPlan` | 展示 suggestedAction、allocationRate、amount、rebalanceRule、riskNotice；门禁失败时整体降级为只读 |
| 模拟收益 | `simulatedReturn` | 展示 principal、estimatedProfit、stressLoss、optimisticProfit、assumption；必须标注“模拟，不构成承诺” |

JSON 原文只能放在“证据/调试”折叠区，不应作为主阅读体验。

#### 11.3.3 图表数据规范

`chartPayload` 是前端图表主数据源：

```ts
type ReportChartPayload = {
  series: Array<{
    time: string
    snapshotType?: string
    returnRate?: number
    momentumScore?: number
    heatScore?: number
  }>
  news: Array<{
    time: string
    title: string
    sourceCode?: string
  }>
}
```

图表要求：

- `returnRate` 用百分比轴。
- `momentumScore` 与 `heatScore` 用评分轴，避免和收益率混在一个单位里。
- `series.length > 0 && news.length === 0` 是有效状态，显示“暂无可关联新闻事件”。
- 质量门禁失败时仍展示图表，但图表上方必须提示“当前仅用于观察数据缺口，不生成投资建议”。

### 11.4 版本与配置页面要求

以下页面不能只做普通 CRUD，必须展示“当前生效版本”和“绑定关系”。

#### 模型配置

模型列表/详情必须展示：

- `modelCode`
- `modelVersion`
- `provider`
- `status`
- `activatedAt/retiredAt`
- `modelConfig.baseUrl`
- `modelConfig.model`
- `modelConfig.secretRef`
- `modelConfig.mockEnabled`
- `modelConfig.timeoutSeconds`
- `modelConfig.maxTokens` 或 `maxCompletionTokens`

保存模型时：

- `mockEnabled=true` 应有强提醒：闭环会拒绝远程模型调用。
- `baseUrl` 应允许 `https://apinebula.com/v1` 这种 OpenAI-compatible base URL。
- `secretRef` 只展示引用名，不展示密钥明文。

#### AI Skill 工作台

Skill 列表必须按 `skillType` 分组：

- `DATA_SOURCE_DISCOVERY`
- `REPORT_ANALYSIS`
- `PROMPT_GOVERNANCE`
- `QUALITY_AUDIT`

每个 Skill 必须展示：

- `skillCode`
- `skillVersion`
- `status`
- `instructionContent` 摘要
- `inputSchema`
- `outputSchema`
- `evaluationPolicy`

#### 模型 Skill 绑定

绑定页必须支持按 `scenarioCode` 查看：

- `DATA_SOURCE_DISCOVERY`
- `AUTO_REPORT_GENERATION`
- `PROMPT_GOVERNANCE`
- `AUTO_CLOSED_LOOP_ORCHESTRATION`

展示字段：

- `modelCode/modelVersion`
- `skillCode/skillVersion`
- `enabled`
- `priority`
- `bindingConfig`

前端必须检测版本漂移：

```text
active modelVersion != binding.modelVersion
```

出现漂移时，不要静默展示为正常；应提示“绑定快照版本与当前 ACTIVE 模型版本不一致，请确认是否重绑或保留历史快照”。

### 11.5 采集编排页面要求

默认的 AI 数据源发现任务已经不是旧的 endpoint 手工采集器。前端默认表单应使用：

```ts
type AiDataSourceDiscoveryParameters = {
  environment: 'DEFAULT' | string
  marketScope: 'CN_MAINLAND' | string
  assetClass: 'MULTI_ASSET' | 'BANK_WMP' | 'FUND' | 'ETF' | string
  dataTypes: string
  topicKeywords?: string
  collectionDirection:
    | 'MULTI_SOURCE'
    | 'OFFICIAL_DISCLOSURE'
    | 'NEWS_RESEARCH'
    | 'PRODUCT_NAV'
    | 'MARKET_QUOTE'
    | 'REGULATORY'
    | string
  skillCode?: string
  preferredTrustLevels?: string
  candidateLimit?: string
  includeDisabledCandidates?: string
  autoRegisterCandidates?: string
  autoEnableCandidates?: string
}
```

旧字段 `endpoint/httpMethod/responseMapping/itemPath/fieldPaths/extraFieldPaths` 只能作为“高级旧采集器配置”折叠区，不应出现在默认主流程。

### 11.6 Overview 驾驶舱要求

Overview 不应只是一组统计卡片，必须按真实闭环状态组织：

- 当前是否有 `RUNNING` 闭环。
- 最近 `BLOCKED` 的原因。
- 最新报告是否 `gate_passed=false`。
- 数据源发现任务是否成功。
- 报告生成任务是否失败。
- Prompt / 模型 / Skill 是否存在版本漂移。
- Mock 交易是否真的有 portfolio/order/backtest 证据。

对于失败原因：

- 列表只展示 120 字以内摘要。
- 抽屉展示完整 `failureReason`。
- 如果原因包含模型错误，如 `JSON格式不合法`、`HTTP 524`、`request timed out`，前端应归类为“模型调用/输出异常”，并引导用户检查模型配置、Prompt 和 Skill。
