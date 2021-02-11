<template>
  <ul class="list_wrap">
    <template v-for="(item, idx) in todoList" :key="idx">
      <li v-if="item.done === doneView">
        <label :for="idx" class="label" @click="e => modifyTodo(e, idx)">
          <input type="checkbox" name="done" :id="idx" :checked="item.done" />
        </label>
        <span :class="{ done: item.done }" @blur="e => modifyTodo(e, idx)">
          {{ item.title }}
        </span>
        <button @click="removeTodo(idx)" class="btn remove_btn">X</button>
      </li>
    </template>
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { Todo } from '../../store/modules/todo/state';

export default defineComponent({
  name: 'List',
  setup() {
    const store = useStore();
    const todoList = computed(() => store.getters.todoList);
    const doneView = computed(() => store.getters.doneView);

    const removeTodo = (idx: number) => store.dispatch('removeTodo', idx);
    const modifyTodo = (e: { target: HTMLInputElement }, idx: number) => {
      const payload: Todo = {
        title: e.target.innerText || store.getters.todoList[idx].title,
        done: e.target.checked
      };
      store.dispatch('modifyTodo', { idx, payload });
    };

    return {
      removeTodo,
      modifyTodo,
      todoList,
      doneView
    };
  }
});
</script>

<style lang="scss" scoped>
.list_wrap {
  li {
    height: 20px;
    padding: 5px 0;
    .label {
      height: 100%;
      input {
        position: relative;
        top: 3px;
      }
    }
    span.done {
      text-decoration: underline;
    }
  }
  .btn {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-left: 8px;
    &:hover {
      background-color: rgba(255, 3, 7, 0.6);
    }
  }
}
</style>
