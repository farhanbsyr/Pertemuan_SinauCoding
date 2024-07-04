<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import FormSideVue from "../../Pertemuan6_Vue/src/components/FormSide.vue";
</script>

<template>
  <div class="container">
    <HelloWorld />
    <FormSideVue />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  width: 100%;
  font-family: "Montserrat", sans-serif;
}
</style>
