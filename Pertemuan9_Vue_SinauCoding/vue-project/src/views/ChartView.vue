<script setup>
import { useCounterStore } from "@/stores/product";

const productStore = useCounterStore();
const products = productStore.listProduct;
const logProduct = productStore.logProduct;
</script>

<template>
  <div class="container">
    <h1>This is the Chart View page</h1>
    <div>
      <p>Items for sale</p>
      <p>Total items: {{ logProduct.length }}</p>
    </div>
    <div class="card" v-for="pro in products" :key="pro.id">
      <p>{{ pro.title }}</p>
      <button class="btn" @click="productStore.addProduct(pro.id)">Add</button>
    </div>
  </div>
</template>
<style>
.container {
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 28px;
  margin-top: 20px;
  align-items: center;
}
p {
  color: rgb(200, 200, 200);
}
.container h1 {
  font-size: 40px;
  font-weight: 600;
}
.card {
  border: 2px solid black;
  border-radius: 8px;
  padding: 20px 0 10px 0;
  width: 700px;
  text-align: center;
}
.card p {
  margin-bottom: 24px;
}
.btn {
  background-color: #191919;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 14px;
}
.btn:active {
  border: 2px solid #799cc9;
}
</style>
