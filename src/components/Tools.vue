<template>
  <div v-if="todos.length" class="tools">
    <div class="left">
      <a @click="clearAll">Clear all</a>
      <a v-if="completedTodos" @click="clearCompleted">Clear completed</a>
    </div>
    <div class="right">
      Sort By:
      <select :value="sortOrder" @change="onChangeSortOrder">
        <option value="Created">Created Order</option>
        <option value="Description">Description</option>
        <option value="Priority">Priority</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tools',
  props: {
    clearAll: Function,
    clearCompleted: Function,
    onChangeSortOrder: Function,
    completedTodos: Boolean,
    sortOrder: String,
    todos: Array,
  },
};
</script>

<style scoped lang="scss">
.tools {
  border-bottom: 2px solid #f2f2f2;
  display: flex;
  justify-content: space-between;
  padding: 30px 10px 14px;
  font-size: 15px;
}
select {
  appearance: unset;
  border: none;
  border-radius: 4px;
  background: url("../assets/arrows.svg") no-repeat right 8px center;
  background-color: #f8f8f8;
  font-size: 15px;
  padding: 3px 30px 3px 14px;
  border: 2px solid rgba(0, 0, 0, 0.15);
  background-size: 6px;
}
.left {
  display: flex;
  align-items: center;
}
a {
  color: #3977eb;
  cursor: pointer;
  margin: 0 14px 0 0;
  transition: ease 0.15s color;
  &:hover {
    color: #5f92f0;
  }
}
</style>
