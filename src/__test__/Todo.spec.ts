import { Component } from 'vue';
import { createStore } from 'vuex';
import { mount } from '@vue/test-utils';

import TodoMain from '../components/todo/Main.vue';
import TodoList from '../components/todo/List.vue';

import { State, state } from '../store/modules/todo/state';
import mutations from '../store/modules/todo/mutations';

import TODOTYPES from '../store/modules/todo/types';
const { ADD_TODO, REMOVE_TODO, MODIFY_TODO, DONE_TOGGLE_TODO } = TODOTYPES;

const store = createStore({
  state,
  mutations
});

// 실패 -> 성공 -> 리팩토링
describe('todoList function test', () => {
  it('add Todo Item', async () => {
    const payload: object = { title: 'Post', done: false };
    await mutations[ADD_TODO](state, payload);

    expect(state).toEqual({
      todoList: [
        { title: 'vue3', done: false },
        { title: 'tdd', done: true },
        { title: 'learn', done: false },
        { title: 'Post', done: false }
      ]
    });
  });

  it('delete Todo Item', async () => {
    const idx = 0;

    await mutations[REMOVE_TODO](state, idx);
    expect(state).toEqual({
      todoList: [
        { title: 'tdd', done: true },
        { title: 'learn', done: false },
        { title: 'Post', done: false }
      ]
    });
  });

  it('Modify Todo Item', async () => {
    const idx = 1;
    const payload = { title: 'learn', done: true };
    await mutations[MODIFY_TODO](state, { idx, payload });
    expect(state.todoList[idx].done).toBe(true);
  });

  it('done Toggle Filter ', async () => {
    const store = createStore({
      state,
      mutations: {
        DONE_TOGGLE_TODO({ todoList }) {
          todoList = todoList.filter(val => val.done);
        }
      },
      getters: {
        todoList: ({ todoList }) => todoList
      }
    });

    await store.commit(DONE_TOGGLE_TODO);

    expect(store.getters.todoList).toEqual({
      todoList: [
        { title: 'tdd', done: true },
        { title: 'learn', done: true }
      ]
    });
  });
});
