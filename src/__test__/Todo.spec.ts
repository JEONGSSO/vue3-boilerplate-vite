import { mount, shallowMount } from "@vue/test-utils";
import TodoMain from "../components/todo/Main.vue";
import { Component } from "vue";

// 실패 -> 성공 -> 리팩토링

describe("mount testing", () => {
  it.skip("add Todo Item", () => {
    const wrapper: Component = mount(TodoMain);
    const target = wrapper.get("section");
    expect(target.text()).toBe("sdasds");
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
