<template>
  <div id="todo-app">
    <div class="container">
      <h1>My amazing list of todos</h1>
      <NewTodo :addNewTodo="addNewTodo" />
      <Tools :clearAll="clearAll"
        :clearCompleted="clearCompleted"
        :completedTodos="completedTodos"
        :sortOrder="sortOrder"
        :onChangeSortOrder="onChangeSortOrder"
        :todos="todos"
      />
      <TodoList :todos="todos"
        :changeLabel="changeLabel"
        :saveTodos="saveTodos"
        :toggleTodo="toggleTodo"
      />
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import NewTodo from './components/NewTodo.vue';
import TodoList from './components/TodoList.vue';
import Tools from './components/Tools.vue';

export default {
  name: 'app',
  components: {
    NewTodo,
    TodoList,
    Tools,
  },
  data() {
    return {
      errors: null,
      todos: [],
      newTodo: {},
      sortOrder: 'Created',
    };
  },
  mounted() {
    if (localStorage.getItem('todos')) {
      try {
        this.todos = JSON.parse(localStorage.getItem('todos'));
      } catch (e) {
        this.errors = e;
      }
    }
    if (localStorage.getItem('sortOrder')) {
      this.sortOrder = localStorage.getItem('sortOrder');
    }
  },
  methods: {
    addNewTodo(label, priority) {
      this.todos.push({
        label, priority, checked: false, created: new Date(),
      });
      this.updateSortOrder(this.sortOrder);
    },
    changeLabel(event, index) {
      this.todos[index].label = event.target.value;
      this.updateSortOrder(this.sortOrder);
    },
    onChangeSortOrder(event) {
      const sortBy = event.target.value;
      this.sortOrder = sortBy;
      localStorage.setItem('sortOrder', sortBy);

      this.updateSortOrder(sortBy);
    },
    updateSortOrder(sortOrder) {
      let sortedTodos;
      switch (sortOrder) {
        case 'Created':
          sortedTodos = _.sortBy(this.todos, ['created']);
          break;
        case 'Description':
          sortedTodos = _.sortBy(this.todos, [todo => todo.label.toLowerCase()]);
          break;
        case 'Priority': {
          const meh = this.todos.filter(todo => todo.priority === 'Meh');
          const important = this.todos.filter(todo => todo.priority === 'Important');
          const lifeChanging = this.todos.filter(todo => todo.priority === 'Life Changing');
          sortedTodos = _.concat(lifeChanging, important, meh);
          break;
        }
        default:
          return;
      }
      this.saveTodos();
      this.todos = sortedTodos;
    },
    clearAll() {
      this.todos = [];
      this.saveTodos();
    },
    clearCompleted() {
      const notCompleted = this.todos.filter(todo => todo.checked === false);
      this.todos = notCompleted;
      this.saveTodos();
    },
    saveTodos() {
      const parsed = JSON.stringify(this.todos);
      localStorage.setItem('todos', parsed);
    },
    toggleTodo(index) {
      this.todos[index].checked = !this.todos[index].checked;
      this.saveTodos();
    },
  },
  computed: {
    completedTodos() {
      const completedTodos = this.todos.length && this.todos.filter(todo => todo.checked === true);
      return completedTodos.length > 0;
    },
  },
};
</script>

<style lang="scss">
  #todo-app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    justify-content: center;
    text-align: center;
    color: #2c3e50;
    margin-top: 40px;
  }
  .container {
    display: flex;
    flex-direction: column;
    max-width: 650px;
    width: 100%;
  }

  h1 {
    margin-bottom: 50px;
  }

</style>
