<template>
  <form v-on:submit.prevent="onNewTodo(todoName, todoPriority)">
    <div class="row">
      <input type="text"
        autofocus
        v-model="todoName"
        placeholder="I really need to..."
        class="todo-label"
        :class="{error: showError}" />
      <select v-model="todoPriority">
        <option value="Life Changing">Life Changing</option>
        <option value="Important">Important</option>
        <option value="Meh">Meh</option>
      </select>
      <input type="submit" value="Add" class="submit" :disabled="!todoName.length" />
    </div>
  </form>
</template>

<script>
export default {
  name: 'NewTodo',
  props: {
    addNewTodo: Function,
  },
  data() {
    return {
      todoName: '',
      todoPriority: 'Important',
      showError: false,
    };
  },
  methods: {
    onNewTodo(todoName, todoPriority) {
      if (todoName === '') {
        this.showError = true;
      } else {
        this.addNewTodo(todoName, todoPriority);
        this.showError = false;
        this.todoName = '';
      }
    },
  },
};
</script>

<style scoped lang="scss">
.row {
  display: flex;
}
input {
  background: #f8f8f8;
  border: none;
  border-radius: 4px 0 0 4px;
  border: 2px solid rgba(0,0,0,.15);
  padding: 10px 14px;
  font-size: 18px;
  width: 100%;
  &.todo-label {
    box-shadow: 0 3px 1px rgba(0,0,0,.05) inset;
  }
  &.submit {
    width: 100px;
    border-radius: 4px;
    background-color: #3977eb;
    border-color: transparent;
    color: #fff;
    margin-left: 20px;
    &:disabled {
        background-color: #e2e4e6;
        color: #aaa;
    }
    &.error {
        border-color: red;
    }
}
}
select {
  appearance: unset;
  border: none;
  border-radius: 0 4px 4px 0;
  background: url('../assets/arrows.svg') no-repeat right 8px center;
  background-color: #f8f8f8;
  font-size: 18px;
  padding: 10px 30px 10px 14px;
  border: 2px solid rgba(0,0,0,.15);
  border-left: none;
}
</style>
