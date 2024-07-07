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
    const customer = ref("");
    const total = ref(0);
    const qty = ref(0);
    const listGroceries = reactive([]);

    // emit dari formInput
    const handleAddGroceries = (newGroceries) => {
      console.log(newGroceries);
      listGroceries.push(newGroceries);
    };

    // emit dari tableBelanja
    const handleTotalPriceUpdate = (newTotalPrice) => {
      total.value = newTotalPrice;
    };
    const handleTotalAmountUpdate = (newTotalAmount) => {
      qty.value = newTotalAmount;
    };

    const addPrintBill = () => {
      if (listGroceries.length === 0) {
        alert("Please Field in customer Groceries");
      } else if (customer.value.trim() === "") {
        alert("Please Field in customer name");
      } else {
      }
    };
    const canprintInvoice = computed(() => {
      return listGroceries.length > 0 && customer.value.trim() !== "";
    });

    const showPrintBill = ref(false);
    return {
      customer,
      listGroceries,
      canprintInvoice,
      handleAddGroceries,
      handleTotalPriceUpdate,
      handleTotalAmountUpdate,
      addPrintBill,
      total,
      qty,
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
      <input type="text" v-model="customer" />
    </div>

    <formVue @add-groceries="handleAddGroceries" />
    <tabelBelanjaVue
      :grocerie="listGroceries"
      @update:totalPrice="handleTotalPriceUpdate"
      @update:totalAmount="handleTotalAmountUpdate"
    />
    <p>Total Data : {{ listGroceries.length }}</p>
    <div id="submitBTN">
      <button class="form-btn" @click="addPrintBill">
        <router-link
          v-if="canprintInvoice"
          :to="{
            name: 'about',
            query: {
              total: total,
              qty: qty,
              customer: customer,
            },
          }"
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
