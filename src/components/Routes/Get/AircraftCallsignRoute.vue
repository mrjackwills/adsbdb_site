<template>

  <AppCard>
    <template #body>

      <RouteDescription :description :random="false" :route="url" title="aircraft & callsign" />

      <TableResponse>

        <template #table>
          <GenericTable>
            <template #tr_end>
              <tr>
                <td class="font-weight-bold">aircraft</td>
                <GotoTD :id="ID_TABLES.AircraftCallsign.Aircraft" text="Aircraft" />
              </tr>
              <tr>
                <td class="font-weight-bold">flightroute</td>
                <GotoTD :id="ID_TABLES.AircraftCallsign.Flightroute" text="Flightroute" />
              </tr>

              <tr>
                <td class="font-weight-bold">origin</td>
                <GotoTD :id="ID_TABLES.AircraftCallsign.Airport" text="Airport" />
              </tr>
              <tr>
                <td class="font-weight-bold">midpoint?</td>
                <GotoTD :id="ID_TABLES.AircraftCallsign.Airport" text="Airport *" />
              </tr>
              <tr>
                <td class="font-weight-bold">destination</td>
                <GotoTD :id="ID_TABLES.AircraftCallsign.Airport" text="Airport" />
              </tr>
            </template>
          </GenericTable>
          <MidPoint />

          <AircraftTable :id="ID_TABLES.AircraftCallsign.Aircraft" title="Aircraft" />

          <GenericTable :id="ID_TABLES.AircraftCallsign.Flightroute" :rows="flightroute_value" title="Flightroute">
            <template #tr_end>
              <tr>
                <td class="font-weight-bold">airline</td>
                <GotoTD :id="ID_TABLES.AircraftCallsign.Airline" text="Airline" />
              </tr>
            </template>
          </GenericTable>

          <AirlineTable :id="ID_TABLES.AircraftCallsign.Airline" />

          <GenericTable :id="ID_TABLES.AircraftCallsign.Airport" :rows="airport_value" title="Airport" />
        </template>

        <template #response>
          <CodeBlock v-if="random_callsign" :code :url="random_url" />
          <v-skeleton-loader v-else type="paragraph, paragraph, paragraph, paragraph, paragraph, paragraph" />
        </template>

      </tableresponse>
    </template>
  </AppCard>
</template>

<script setup lang="ts">
  import type { AircraftCallsignResponse, AircraftResponse, ApiResponse, CallsignResponse } from '@/types'
  import { ID_TABLES } from '@/types'

  const random_callsign = computed((): undefined | ApiResponse<CallsignResponse> => randomModule().callsign)
  const random_aircraft = computed((): undefined | ApiResponse<AircraftResponse> => randomModule().aircraft)

  const random_url = computed(() => {
    return random_aircraft.value && random_callsign.value
      ? `aircraft/${random_aircraft.value.response.aircraft.mode_s}?callsign=${random_callsign.value.response.flightroute.callsign}`
      : undefined
  })

  const code = computed((): undefined | ApiResponse<AircraftCallsignResponse> => {
    return random_aircraft.value && random_callsign.value
      ? {
        response: {
          aircraft: random_aircraft.value?.response.aircraft,
          flightroute: random_callsign.value?.response.flightroute,
        },
      }
      : undefined
  })

  const url = 'aircraft/{ MODE_S || REGISTRATION }?callsign={ CALLSIGN_ICAO || CALLSIGN_ICAO }'

  const description = 'Query for both an aircraft & callsign with a single GET request.'

  const flightroute_value = [
    { key: 'callsign', value: ['string'] },
    { key: 'callsign_icao', value: ['string', 'null'] },
    { key: 'callsign_iata', value: ['string', 'null'] },
  ]

  const airport_value = [
    { key: 'country_iso_name', value: ['string'] },
    { key: 'country_name', value: ['string'] },
    { key: 'elevation', value: ['number'] },
    { key: 'iata_code', value: ['string'] },
    { key: 'icao_code', value: ['string'] },
    { key: 'latitude', value: ['number'] },
    { key: 'longitude', value: ['number'] },
    { key: 'municipality', value: ['string'] },
    { key: 'name', value: ['string'] },
  ]

</script>
