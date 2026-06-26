<template>
  <BusinessPageShell
    title="AI Skill 工作台"
    description="按普通管理列表维护 AI Skill：版本、指令、Schema、评估策略和生命周期。ACTIVE / RETIRED / ARCHIVED 均需人工确认。"
    :endpoints="[endpoints.aiSkill.list, endpoints.aiSkill.detail, endpoints.aiSkill.save, endpoints.aiSkill.status]"
    :icon="ExperimentOutlined"
    status-text="AI SKILL"
  >
    <PageState :loading="loading" :error-message="errorMessage">
      <MetricStrip :metrics="metrics" />
      <a-card class="page-card" :bordered="false" title="Skill 版本管理">
        <template #extra>
          <a-space>
            <a-input-search v-model:value="filters.keyword" placeholder="搜索编码/名称/说明" allow-clear @search="load" />
            <a-select
              v-model:value="filters.skillType"
              allow-clear
              placeholder="Skill 类型"
              style="width: 180px"
              :options="skillTypeSelectOptions"
              @change="load"
            />
            <a-select
              v-model:value="filters.status"
              allow-clear
              placeholder="状态"
              style="width: 140px"
              :options="skillStatusSelectOptions"
              @change="load"
            />
            <a-button @click="load">刷新</a-button>
            <a-button type="primary" @click="openSkill()">新增 Skill</a-button>
          </a-space>
        </template>
        <a-table
          row-key="bizId"
          size="small"
          :data-source="skills"
          :columns="columns"
          :pagination="{ pageSize: 12 }"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'skillType'">
              <StatusTag :value="record.skillType" :options="skillTypeOptions" />
            </template>
            <template v-else-if="column.key === 'status'">
              <StatusTag :value="record.status" :options="skillStatusOptions" />
            </template>
            <template v-else-if="column.key === 'instruction'">
              <span class="muted-line">{{ record.instructionContent || '-' }}</span>
            </template>
            <template v-else-if="column.key === 'updatedAt'">
              {{ formatDateTime(record.updatedAt) }}
            </template>
            <template v-else-if="column.key === 'actions'">
              <a-space>
                <a-button size="small" type="link" @click="openSkill(record)">编辑</a-button>
                <a-button size="small" type="link" @click="copyVersion(record)">复制新版本</a-button>
                <a-dropdown>
                  <a-button size="small" type="link">状态</a-button>
                  <template #overlay>
                    <a-menu @click="changeStatus(record, String($event.key))">
                      <a-menu-item v-for="item in skillStatusOptions" :key="item.value">{{ item.label }}</a-menu-item>
                    </a-menu>
                  </template>
                </a-dropdown>
              </a-space>
            </template>
          </template>
        </a-table>
      </a-card>
    </PageState>

    <a-drawer v-model:open="drawerOpen" width="820" :title="skillForm.bizId ? '编辑 Skill' : '新增 Skill'">
      <a-form layout="vertical">
        <a-row :gutter="12">
          <a-col :span="12"><a-form-item label="Skill 编码"><a-input v-model:value="skillForm.skillCode" /></a-form-item></a-col>
          <a-col :span="12"><a-form-item label="版本"><a-input v-model:value="skillForm.skillVersion" /></a-form-item></a-col>
        </a-row>
        <a-form-item label="Skill 名称"><a-input v-model:value="skillForm.skillName" /></a-form-item>
        <a-row :gutter="12">
          <a-col :span="12">
            <a-form-item label="Skill 类型"><a-select v-model:value="skillForm.skillType" :options="skillTypeSelectOptions" /></a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="状态"><a-select v-model:value="skillForm.status" :options="skillStatusSelectOptions" /></a-form-item>
          </a-col>
        </a-row>
        <a-form-item label="Skill 指令内容">
          <a-textarea v-model:value="skillForm.instructionContent" :auto-size="{ minRows: 7, maxRows: 14 }" />
        </a-form-item>
        <a-collapse ghost>
          <a-collapse-panel key="advanced" header="高级字段：输入/输出 Schema 与评估策略">
            <a-form-item label="Input Schema JSON"><a-textarea v-model:value="inputSchemaText" :auto-size="{ minRows: 3, maxRows: 8 }" /></a-form-item>
            <a-form-item label="Output Schema JSON"><a-textarea v-model:value="outputSchemaText" :auto-size="{ minRows: 3, maxRows: 8 }" /></a-form-item>
            <a-form-item label="Evaluation Policy JSON"><a-textarea v-model:value="evaluationPolicyText" :auto-size="{ minRows: 3, maxRows: 8 }" /></a-form-item>
          </a-collapse-panel>
        </a-collapse>
        <a-form-item label="说明"><a-textarea v-model:value="skillForm.description" :auto-size="{ minRows: 2, maxRows: 5 }" /></a-form-item>
        <a-space>
          <a-button type="primary" :loading="saving" @click="submitSkill">保存</a-button>
          <a-button @click="drawerOpen = false">取消</a-button>
        </a-space>
      </a-form>
    </a-drawer>
  </BusinessPageShell>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import { Modal, message } from 'ant-design-vue'
