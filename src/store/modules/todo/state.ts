export interface Todo {
  idx?: number;
  title?: string;
  done?: boolean;
}

export interface State {
  todoList: Array<Todo>;
}

export const state: State = {
  todoList: [
    { title: 'vue3', done: false },
    { title: 'tdd', done: true },
    { title: 'learn', done: false }
  ]
};

export default state;
