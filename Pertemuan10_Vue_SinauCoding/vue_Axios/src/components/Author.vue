<script setup>
import api from "../api/api";
import { onMounted, reactive } from "vue";

const cobadata = reactive([]);

onMounted(() => {
  getData();
});
async function getData() {
  const response = await api({
    method: "get",
    url: "/users",
  });
  cobadata.push(...response.data);
  console.log(cobadata);
}
</script>

<template>
  <div class="container">
    <h1>Author</h1>
    <div class="author">
      <div v-for="data in cobadata" :key="data.id" class="list-authors">
        <h2>{{ data.name }}</h2>
        <p>{{ data.username }}</p>
        <p>{{ data.email }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.author {
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: space-between;
}
.list-authors {
  border: 1px solid white;
  padding: 10px 15px;
  width: 200px;
}
</style>
