type Todo = {
  title: string;
  done: boolean;
};

type State = {
  todoList: Array<Todo>;
};

const state: State = {
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
