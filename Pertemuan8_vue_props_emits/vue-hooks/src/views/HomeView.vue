<script setup>
import headers from "../data/Header.json";
import users from "../data/User.json";
import tableBody from "../components/TableBody.vue";
import tableHead from "../components/TableHead.vue";

const handleShow = (data) => {
  alert(
    headers[1] +
      ": " +
      data.nama +
      ", " +
      headers[2] +
      ": " +
      data.position +
      ", " +
      headers[4] +
      ": " +
      data.email
  );
};
</script>

<template>
  <main>
    <div class="container">
      <table border="2">
        <tableHead :headers="headers"></tableHead>
        <tableBody :users="users" @showUser="handleShow"></tableBody>
      </table>
    </div>
  </main>
</template>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
