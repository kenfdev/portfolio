<template>
  <div id="top-cover">
    <hello-section />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloSection from '@/components/organisms/HelloSection/index.vue';

@Component({
  components: {
    HelloSection
  }
})
export default class TopTemplate extends Vue {}
</script>

<style lang="scss">
body,
h1 {
  margin: 0;
  padding: 0;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}
</style>
