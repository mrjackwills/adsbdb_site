<template>

  <AppCard>
    <template #body>

      <RouteDescription
        :description
        :random="false"
        :route
        :title="route"
        variable="N-NUMBER"
      />

      <TableResponse>

        <template #table>
          <GenericTable :rows="table_values" />
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

  const route = 'n-number'
  const table_values = [{ key: 'response', value: ['string'] }]
  const random_aircraft = computed((): ApiResponse<AircraftResponse> | undefined => randomModule().aircraft)
  const description = 'Convert from N-Number string to MODE-S string.'

  const url = computed(() => `${route}/${n_number.value}`)

  const mode_s = computed(() => {
    return random_aircraft.value?.response.aircraft.registration.charAt(0) === 'N' ? `${random_aircraft.value?.response.aircraft.mode_s}` : `A7CA59`
  })

  const n_number = computed(() => {
    return random_aircraft.value?.response.aircraft.registration.charAt(0) === 'N' ? `${random_aircraft.value?.response.aircraft.registration}` : `N6005U`
  })

  const response = computed(() => {
    return `{
    "response": "${mode_s.value}"
}`
  })

</script>
