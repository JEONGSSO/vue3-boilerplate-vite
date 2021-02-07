const mutations = {
  addTodo({ todoList }, payload: Object) {
    todoList.push(payload);
  },
  removeTodo({ todoList }, idx: number) {
    todoList.splice(idx, 1);
  },
  modifyTodo({ todoList }, payload: Object) {
    // todo
    // todoList.push(payload);
  },
};

export default mutations;
