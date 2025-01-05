<script setup lang="ts">
import ButtonBase from "./components/ButtonBase.vue";
</script>

<template>
  <div class="flex flex-col gap-y-2 p-4">
    <div
      class="flex flex-col items-center justify-center bg-primary w-80 h-8 rounded-md"
    >
      <span class="text-primary-contrast">Primary Box</span>
    </div>

    <div
      class="flex flex-col items-center justify-center bg-primary-rgb/50 w-80 h-8 rounded-md"
    >
      <span class="text-primary-contrast-rgb/50">Primary Box RGB</span>
    </div>

    <p class="text-primary-shade text-sm">Primary Shade</p>
    <p class="text-primary-tint text-lg">Primary Tint</p>

    <div class="flex items-center gap-x-1">
      <ButtonBase>Click</ButtonBase>
      <ButtonBase color="default">Click</ButtonBase>
      <ButtonBase size="small">Click</ButtonBase>
      <ButtonBase size="large">Click</ButtonBase>
    </div>
  </div>
</template>
