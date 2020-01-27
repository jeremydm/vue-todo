import { mount } from '@vue/test-utils';
import App from '@/App.vue';
import TodoList from '@/components/TodoList.vue';

describe('Todos', () => {
  it('renders the app', () => {
    const wrapper = mount(App, {
      attachToDocument: true,
    });
    const app = wrapper.find('#todo-app');
    expect(app.exists()).toBe(true);
  });

  it('renders the list', () => {
    const todos = [
      {
        label: 'num 1',
        priority: 'Important',
        checked: true,
        created: new Date(),
      },
      {
        label: 'num 2',
        priority: 'Meh',
        checked: false,
        created: new Date(),
      },
      {
        label: 'num 3',
        priority: 'Important',
        checked: false,
        created: new Date(),
      },
    ];
    const changeLabel = jest.fn();
    const saveTodos = jest.fn();
    const toggleTodo = jest.fn();
    const wrapper = mount(TodoList, {
      propsData: {
        todos,
        changeLabel,
        saveTodos,
        toggleTodo,
      },
    });
    const allTodos = wrapper.findAll('.todo-item');
    expect(allTodos.exists()).toBe(true);
    expect(allTodos).toHaveLength(3);
    expect(allTodos.at(0).classes()).toContain('completed');
  });
});
