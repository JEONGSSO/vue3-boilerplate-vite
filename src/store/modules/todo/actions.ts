import TODOTYPES from "./types";

const { ADD_TODO, REMOVE_TODO, MODIFY_TODO } = TODOTYPES;

const actions = {
  addTodo({ commit }, payload: object) {
    commit(ADD_TODO, payload);
  },
  removeTodo({ commit }, idx: number) {
    commit(REMOVE_TODO, idx);
  },
  modifyTodo({ commit }, payload: object) {
    commit(MODIFY_TODO, payload);
  },
};

export default actions;
