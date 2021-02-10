<template>
  <div class="toggle_wrap">
    완료목록 보기
    <div class="button" :class="{ active: isActive }" @click="activeToggle">
      <span class="ball"></span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();
    const isActive = ref(false);

    const activeToggle = () => {
      isActive.value = !isActive.value;
      store.dispatch('doneToggleTOdo', isActive.value);
    };

    return {
      isActive,
      activeToggle
    };
  }
});
</script>

<style lang="scss" scoped>
.toggle_wrap {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .button {
    position: relative;
    width: 50px;
    height: 20px;
    border: solid 1px #000;
    border-radius: 20px;
    cursor: pointer;
    .ball {
      position: absolute;
      width: 20px;
      height: 20px;
      background-color: rgb(226, 216, 216);
      border-radius: 50%;
      left: 2px;
      transition: left 0.5s;
    }
    &.active .ball {
      left: 28px;
      background-color: rgb(137, 226, 85);
    }
  }
}
</style>
