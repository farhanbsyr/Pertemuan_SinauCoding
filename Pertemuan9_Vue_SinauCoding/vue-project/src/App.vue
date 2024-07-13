<script setup>
import { RouterLink, RouterView } from "vue-router";
import HeadersView from "./components/Headers.vue";
</script>

<template>
  <main>
    <div class="header-nav">
      <HeadersView />
    </div>
    <RouterView />
  </main>
</template>

<style scoped>
.header-nav {
  background-color: #383737;
  color: blue;
}
main {
  background-color: #232323;
}
</style>
