<template>

  <AppCard>
    <template #body>

      <RouteDescription :description :random="false" :route :title="route" />

      <TableResponse>

        <template #table>
          <GenericTable :rows />
        </template>

        <template #response>
          <CodeBlock v-if="onlineStore.online_time > 0" :code="status" />
          <v-skeleton-loader v-else type="sentences" />
        </template>

      </TableResponse>

    </template>
  </AppCard>
</template>

<script setup lang="ts">
  import type { ApiResponse, OnlineResponse } from '@/types'
  const route = 'online'

  const onlineStore = onlineModule()

  const description = 'Check basic adsbdb API status, uptime is measured in seconds.'

  const rows = [{ key: 'api_version', value: ['string'] }, { key: 'uptime', value: ['number'] }]

  const status = computed((): ApiResponse<OnlineResponse> => {
    return {
      response: {
        api_version: onlineStore.api_version,
        uptime: onlineStore.online_time,
      },
    }
  })

</script>
