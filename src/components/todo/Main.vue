<template>
  <section class="todo_wrap">
    <TodoInput />
    <List />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import TodoInput from "./Input.vue";
import List from "./List.vue";

export default defineComponent({
  name: "Input",
  components: {
    TodoInput,
    List,
  },
});
</script>

<style lang="scss" scoped>
.todo_wrap {
  width: 600px;
  margin: 0 auto;
  border: solid 1px #000;
  text-align: center;
}
</style>
