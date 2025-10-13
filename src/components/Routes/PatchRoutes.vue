<template>
  <AppCard>
    <template #body>
      <div class="text-h6">
        PATCH routes
      </div>

      Send a PATCH request in order to update either an aircraft or callsign entry. Each request requires an authorization header.

      <v-table class="mt-3" density="compact" striped="even">
        <tbody>
          <tr v-for="(item, index) in links" :key="index">
            <td class="font-weight-bold text-yellow cl">
              <router-link :to="`#${item.id}`">{{ item.text }}</router-link>
            </td>
          </tr>
        </tbody>
      </v-table>

    </template>
  </AppCard>
</template>

<script setup lang="ts">
  import { ID_ROUTES } from '@/types'

  const links = [
    { id: ID_ROUTES.Patch.Aircraft, text: 'aircraft' },
    { id: ID_ROUTES.Patch.Callsign, text: 'callsign' },

  ]
</script>
<style scoped>
a {
    color: inherit;
}
</style>
