<script setup lang="ts">
import { computed } from "vue";

interface Props {
  /** @default 'primary' */
  color?: "primary" | "secondary";
  /** @default 'medium' */
  size?: "small" | "medium" | "large";
}

const props = withDefaults(defineProps<Props>(), {
  color: "primary",
  size: "medium",
});

const emit = defineEmits<{
  (e: "click", payload: MouseEvent): void;
}>();

defineOptions({
  inheritAttrs: false,
});

const classes = computed<string[]>(() => {
  return [
    props.color === "secondary"
      ? "bg-secondary text-secondary-contrast"
      : "bg-primary text-primary-contrast",
    props.size === "small"
      ? "text-sm"
      : props.size === "large"
        ? "text-lg"
        : "text-base",
    "px-4 py-2 rounded-md",
    "disabled:bg-gray-500",
    "disabled:opacity-50",
    "not-disabled:hover:opacity-80",
  ];
});

const handleClick = (payload: MouseEvent): void => emit("click", payload);
</script>

<template>
  <button v-bind="$attrs" :class="classes" @click="handleClick">
    <slot></slot>
  </button>
</template>
