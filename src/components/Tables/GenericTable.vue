<template>
  <div v-if="title" :id class="font-weight-bold mt-4 mb-2">{{ title }}</div>
  <v-table

    density="compact"
    striped="even"
  >
    <span v-if="title" :id />
    <thead>
      <tr v-if="!noHeaders">
        <th class="text-left" style="width: 65%;">
          Key
        </th>
        <th class="text-left" style="width: 35%;">
          Type
        </th>
      </tr>
    </thead>
    <tbody>
      <slot name="tr_start" />
      <tr v-for="(item,index) in rows" :key="index">
        <td class="font-weight-bold" style="width: 65%;">{{ item.key }}</td>
        <td style="width: 35%;">
          <span v-for="(i, idx) in item.value" :key="idx">
            <span v-if="idx>0"> || </span>
            <span class="text-purple-lighten-3">{{ i }}
            </span>
          </span>
        </td>
      </tr>
      <slot name="tr_end" />

    </tbody>
  </v-table>
</template>

<script setup lang="ts">
  import type { VTable } from 'vuetify/components'
  import type { KV } from '@/types'

  const table = ref(null as null | VTable)
  const table_height = ref(0)
  defineProps<{
    rows?: Array<KV>
    title?: string
    noHeaders?: boolean
    id?: string
  }>()

  const emit = defineEmits(['height'])

  onMounted(() => {
    table_height.value = table.value?.$el.clientHeight
    emit('height', table_height.value)
  })
</script>

<style scoped>
a {
    color: inherit
}
</style>
