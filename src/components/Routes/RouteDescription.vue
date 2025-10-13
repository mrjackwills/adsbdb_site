<template>

  <v-row align="center" justify="space-between">
    <v-col class="" cols="12" md="auto">
      <span class="text-capitalize text-h5">{{ prefix }}: {{ title }}</span>
    </v-col>

    <v-col cols="12" md="auto">
      <v-row align="center" class="mt-1" justify="end">
        <v-col class="ma-0 pa-0" cols="12">
          <UrlBox bg :link="show_link" rounded :url />
        </v-col>
      </v-row>
      <v-row v-if="random" align="center" class="">
        <v-col class="ma-0 pa-0 mt-1" cols="12">
          <UrlBox bg link rounded :url="random_url" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>

  <v-row align="center" justify="space-between">
    <v-col class="" cols="12" :md="random?'8':'12'">
      {{ description }}
    </v-col>
    <v-col
      v-if="random"
      class=""
      :class="button_alignment"
      cols="12"
      md="4"
    >
      <v-btn
        color="yellow"
        rounded
        @click="emitClick"
      >
        <v-icon :icon="mdiSync" />
        randomize {{ route }}
      </v-btn>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
  import { mdiSync } from '@mdi/js'
  import { useDisplay } from 'vuetify'
  const { mdAndUp } = useDisplay()

  const prefix = computed(() => patch ? 'PATCH' : 'GET')

  const button_alignment = computed(() => mdAndUp.value ? 'text-right' : 'text-center')
  const emits = defineEmits(['click'])

  const show_link = computed(() => {
    return route === 'stats' || route === 'online'
  })

  function emitClick () {
    emits('click')
  }

  const random_url = computed(() => `${route}/random`)

  const url = computed(() => `${route}${variable ? `/{ ${variable} }` : ''}`)

  const { description, route, variable, random, title, patch } = defineProps<{
    description: string
    patch?: boolean
    random: boolean
    route: string
    title: string
    variable?: string
  }>()

</script>

<style>
.v-btn {
text-transform: none !important;
}
</style>
