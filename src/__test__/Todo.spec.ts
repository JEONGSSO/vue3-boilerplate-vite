import { Component } from 'vue';
import { createStore } from 'vuex';
import { mount } from '@vue/test-utils';

import TodoMain from '../components/todo/Main.vue';
import TodoList from '../components/todo/List.vue';

import { State, state } from '../store/modules/todo/state';
import mutations from '../store/modules/todo/mutations';

import TODOTYPES from '../store/modules/todo/types';
const { ADD_TODO, REMOVE_TODO, MODIFY_TODO } = TODOTYPES;

const store = createStore({
  state,
  mutations
});

// 실패 -> 성공 -> 리팩토링
describe('mount testing', () => {
  const state: State = {
    todoList: [
      { title: 'vue3', done: false },
      { title: 'tdd', done: false },
      { title: 'learn', done: false }
    ]
  };

  it.skip('add Todo Item', () => {
    const payload: object = { title: 'Post', done: false };
    mutations[ADD_TODO](state, payload);

    expect(state).toEqual({
      todoList: [
        { title: 'vue3', done: false },
        { title: 'tdd', done: false },
        { title: 'learn', done: false },
        { title: 'Post', done: false }
      ]
    });
  });

  it.skip('delete Todo Item', () => {
    const idx = 0;

    // const wrapper: Component = mount(TodoList, {
    //   global: {
    //     plugins: [store]
    //   }
    // });

    mutations[REMOVE_TODO](state, idx);
    expect(state).toEqual({
      todoList: [
        {
          title: 'tdd',
          done: false
        },
        {
          title: 'learn',
          done: false
        }
      ]
    });
  });

  it('Modify Todo Item', () => {
    const payload = { title: 'tdd', done: true };
    mutations[MODIFY_TODO](state, payload);
    expect(state.todoList[2].done).toBe(true);
  });
});
