<script>
import { ref, reactive, computed } from "vue";
import formVue from "./home/formInput.vue";
import tabelBelanjaVue from "./home/tabelBelanja.vue";

export default {
  components: {
    formVue,
    tabelBelanjaVue,
  },
  setup() {
    const userName = ref("");
    const listGroceries = reactive([]);
    const showBill = reactive({
      nama: "",
    });

    const handleAddGroceries = (newGroceries) => {
      console.log(newGroceries);
      listGroceries.push(newGroceries);
    };

    const addPrintBill = () => {
      if (listGroceries.length === 0) {
        alert("Please Field in customer Groceries");
      } else if (userName.value.trim() === "") {
        alert("Please Field in customer name");
      }
    };
    const canprintInvoice = computed(() => {
      return listGroceries.length > 0 && userName.value.trim() !== "";
    });

    const showPrintBill = ref(false);
    return {
      userName,
      listGroceries,
      canprintInvoice,
      handleAddGroceries,
      addPrintBill,
      showBill,
      showPrintBill,
    };
  },
};
</script>

<template>
  <div class="container">
    <h1>List Ingredients</h1>

    <div>
      <p>Custumer</p>
      <input type="text" v-model="userName" />
      <p>{{ userName }}</p>
    </div>

    <formVue @add-groceries="handleAddGroceries" />
    <tabelBelanjaVue :grocerie="listGroceries" />
    <p>Total Data : {{ listGroceries.length }}</p>
    <div id="submitBTN">
      <button class="form-btn" @click="addPrintBill">
        <router-link
          v-if="canprintInvoice"
          :to="{ name: 'about', params: { showBill: showBill.nama } }"
          class="router-link"
          >Cetak Tagihan</router-link
        >
        <span v-else>Cetak Tagihan</span>
      </button>
    </div>
  </div>
</template>

<style>
.router-link {
  color: white;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.form-table {
  display: flex;
  justify-content: center;
}
.form-table table {
  border-spacing: 0;
}
.form-btn {
  padding: 8px 17px;
  border-radius: 5px;
  background-color: black;
  border: 0;
  color: white;
  font-weight: 400;
}
</style>
