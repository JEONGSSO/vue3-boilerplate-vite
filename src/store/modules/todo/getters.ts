import { State } from './state';

const getters = {
  todoList: ({ todoList }: State) => todoList,
  doneView: ({ doneView }: State) => doneView
};

export default getters;
