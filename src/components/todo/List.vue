<template>
  <ul class="list_wrap">
    <li v-for="(item, idx) in todoList" :key="idx">
      <label :for="idx" class="label">
        <input type="checkbox" name="done" :id="idx" />
        {{ item.title }}
      </label>
      <button @click="removeTodo(idx)" class="btn remove_btn">X</button>
    </li>
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "List",
  setup() {
    const store = useStore();

    const removeTodo = (idx: number) => store.dispatch("removeTodo", idx);
    const modifyTodo = (updateValue: string, idx: number) => {
      store.dispatch("modifyTodo", idx);
    };

    return {
      removeTodo,
      modifyTodo,
      todoList: computed(() => store.getters.todoList),
    };
  },
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
