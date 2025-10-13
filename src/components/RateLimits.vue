<template>
  <AppCard>
    <template #body>
      <div class="text-h6">
        Rate limits
      </div>
      Rate limits are calculated over a rolling 60 second time period.
      <v-row class="ma-0 pa-0" justify="center">
        <v-col class="ma-0 pa-0 my-3" cols="12">
          <v-table class="mt-3" density="compact" striped="odd">
            <thead>
              <tr>
                <th class="text-left">
                  # requests
                </th>
                <th class="text-left">
                  block time in seconds
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>512 +</td>
                <td class="font-weight-bold text-purple-lighten-3">60</td>
              </tr>
              <tr>
                <td>1024 +</td>
                <td class="font-weight-bold text-purple-lighten-3">300</td>
              </tr>
            </tbody>
          </v-table>

        </v-col>
      </v-row>
    </template>
  </AppCard>
</template>
