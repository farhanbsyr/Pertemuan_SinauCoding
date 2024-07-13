<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <nav class="container-nav">
    <ul>
      <li class="navLink">Home</li>
      <RouterLink to="/" class="navLink">Chart</RouterLink>
      <RouterLink to="/chart-log" class="navLink">Log</RouterLink>
    </ul>
  </nav>
</template>
<style>
.container-nav {
  padding: 16px 0px;
}
li {
  list-style: none;
}

.navLink {
  color: #6368f9;
  font-weight: 600;
  text-decoration: none;
}

.container-nav ul {
  display: flex;
  flex-direction: row;
  font-size: 24px;
  gap: 8px;
  padding: 0;
}
</style>
