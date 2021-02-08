import { mount } from "@vue/test-utils";
import { Component } from "vue";

import TodoMain from "../components/todo/Main.vue";
import TodoList from "../components/todo/List.vue";

import mutations from "../store/modules/todo/mutations";

// 실패 -> 성공 -> 리팩토링

describe("mount testing", () => {
  it("add Todo Item", () => {
    const payload = { title: "Post", done: false };
    const state = {
      todoList: [],
    };

    mutations["ADD_TODO"](state, payload);

    expect(state).toEqual({
      todoList: [{ title: "Post", done: false }],
    });
  });

  it.skip("TodoList Mount", () => {
    const wrapper: Component = mount(TodoMain);
    const target = wrapper.get("section");
    console.log(target.text());
    expect(target.text()).toBe("sdasds");
  });

  it.skip("TodoList Mount", () => {
    const wrapper: Component = mount(TodoMain);
    const target = wrapper.get("section");
    console.log(target.text());
    expect(target.text()).toBe("sdasds");
  });
});
