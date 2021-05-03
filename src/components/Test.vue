<template>
  <button @click="save">굿구루</button>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const save = function () {
      this.$emit('save', { a: 1 });
    };

    return {
      save
    };
  }
});
</script>
