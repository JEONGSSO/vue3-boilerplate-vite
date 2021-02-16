<template>
  <main>
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App'
});
</script>

<style src="./assets/style/reset.css"></style>
<style lang="scss" scoped>
main {
  height: 100vh;
  background-color: lightblue;
}
</style>