import { ExperimentOutlined } from '@ant-design/icons-vue'
import { endpoints } from '@/shared/api/endpoints'
import { formatDateTime, safeParseJson } from '@/shared/utils/format'
import BusinessPageShell from '@/shared/components/business/BusinessPageShell.vue'
import MetricStrip from '@/shared/components/business/MetricStrip.vue'
import PageState from '@/shared/components/business/PageState.vue'
import StatusTag from '@/shared/components/visual/StatusTag.vue'
import { listAiSkills, saveAiSkill, updateAiSkillStatus } from '@/entities/ai-skill/api'
import { nextSkillVersion } from '@/entities/ai-skill/adapter'
import { skillStatusOptions, skillTypeOptions } from '@/entities/ai-skill/dictionary'
import type { AiSkillDto, AiSkillStatus, AiSkillType, SaveAiSkillRequest } from '@/entities/ai-skill/model'

const loading = ref(false)
const saving = ref(false)
const errorMessage = ref('')
const drawerOpen = ref(false)
const skills = ref<AiSkillDto[]>([])
const filters = reactive<{ keyword?: string; skillType?: AiSkillType; status?: AiSkillStatus }>({})
const skillForm = reactive<Partial<AiSkillDto>>({})
const inputSchemaText = ref('{}')
const outputSchemaText = ref('{}')
const evaluationPolicyText = ref('{"manualReviewRequired":true}')

const skillTypeSelectOptions = skillTypeOptions.map((item) => ({ label: item.label, value: item.value }))
const skillStatusSelectOptions = skillStatusOptions.map((item) => ({ label: item.label, value: item.value }))
const metrics = computed(() => [
  { label: 'Skill 版本', value: skills.value.length, hint: '当前页' },
  { label: '方向化采集', value: skills.value.filter((item) => item.skillType === 'DATA_SOURCE_DISCOVERY').length, hint: '治理链路' },
  { label: 'ACTIVE', value: skills.value.filter((item) => item.status === 'ACTIVE').length, hint: '可被调用' },
  { label: '需治理', value: skills.value.filter((item) => ['DRAFT', 'VALIDATING'].includes(item.status || '')).length, hint: '草稿/校验' },
])
const columns = [
  { title: '编码', dataIndex: 'skillCode' },
  { title: '版本', dataIndex: 'skillVersion', width: 90 },
  { title: '名称', dataIndex: 'skillName' },
  { title: '类型', key: 'skillType', width: 140 },
  { title: '状态', key: 'status', width: 110 },
  { title: '指令摘要', key: 'instruction' },
  { title: '更新时间', key: 'updatedAt', width: 160 },
  { title: '操作', key: 'actions', width: 250 },
]

