<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h1 class="text-3xl font-bold underline">{{ msg }}</h1>
  {{ count }}
  {{ msg }}
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
