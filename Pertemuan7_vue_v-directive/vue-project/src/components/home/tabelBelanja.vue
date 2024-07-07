<script>
import { computed, defineComponent, ref, watch } from "vue";

export default defineComponent({
  props: {
    grocerie: {
      type: Array,
      required: true,
    },
  },
  setup(props, { emit }) {
    const totalGroceries = ref({
      amount: 0,
      price: 0,
    });
    const { grocerie } = props;
    const deleteGroceries = (index) => {
      grocerie.splice(index, 1);
    };
    const totalPrice = computed(() => {
      const hasil = grocerie.reduce(
        (total, num) => total + num.price * num.amount,
        0
      );
      return hasil;
    });
    const totalAmount = computed(() => {
      return grocerie.reduce((total, item) => total + item.amount, 0);
    });

    watch(totalAmount, (newTotalAmount) => {
      emit("update:totalAmount", newTotalAmount);
    });

    watch(totalPrice, (newTotalPrice) => {
      emit("update:totalPrice", newTotalPrice);
    });

    return {
      grocerie,
      totalGroceries,
      totalPrice,
      totalAmount,
      deleteGroceries,
    };
  },
});
</script>

<template>
  <div class="form-table">
    <table border="1" cellpadding="5px">
      <thead>
        <tr>
          <th>No</th>
          <th>Ingredient</th>
          <th>Price</th>
          <th>Amount</th>
          <th>Total</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="grocerie.length === 0">
          <td colspan="6">Data Empty</td>
        </tr>
        <tr v-for="(data, index) in grocerie" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ data.ingredient }}</td>
          <td>Rp.{{ data.price }},00</td>
          <td>{{ data.amount }}</td>
          <td>Rp.{{ data.amount * data.price }},00</td>
          <td>
            <button class="form-btn" @click="deleteGroceries(index)">
              Delete
            </button>
          </td>
        </tr>
        <tr v-if="grocerie.length > 0">
          <td colspan="3">Total</td>
          <td>{{ totalAmount }}</td>
          <td>Rp.{{ totalPrice }},00</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
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
