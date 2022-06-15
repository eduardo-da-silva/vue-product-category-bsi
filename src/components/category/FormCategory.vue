<script>
import { mapActions } from "pinia";
import { useCategoryStore } from "@/stores/category";

export default {
  props: {
    currentCategory: {
      type: Object,
    },
  },
  data() {
    return {
      category: this.currentCategory,
    };
  },
  methods: {
    ...mapActions(useCategoryStore, ["saveCategory"]),
    async save() {
      try {
        const msg = await this.saveCategory(this.category);
        alert(msg);
        Object.assign(this.category, {
          id: "",
          description: "",
        });
      } catch (e) {
        alert("Ooops! Algo de errado!");
      }
    },
  },
};
</script>

<template>
  <div class="category-form">
    <input type="text" v-model="category.description" />
    <button @click="save">
      {{ currentCategory.id !== "" ? "Salvar" : "Adicionar" }}
    </button>
  </div>
</template>

<style scoped>
.category-form input {
  width: 75%;
  height: 40px;
  border-radius: 20px;
  border: 1px solid gray;
  padding-left: 20px;
  font-size: 1.2em;
}

.category-form button {
  height: 35px;
  width: 20%;
  margin-left: 2%;
  background-color: rgb(63, 63, 125);
  color: whitesmoke;
  font-size: 1.2em;
  border-radius: 20px;
  border: 0;
}

.category-form {
  margin: 3% auto;
  width: 70%;
}
</style>
