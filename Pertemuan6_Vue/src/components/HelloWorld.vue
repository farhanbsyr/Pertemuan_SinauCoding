<template>
  <div class="illustrator-container">
    <div class="illustrator-title">
      <h1>Welcome to Twitter</h1>
      <p class="aneh">Happening now, join twitter today</p>
    </div>
    <img
      src="../Asset/Ilustrator.svg"
      width="350"
      height="350"
      alt="Ilustrator"
    />
    <p class="credit">© 2022 Twitter, Inc</p>
  </div>
</template>

<script>
export default {};
</script>

<style>
.illustrator-container {
  padding: 100px 0 25px 0;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  background-color: #1e9cf1;
}
.illustrator-title {
  text-align: center;
  height: 100px;
}
.illustrator-title h1 {
  font-size: 32px;
  font-weight: 700;
}
.aneh {
  font-size: 30px;
}
.illustrator-title p {
  font-size: 16px;
  font-weight: 600;
}

.illustrator-container .credit {
  font-size: 13px;
}
</style>
