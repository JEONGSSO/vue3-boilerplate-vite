<template>
  <section class="section_wrap">
    <p>aaaaaaaaaaaaaaaaaaaaaa</p>
    <p>bbb</p>
    <p>ccc</p>
    <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
    <p>bbb</p>
    <p>cccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</br>
    aaaaaaaaaa</br>aaaaaaaa</br>aaaaaaaaaaaa</br>aaaaaaaaaaa</p>
    <p>aaa</p>
    <p>bbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
    <p>ccc</p>
  </section>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  setup() {
    const count = ref(0);
    return {
      count
    };
  }
});
</script>

<style lang="scss" scoped>
@import './test.scss';
.section_wrap {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 200px;
  grid-gap: 1rem;
  p {
    opacity: 0.5;
    &:nth-child(odd) {
      background-color: brown;
    }
    &:nth-child(even) {
      background-color: wheat;
    }
  }
}
</style>
