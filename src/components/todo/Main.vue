<template>
  <section class="todo_wrap">
    <TodoInput />
    <Filter />
    <List />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TodoInput from './Input.vue';
import List from './List.vue';
import Filter from './Filter.vue';

export default defineComponent({
  name: 'Input',
  components: {
    TodoInput,
    List,
    Filter
  }
});
</script>

<style lang="scss" scoped>
.todo_wrap {
  width: 600px;
  margin: 0 auto;
  padding: 10px;
  border: solid 1px #000;
  text-align: center;
}
</style>
