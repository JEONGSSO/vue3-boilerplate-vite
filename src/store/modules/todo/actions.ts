import { ActionContext } from 'vuex';

import TODOTYPES from './types';
import { State, Todo } from './state';

const { ADD_TODO, REMOVE_TODO, MODIFY_TODO, DONE_TOGGLE_TODO } = TODOTYPES;

const actions = {
  addTodo({ commit }: ActionContext<State, State>, payload: Todo) {
    commit(ADD_TODO, payload);
  },
  removeTodo({ commit }: ActionContext<State, State>, idx: number) {
    commit(REMOVE_TODO, idx);
  },
  modifyTodo({ commit }: ActionContext<State, State>, payload: Todo) {
    commit(MODIFY_TODO, payload);
  },
  doneToggleTodo({ commit }: ActionContext<State, State>, isDone: boolean) {
    commit(DONE_TOGGLE_TODO, isDone);
  }
};

export default actions;
