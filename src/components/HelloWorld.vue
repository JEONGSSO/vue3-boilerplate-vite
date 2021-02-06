<template>
  <section>
    HelloWorld
    <p @click="++count">{{ count }}</p>
  </section>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  setup() {
    const count = ref(0);
    return {
      count,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./test.scss";
section {
  background-color: $var;
  div {
    font-size: 20px;
  }
}
</style>
