<script setup>
import { ref } from "vue";
import HeadersVue from "./components/Headers.vue";
import AuthorVue from "./components/Author.vue";
import PostVue from "./components/Post.vue";

const coba = ref("");
</script>

<template>
  <main>
    <div class="header-nav">
      <HeadersVue></HeadersVue>
      <PostVue></PostVue>
      <AuthorVue />
    </div>
  </main>
</template>

<style scoped>
.header-nav {
  background-color: #383737;
  color: blue;
}
</style>
