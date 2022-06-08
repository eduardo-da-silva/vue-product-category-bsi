<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
};
</script>
<template>
  <div class="category-list">
    <table class="table">
      <thead>
        <tr>
          <th class="text-left">
            <span> <h2>ID</h2> </span>
          </th>
          <th class="text-left">
            <span> <h2>Descrição</h2> </span>
          </th>
          <th class="text-left">
            <span> <h2>Ações</h2> </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category of categories" :key="category.id">
          <td>{{ category.id }}</td>
          <td>{{ category.description }}</td>
          <td>
            <button @click="$emit('edit', category)">Update</button>
            <button @click="$emit('delete', category.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.category-list {
  margin: 3% auto;
  width: 70%;
}
table {
  /* display: table; */
  border-collapse: separate;
  border-spacing: 2px;
  border-color: gray;
  width: 100%;
}

th {
  border-bottom: 2px solid #444;
  text-align: left;
}

td {
  padding: 10px;
}

thead tr {
  background-color: #444;
  color: whitesmoke;
}

tbody tr:nth-child(odd) {
  background-color: #c3c3c3;
}
</style>
