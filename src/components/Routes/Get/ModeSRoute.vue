<template>

  <AppCard>
    <template #body>

      <RouteDescription
        :description
        :random="false"
        :route
        :title="route"
        variable="MODE-S"
      />

      <TableResponse>
        <template #table>
          <GenericTable :rows />
        </template>
        <template #response>
          <CodeBlock :string="response" :url />
        </template>
      </TableResponse>

    </template>
  </AppCard>
</template>

<script setup lang="ts">
  import type { AircraftResponse, ApiResponse } from '@/types'

  const description = 'Convert from N-Number string to MODE-S string.'
  const route = 'mode-s'

  const rows = [{ key: 'response', value: ['string'] }]

  const random_aircraft = computed((): ApiResponse<AircraftResponse> | undefined => randomModule().aircraft)

  const url = computed(() => `${route}/${mode_s.value}`)

  const mode_s = computed(() => {
    return random_aircraft.value?.response.aircraft.registration.charAt(0) === 'N' ? `${random_aircraft.value?.response.aircraft.mode_s}` : `A7CA59`
  })

  const n_number = computed(() => {
    return random_aircraft.value?.response.aircraft.registration.charAt(0) === 'N' ? `${random_aircraft.value?.response.aircraft.registration}` : `N6005U`
  })

  const response = computed(() => {
    return `{
    "response": "${n_number.value}"
}`
  })
</script>
