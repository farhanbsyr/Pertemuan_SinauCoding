<script>
export default {
  props: ["userName"],
};
</script>

<template>
  <div class="container-successPage">
    <h1>Payment</h1>
    <p>
      Total Pembayaran yang harus diabayarkan oleh
      {{ $route.query.customer }} dari {{ $route.query.qty }} sebesar Rp.{{
        $route.query.total
      }},00
    </p>
    <button class="form-btn">
      <router-link
        :to="{
          name: 'home',
        }"
        class="router-link"
        >Back</router-link
      >
    </button>
  </div>
</template>

<style>
.container-successPage {
  padding: 20px 10px 10px 10px;
  text-align: center;
  border: 2px solid white;
  max-width: 600px;
  margin: 0 auto;
}
</style>
