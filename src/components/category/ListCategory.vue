<script>
import { mapState, mapStores, mapActions } from "pinia";
import { useCategoryStore } from "@/stores/category";
import DataTable from "../template/DataTable.vue";
export default {
  components: { DataTable },
  data() {
    return {
      columns: ["ID", "Descrição"],
    };
  },
  computed: {
    ...mapStores(useCategoryStore),
    ...mapState(useCategoryStore, ["categories"]),
  },
  methods: {
    ...mapActions(useCategoryStore, ["getAllCategories", "deleteCategory"]),
    async deleteItem(category) {
      try {
        await this.deleteCategory(category.id);
        alert("Item excluído com sucesso.");
      } catch (e) {
        alert(e);
      }
    },
  },
  async mounted() {
    try {
      await this.getAllCategories();
    } catch (e) {
      alert(e);
    }
  },
};
</script>
<template>
  <div class="category-list">
    <data-table
      :columns="columns"
      :items="categories"
      @edit="$emit('edit', $event)"
      @delete="deleteItem"
    />
  </div>
</template>

<style scoped>
.category-list {
  margin: 3% auto;
  width: 70%;
}
</style>
