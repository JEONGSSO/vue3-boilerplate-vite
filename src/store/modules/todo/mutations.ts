import { State, Todo } from './state';
import types from './types';

interface Data {
  idx: number;
  payload: Todo;
}

const mutations = {
  [types.ADD_TODO]({ todoList }: State, payload: Todo) {
    todoList.push(payload);
  },
  [types.REMOVE_TODO]({ todoList }: State, idx: number) {
    todoList.splice(idx, 1);
  },
  [types.MODIFY_TODO]({ todoList }: State, data: Data) {
    todoList[data.idx] = data.payload;
  },
  [types.DONE_TOGGLE_TODO](state: State, doneView: boolean) {
    // { todoList } 구조 분해 할당 반응성을 가지지 않는듯.
    state.doneView = doneView;
  }
};

export default mutations;
