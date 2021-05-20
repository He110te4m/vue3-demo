<template>
  <p class="test">
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/"
      target="_blank">VSCode</a>
    +
    <a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
      target="_blank">
      Vetur
    </a>
    or
    <a href="https://github.com/johnsoncodehk/volar"
      target="_blank">Volar</a>
    (if using
    <code>&lt;script setup&gt;</code>)
  </p>

  <a-button type="primary"
    size="large"
    @click="count++">
    count is: {{ count }}
  </a-button>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
export default defineComponent({
    name: 'HelloWorld',
    setup: () => {
        const count = ref(0);
        return { count };
    }
});
</script>

<style lang="less" scoped>
a {
    color: #42b983;
}

p {
    &.test {
        color: #ddd;
    }
}

label {
    margin: 0 0.5em;
    font-weight: bold;
}

code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
}
</style>
