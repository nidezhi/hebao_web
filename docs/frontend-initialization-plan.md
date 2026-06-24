# DZCOM 前端初始化步骤方案

依据：

- `mock/api.md`
- `mock/frontend-refactor-plan.md`
- `DEVELOPMENT_RULES.md`

目标：在当前科幻操作舱框架基础上，根据后端 API 文档重新生成前端工程分层、API client、领域模型和业务工作区页面。初始化过程必须分阶段可运行、可验收，不允许页面直接散写请求路径，不允许用静态演示数据冒充真实接口数据。

## 阶段 0：框架状态确认

已完成：

- 旧业务页面、业务 API、业务 DTO 已清空。
- 保留 Vue/Vite/Router/Pinia/Ant Design/ECharts 工程底座。
- 保留操作舱 UI 基调：深色、网格、霓虹状态、玻璃面板、高信息密度。
- 当前框架路由：
  - `/`
  - `/ui-system`
  - `/development-rules`
  - `/standby/api`

验收：

- `type-check` 通过。
- `build` 通过。
- 框架路由可访问。

## 阶段 1：API 基座

生成内容：

```text
src/shared/api/
  httpClient.ts
  endpoints.ts
  errors.ts
  types.ts
```

要求：

- 统一 Result 解包。
- 统一 401/403/404/409/500 错误消息。
- 统一 POST JSON body。
- 接口路径集中在 `endpoints.ts`。
- 页面不得直接引用 URL 字符串。

验收：

- 无业务页面依赖散写 URL。
- API client 泛型能表达请求体和响应体。

## 阶段 2：领域模型与 API client

按 `mock/frontend-refactor-plan.md` 推荐领域生成：

```text
src/entities/
  data-source/
  task/
  product/
  market-quote/
  report/
  prompt/
  portfolio/
  risk/
  backtest/
  feedback/
```

每个领域最少包含：

```text
api.ts
model.ts
adapter.ts
dictionary.ts
```

初始化优先级：

1. data-source
2. task
3. product / market-quote
4. report
5. prompt
6. portfolio
7. risk
8. backtest
9. feedback

验收：

- DTO 字段来自 `mock/api.md`。
- API 函数只调用 `shared/api/httpClient`。
- 字典集中维护。
- adapter 负责图表/页面展示模型转换。

## 阶段 3：工作区路由和页面占位

生成顶层工作区：

| 路由 | 页面 |
| --- | --- |
| `/overview` | Overview 投资驾驶舱 |
| `/data-quality` | Data Quality 数据质量 |
| `/data-ingestion` | Data Ingestion 采集编排 |
| `/product-risk` | Product & Risk 产品风险 |
| `/report-studio` | Report Studio 投资报告 |
| `/prompt-lab` | Prompt Lab 实验室 |
| `/simulation` | Simulation 模拟交易 |
| `/review-loop` | Review Loop 复盘闭环 |
| `/risk-audit` | Risk Audit 风控审计 |

要求：

- 第一轮页面可只接真实 API 的列表/空状态/错误状态。
- 不用静态假业务数据填充工作台。
- API 失败、无数据、403、数据不足都要有明确状态。

验收：

- 路由可访问。
- 页面没有直接请求路径。
- 无数据时展示空状态，不展示假图。

## 阶段 4：核心页面逐步生成

顺序：

1. Data Quality：数据源列表、质量趋势、缺口状态。
2. Data Ingestion：任务配置、字段映射、手动触发、执行记录。
3. Product & Risk：产品池、投资画像、Mock 门禁、净值行情。
4. Report Studio：报告列表、质量门禁、生成面板、降级规则。
5. Prompt Lab：Prompt 版本、变量、Schema、本地预览。
6. Simulation：Mock 组合、持仓、收益曲线、订单工作区。
7. Review Loop：回测、反馈、Prompt 评估。
8. Risk Audit：风控检查、原因聚合、关联入口。
9. Overview：整合以上真实接口数据形成驾驶舱。

验收：

- 每个页面独立可运行。
- 图表使用真实接口数据或明确空状态。
- 投资相关页面展示风险提示。
- Mock 收益明确标记为模拟结果。

## 阶段 5：全量验收

必须执行：

```bash
npm run type-check
npm run build
```

若环境无 npm，可使用等价命令并记录原因。

主要页面结构或图表变更后，必须启动本地服务检查目标路由。
