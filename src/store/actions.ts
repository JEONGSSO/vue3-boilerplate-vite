// 비동기 처리시 actions

const actions = {
  addTodo({ commit }, payload: Object) {
    commit("addTodo", payload);
  },
  removeTodo({ commit }, idx: number) {
    commit("removeTodo", idx);
  },
  modifyTodo({ commit }, payload: Object) {
    commit("modifyTodo", payload);
  },
};

export default actions;
