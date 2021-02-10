import { State, Todo } from './state';

const mutations = {
  // [ADD_TODO]({ todoList }, payload) {  이렇게쓰면 다른곳에서 타입을 못 찾음
  ADD_TODO({ todoList }: State, payload: Todo) {
    todoList.push(payload);
  },
  REMOVE_TODO({ todoList }: State, idx: number) {
    todoList.splice(idx, 1);
  },
  MODIFY_TODO({ todoList }: State, data: { idx: number; payload: Todo }) {
    todoList[data.idx] = data.payload;
  },
  DONE_TOGGLE_TODO({ todoList }: State, isDone: boolean) {
    todoList = todoList.filter(val => val.done === isDone);
  }
};

export default mutations;
