import { defineStore } from "pinia";
import axios from "axios";

export const useCategoryStore = defineStore({
  id: "category",
  state: () => ({
    categories: [],
  }),
  actions: {
    async getAllCategories() {
      try {
        const { data } = await axios.get("http://localhost:4000/category");
        this.categories = data;
        return Promise.resolve();
      } catch (e) {
        console.error(e);
        return Promise.reject("Erro ao acessar servidor");
      }
    },
    async saveCategory(category) {
      try {
        const { data } = await axios.post(
          "http://localhost:4000/category",
          category
        );
        this.categories.push(data);
        return Promise.resolve();
      } catch (e) {
        console.error(e);
        return Promise.reject(e);
      }
    },
  },
});
