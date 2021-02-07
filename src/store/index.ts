import { createStore } from "vuex";

import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import modules from "./modules/test";

const getters = {
  todoList: ({ todoList }) => todoList,
};

export default createStore({
  state,
  mutations,
  actions,
  modules,
  getters,
  strict: true, // production 배포시 제거
});
