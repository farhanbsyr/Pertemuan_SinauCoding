<script setup>
const props = defineProps({
  users: {
    type: Object,
    require: false,
  },
});

const emits = defineEmits(["showUser"]);
const handleClick = (user) => {
  emits("showUser", user);
};
</script>

<template>
  <tbody>
    <tr v-for="user in users" :key="user.id">
      <td>{{ user.id }}</td>
      <td>{{ user.nama }}</td>
      <td>{{ user.position }}</td>
      <td>{{ user.no_telp }}</td>
      <td>{{ user.email }}</td>
      <td><button class="btn" @click="handleClick(user)">Show Data</button></td>
    </tr>
  </tbody>
</template>
<style>
.btn {
  background-color: black;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
}
</style>
