<script>
import { reactive } from "vue";
export default {
  emits: ["add-groceries"],
  setup(props, { emit }) {
    const groceries = reactive({
      ingredient: "",
      price: 0,
      amount: 0,
    });
    const addGroceries = () => {
      if (
        groceries.ingredient.trim() !== "" &&
        parseInt(groceries.price) !== 0 &&
        parseInt(groceries.amount) !== 0
      ) {
        emit("add-groceries", {
          ingredient: groceries.ingredient,
          price: parseInt(groceries.price),
          amount: parseInt(groceries.amount),
        });
        groceries.ingredient = "";
        groceries.price = 0;
        groceries.amount = 0;
      } else {
        console.log("aneh nih");
      }
    };

    return {
      groceries,
      addGroceries,
    };
  },
};
</script>

<template>
  <form @submit.prevent="addGroceries" class="form-store" action="">
    <div class="form-inputData">
      <div class="form-group">
        <label for="ingredient">Ingredient </label>
        <input
          type="text"
          name="ingredient"
          id="ingredient"
          v-model="groceries.ingredient"
        />
      </div>
      <div class="form-group">
        <label for="amount">Amount </label>
        <input
          type="number"
          name="amount"
          id="amount"
          value="0"
          v-model="groceries.amount"
        />
      </div>
      <div class="form-group">
        <label for="number">Price </label>
        <input
          type="number"
          name="number"
          id="number"
          value="0"
          v-model="groceries.price"
        />
      </div>
      <button class="form-btn" type="submit">Submit</button>
    </div>
  </form>
</template>

<style>
.form-store {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.form-inputData {
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
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
