<template>
  <td class="cl text-decoration-underline"><span @click="goto(id)">{{ text }}</span></td>
</template>

<script setup lang="ts">
  import { goto } from '@/services/goto'

  defineProps<{
    id: string
    text: string
  }>()
</script>
