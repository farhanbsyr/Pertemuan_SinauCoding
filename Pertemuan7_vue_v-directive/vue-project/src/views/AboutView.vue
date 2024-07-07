<template>
  <div class="container-successPage">
    <h1>Payment</h1>
    <p>
      Total Pembayaran yang harus diabayarkan oleh
      {{ $route.params.showBill }} dari .... items sebesar Rp,00
    </p>
    <button class="form-btn">back</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .container-successPage {
    text-align: center;
    border: 2px solid white;
    max-width: 500px;
    margin: 0 auto;
  }
}
</style>
