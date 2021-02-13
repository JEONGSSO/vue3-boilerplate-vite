<template>
  <div class="toggle_wrap">
    완료목록 보기
    <button class="btn" :class="{ active: isActive }" @click="activeToggle">
      <span class="ball"></span>
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();
    const isActive = computed(() => store.getters.doneView);

    const activeToggle = async () => {
      await store.dispatch('doneToggleTodo', !isActive.value);
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
  .btn {
    position: relative;
    width: 50px;
    height: 20px;
    border: solid 1px #000;
    border-radius: 20px;
    .ball {
      position: absolute;
      width: 18px;
      height: 18px;
      top: 0;
      left: 2px;
      border-radius: 50%;
      background-color: rgb(226, 216, 216);
      transition: left 0.5s;
    }
    &.active .ball {
      left: 28px;
      background-color: rgb(137, 226, 85);
    }
  }
}
</style>
