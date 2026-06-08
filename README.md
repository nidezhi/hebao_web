# DZCOM Web

基于 Vue 3、TypeScript、Vite 和 Ant Design Vue 的管理后台项目。

## 开发

```bash
npm install
npm run dev
```

默认开发地址为 `http://localhost:5173`，后端接口地址可在
`.env.development` 中配置。Vite 会将 `/api` 请求代理到
`http://localhost:8511`。

## 已实现功能

- 登录、注册、退出与登录状态恢复
- 工作台业务统计
- 产品分页筛选、创建、编辑、状态变更和逻辑删除
- 产品扩展属性、最新行情、历史行情和行情点写入
- 用户分页筛选、创建、详情、联系方式、状态、KYC 和风险等级管理
- 个人联系方式、密码和 JSON 偏好管理

认证接口未返回 Token，前端按 Cookie/Session 模式配置了
`withCredentials`。所有接口定义均来自根目录的 `web.md`。

## 目录

```text
src/
├── api/        # API 请求、业务接口与数据类型
├── layouts/    # 页面布局
├── router/     # 路由配置
├── stores/     # Pinia 状态管理
├── styles/     # 全局样式
├── utils/      # 枚举和展示工具
└── views/      # 页面
```
