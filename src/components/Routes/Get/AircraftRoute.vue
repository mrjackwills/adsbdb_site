<template>
  <AppCard>
    <template #body>
      <RouteDescription
        :description
        random
        :route
        :title="route"
        variable="MODE_S || REGISTRATION"
        @click="get_random_aircraft"
      />

      <TableResponse>
        <template #table>
          <AircraftTable />
        </template>
        <template #response>
          <CodeBlock v-if="random_aircraft" :code="random_aircraft" :url />
          <v-skeleton-loader v-else type="paragraph, paragraph, paragraph" />
        </template>
      </TableResponse>
    </template>
  </AppCard>
</template>

<script setup lang="ts">
  import type { AircraftResponse, ApiResponse } from '@/types'
  import { apiRequests } from '@/services/axios'
  const random_aircraft = computed({
    get (): undefined | ApiResponse<AircraftResponse> {
      return randomModule().aircraft
    },
    set (b: ApiResponse<AircraftResponse>): void {
      randomModule().set_aircraft(b)
    },
  })

  const url = ref('')
  const route = 'aircraft'

  const description = 'Query for an aircraft by its Mode S transponder code or registration number. Random aircraft endpoint also available.'

  async function get_random_aircraft (): Promise<void> {
    random_aircraft.value = await apiRequests.aircraft_random_get()
    url.value = `${route}/${random_aircraft.value.response.aircraft.mode_s}`
  }

  onMounted(async () => {
    await get_random_aircraft()
  })

</script>
