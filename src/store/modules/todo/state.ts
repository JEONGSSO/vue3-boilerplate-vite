export interface Todo {
  title: string;
  done: boolean;
};

export interface State {
  todoList: Array<Todo>;
};

export const state: State = {
  todoList: [
    {
      title: "vue3",
      done: false,
    },
    {
      title: "tdd",
      done: false,
    },
    {
      title: "learn",
      done: false,
    },
  ],
};

export default state;
