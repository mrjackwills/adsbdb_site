<template>
  <v-row align="start" justify="space-between">
    <v-col class="" cols="12" md="5">
      <slot name="table" />
    </v-col>

    <v-col class="" cols="12" md="7">
      <slot name="response" />
    </v-col>

  </v-row>

</template>
