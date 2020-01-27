<template>
  <div class="row todo-item-inner">
    <span class="label">
      <input type="checkbox" @click="toggleTodo(index)" :checked="todo.checked" />
      <input
        type="text"
        @change="(event) => {changeLabel(event, index)}"
        @blur="saveTodos"
        class="label-input"
        v-model="todo.label"
        :disabled="todo.checked"
      />
    </span>
    <span class="priority" :class="{disabled: todo.checked}">
        <select v-model="todo.priority" @change="saveTodos" :disabled="todo.checked" dir="rtl">
            <option value="Life Changing">Life Changing</option>
            <option value="Important">Important</option>
            <option value="Meh">Meh</option>
        </select>
    </span>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    changeLabel: Function,
    changePriority: Function,
    index: Number,
    todo: Object,
    toggleTodo: Function,
    saveTodos: Function,
  },
};
</script>

<style scoped lang="scss">
.row {
  width: 100%;
  display: flex;
  align-items: center;
  display: flex;
  justify-content: space-between;
}
.label {
  display: flex;
  flex: 1 1 auto;
  align-items: center;
}
.priority {
  justify-self: flex-end;
  opacity: 0.3;
  flex: 0 0 120px;
  text-align: right;
  select {
    appearance: unset;
    border: none;
    background: transparent;
    font-size: 18px;
    padding: 0;
    outline: none;
    cursor: pointer;
    }
}
.label-input {
  width: 100%;
  padding: 4px 10px;
  font-size: 18px;
  border: none;
  background: transparent;
  outline: none;
}
</style>
