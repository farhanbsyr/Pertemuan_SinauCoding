<script setup>
const props = defineProps({
  headers: {
    type: Object,
    require: false,
  },
});
</script>

<template>
  <thead>
    <tr>
      <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
    </tr>
  </thead>
</template>
