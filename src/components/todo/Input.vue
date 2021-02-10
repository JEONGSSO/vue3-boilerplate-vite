<template>
  <div class="input_wrap">
    <input type="text" class="input" @keypress.enter="addTodo" v-model="data.inputValue" />
    <button @click="addTodo" class="btn add_btn">+</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Input',
  setup() {
    const store = useStore();
    const data = reactive({
      inputValue: ''
    });

    const addTodo = () => {
      store.dispatch('addTodo', { title: data.inputValue, done: false });
      data.inputValue = '';
    };

    return {
      data,
      addTodo
    };
  }
});
</script>

<style lang="scss" scoped>
.input_wrap {
  display: flex;
  justify-content: center;
  height: 30px;
  padding: 8px 0;

  .input {
    width: 50%;
    height: 100%;
    padding: 0 10px;
    box-sizing: border-box;
  }

  .btn {
    width: 30px;
    height: 100%;
    &.add_btn {
      margin-left: 8px;
      border: solid 1px #000;
      border-radius: 4px;
      font-size: 20px;
      color: #7cb2d6;
      &:hover {
        background-color: rgb(0, 0, 0, 0.2);
      }
    }
  }
}
</style>
