import TODOTYPES from './types';

import { Todo } from './state';
const { ADD_TODO, REMOVE_TODO, MODIFY_TODO, DONE_TOGGLE_TODO } = TODOTYPES;

const actions = {
  addTodo({ commit }, payload: Todo) {
    commit(ADD_TODO, payload);
  },
  removeTodo({ commit }, idx: number) {
    commit(REMOVE_TODO, idx);
  },
  modifyTodo({ commit }, payload: Todo) {
    commit(MODIFY_TODO, payload);
  },
  doneToggleTOdo({ commit }, isDone: boolean) {
    commit(DONE_TOGGLE_TODO, isDone);
  }
};

export default actions;
