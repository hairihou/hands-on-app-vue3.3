<script setup lang="ts">
import { computed } from "vue";

interface Props {
  /** @default 'primary' */
  color: "primary" | "default";
  /** @default 'medium' */
  size: "small" | "medium" | "large";
}

const props = withDefaults(defineProps<Props>(), {
  color: "primary",
  size: "medium",
});

const classes = computed<string[]>(() => {
  return [
    "px-4 py-2 rounded-md",
    props.color === "primary"
      ? "bg-primary text-primary-contrast"
      : "bg-gray-500 text-white",
    props.size === "small"
      ? "text-sm"
      : props.size === "large"
      ? "text-lg"
      : "",
    "hover:opacity-50",
  ];
});
</script>

<template>
  <button :class="classes">
    <slot></slot>
  </button>
</template>
