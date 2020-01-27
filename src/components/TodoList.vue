<template>
  <div>
    <ul class="list">
      <li v-for="(todo, index) in todos"
        :key="index"
        :class="{completed: todo.checked}"
        class="todo-item"
      >
        <TodoItem :index="index"
          :todo="todo"
          :toggleTodo="toggleTodo"
          :changeLabel="changeLabel"
          :saveTodos="saveTodos"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
  name: 'TodoList',
  components: {
    TodoItem,
  },
  props: {
    changeLabel: Function,
    saveTodos: Function,
    todos: Array,
    toggleTodo: Function,
  },
};
</script>

<style lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
.list {
  margin: 0;
}
li {
  padding: 10px 10px;
  border-bottom: 1px solid #f2f2f2;
  margin: 0;
  .label {
    display: flex;
    flex: 1 1 auto;
    align-items: center;
  }
  .priority {
    justify-self: flex-end;
    opacity: .3;
    flex: 0 0 120px;
    text-align: right;
  }
  &.completed {
    .label {
      opacity: .35;
      text-decoration: line-through;
    }
    .priority {
      opacity: .35;
      select:hover {
        opacity: .6;
        cursor: default;
      }
      &.disabled {
        select:hover {
          opacity: 1;
          cursor: default;
        }
      }
    }
  }
  &:hover {
    background: #fcfcfc;
  }
  .label-input {
    width: 100%;
    padding: 4px 10px;
    font-size: 18px;
    border: none;
    background: transparent;
    outline: none;
  }
}
</style>