const resetForm = (skill?: AiSkillDto) => {
  Object.keys(skillForm).forEach((key) => delete skillForm[key as keyof AiSkillDto])
  Object.assign(skillForm, skill || {
    skillCode: 'DATA_COLLECTION_MULTI_SOURCE',
    skillType: 'DATA_SOURCE_DISCOVERY',
    skillName: '多源综合采集 Skill',
    status: 'DRAFT',
    skillVersion: 'v1',
    instructionContent: '围绕投资闭环需要，按采集方向整理可信数据源候选，输出来源说明、采集计划、字段映射、质量策略和人工审核建议。',
    inputSchema: '{}',
    outputSchema: '{}',
    evaluationPolicy: '{"manualReviewRequired":true}',
    description: '方向化 LLM 采集默认 Skill；候选、计划、策略需进入 AI 治理证据链。',
  })
  inputSchemaText.value = skillForm.inputSchema || '{}'
  outputSchemaText.value = skillForm.outputSchema || '{}'
  evaluationPolicyText.value = skillForm.evaluationPolicy || '{"manualReviewRequired":true}'
}

const openSkill = (skill?: AiSkillDto) => {
  resetForm(skill)
  drawerOpen.value = true
}

const copyVersion = (skill: AiSkillDto) => {
  resetForm({ ...skill, bizId: '', skillVersion: nextSkillVersion(skill.skillVersion), status: 'DRAFT' })
  drawerOpen.value = true
}

const assertJson = (value: string, label: string) => {
  if (value.trim() && safeParseJson(value) === undefined) {
    message.warning(`${label} 不是合法 JSON`)
    return false
  }
  return true
}

const submitSkill = async () => {
  if (!skillForm.skillCode || !skillForm.skillVersion || !skillForm.skillName || !skillForm.skillType || !skillForm.instructionContent) {
    message.warning('请填写 Skill 编码、版本、名称、类型和指令内容')
    return
  }
  if (!assertJson(inputSchemaText.value, 'Input Schema')) return
  if (!assertJson(outputSchemaText.value, 'Output Schema')) return
  if (!assertJson(evaluationPolicyText.value, 'Evaluation Policy')) return
  saving.value = true
  try {
    const payload: SaveAiSkillRequest = {
      skillCode: skillForm.skillCode,
      skillVersion: skillForm.skillVersion,
      skillName: skillForm.skillName,
      skillType: skillForm.skillType,
      status: skillForm.status,
      instructionContent: skillForm.instructionContent,
      inputSchema: inputSchemaText.value,
      outputSchema: outputSchemaText.value,
      evaluationPolicy: evaluationPolicyText.value,
      description: skillForm.description,
    }
    await saveAiSkill(payload)
    message.success('Skill 已保存')
    drawerOpen.value = false
    await load()
  } catch (error) {
    message.error(error instanceof Error ? error.message : '保存失败')
  } finally {
    saving.value = false
  }
}

const changeStatus = (skill: AiSkillDto, status: string) => {
  Modal.confirm({
    title: '确认变更 Skill 状态？',
    content: `${skill.skillCode}@${skill.skillVersion} -> ${status}`,
    okType: ['ACTIVE', 'RETIRED', 'ARCHIVED'].includes(status) ? 'danger' : 'primary',
    onOk: async () => {
      await updateAiSkillStatus({ bizId: skill.bizId, status })
      message.success('Skill 状态已更新')
      await load()
    },
  })
}

const load = async () => {
  loading.value = true
  errorMessage.value = ''
  try {
    const page = await listAiSkills({
      ...filters,
      page: 1,
      size: 50,
      sort: 'updatedAt',
      direction: 'desc',
    })
    skills.value = page.items || []
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : 'AI Skill 加载失败'
  } finally {
    loading.value = false
  }
}

onMounted(load)
</script>
