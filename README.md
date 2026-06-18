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
- 工作台产品结构、任务状态图表与最近执行概览
- 产品分页筛选、创建、编辑、状态变更和逻辑删除
- 产品扩展属性、最新行情、历史行情和行情点写入
- 用户分页筛选、创建、详情、联系方式、状态、KYC 和风险等级管理
- 个人联系方式、密码和 JSON 偏好管理
- 投资任务配置、执行记录、资讯、方向快照和分析报告分级导航
- AI 模型注册、详情、状态变更和归档

认证接口未返回 Token，前端按 Cookie/Session 模式配置了
`withCredentials`。所有接口定义均来自根目录的 `web.md`。

页面结构和交互开发必须遵守 [开发铁律](./DEVELOPMENT_RULES.md)。

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

# 本地 Kafka

项目提供了基于 Apache Kafka 官方镜像的单节点 KRaft 开发环境，无需 ZooKeeper。

```bash
# 启动
docker compose -f compose.kafka.yml up -d

# 查看状态和日志
docker compose -f compose.kafka.yml ps
docker compose -f compose.kafka.yml logs -f kafka

# 停止（保留数据）
docker compose -f compose.kafka.yml down

# 停止并删除数据
docker compose -f compose.kafka.yml down -v
```

宿主机应用使用 `localhost:9092` 连接；同一 Compose 网络内的其他容器使用
`kafka:19092` 连接。

快速验证：

```bash
docker exec dzcom-kafka /opt/kafka/bin/kafka-topics.sh \
  --bootstrap-server localhost:9092 \
  --create --if-not-exists --topic local-test --partitions 1 --replication-factor 1

echo "hello kafka" | docker exec -i dzcom-kafka \
  /opt/kafka/bin/kafka-console-producer.sh \
  --bootstrap-server localhost:9092 --topic local-test

docker exec dzcom-kafka /opt/kafka/bin/kafka-console-consumer.sh \
  --bootstrap-server localhost:9092 --topic local-test --from-beginning \
  --max-messages 1
```
