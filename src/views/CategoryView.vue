<script>
import ListCategory from "../components/category/ListCategory.vue";
import FormCategory from "../components/category/FormCategory.vue";

export default {
  components: { ListCategory, FormCategory },
  data() {
    return {
      currentCategory: {
        id: "",
        description: "",
      },
    };
  },

  methods: {
    prepareToUpdate(category) {
      Object.assign(this.currentCategory, category);
    },
  },
};
</script>
<template>
  <h1>Cadastro de Categorias</h1>
  <FormCategory :currentCategory="currentCategory" />
  <ListCategory @edit="prepareToUpdate" />
</template>

<style scoped></style>
