<script setup lang="ts">
import ButtonBase from "./components/ButtonBase.vue";
</script>

<template>
  <div class="flex flex-col gap-y-2 p-4">
    <div class="flex items-center gap-x-2">
      <ButtonBase color="orange">Orange 🍊</ButtonBase>
      <ButtonBase>Primary Default</ButtonBase>
      <ButtonBase disabled>Primary Disabled</ButtonBase>
      <ButtonBase size="small">Primary Small</ButtonBase>
      <ButtonBase size="large">Primary Large</ButtonBase>
    </div>

    <div class="flex items-center gap-x-2">
      <ButtonBase color="secondary">Secondary Default</ButtonBase>
      <ButtonBase color="secondary" disabled>Secondary Disabled</ButtonBase>
      <ButtonBase color="secondary" size="small">Secondary Small</ButtonBase>
      <ButtonBase color="secondary" size="large">Secondary Large</ButtonBase>
    </div>
  </div>
</template>
