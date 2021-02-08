<template>
  <div class="input_wrap">
    <label for="">
      <input
        type="text"
        class="input"
        @keypress.enter="addTodo"
        v-model="data.inputValue"
      />
    </label>
    <button @click="addTodo" class="btn add_btn">+</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Input",
  setup() {
    const store = useStore();
    const data = reactive({
      inputValue: "",
    });

    const addTodo = () => {
      store.dispatch("addTodo", { title: data.inputValue, done: false });
      data.inputValue = "";
    };

    return {
      data,
      addTodo,
    };
  },
});
</script>

<style lang="scss" scoped>
.input_wrap {
  height: 30px;
  padding: 8px 0;

  .input {
    width: 50%;
    height: 100%;
    box-sizing: border-box;
  }

  .btn {
    width: 30px;
    height: 100%;
    &.add_btn {
      font-size: 16px;
      color: blue;
      &:hover {
        background-color: rgb(194, 201, 201);
      }
    }
  }
}
</style>
