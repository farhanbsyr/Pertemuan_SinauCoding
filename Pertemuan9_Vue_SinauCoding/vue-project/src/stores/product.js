import { reactive } from "vue";
import { defineStore } from "pinia";
import product from "../data/Product.json";

export const useCounterStore = defineStore("counter", () => {
  const listProduct = reactive(product);
  const logProduct = reactive([]);

  function addProduct(id) {
    const filPro = listProduct.find((pro) => pro.id === id);
    const fullpro = logProduct.find((pro) => pro.id === id);
    if (filPro === fullpro) {
      return;
    } else if (filPro) {
      logProduct.push(filPro);
    }
  }

  function removeProduct(id) {
    const index = logProduct.findIndex((pro) => pro.id === id);
    if (index !== -1) {
      logProduct.splice(index, 1);
    }
  }
  return { listProduct, logProduct, addProduct, removeProduct };
});
