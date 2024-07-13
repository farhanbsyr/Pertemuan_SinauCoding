<script setup>
import { useCounterStore } from "@/stores/product";
import { ref } from "vue";

const productStore = useCounterStore();
const logProduct = ref(productStore.logProduct);
</script>

<template>
  <div class="container">
    <h1>This is the Log Chart page</h1>

    <p>Total items: {{ logProduct.length }}</p>

    <div v-if="logProduct.length > 0">
      <div class="card" v-for="pro in logProduct" :key="pro.id">
        <p>{{ pro.title }}</p>
        <button class="btn" @click="productStore.removeProduct(pro.id)">
          Remove
        </button>
      </div>
    </div>

    <h3 v-else>There is nothing in your cart</h3>
  </div>
</template>

<style scoped>
.container h3 {
  font-weight: 600;
  font-size: 20px;
}
.card {
  margin-bottom: 28px;
}
</style>
