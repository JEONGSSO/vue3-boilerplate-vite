import TODOTYPES from "./types";
const { ADD_TODO, REMOVE_TODO, MODIFY_TODO } = TODOTYPES;

const mutations = {
  [ADD_TODO]({ todoList }, payload) {
    todoList.push(payload);
  },
  [REMOVE_TODO]({ todoList }, idx: number) {
    todoList.splice(idx, 1);
  },
  [MODIFY_TODO]({ todoList }, payload: Object) {
    // todo
    // todoList.push(payload);
  },
};

export default mutations;
