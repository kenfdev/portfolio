<template>
  <div :class="$style.container">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class KContainer extends Vue {}
</script>

<style lang="scss" module>
.container {
  max-width: 1100px;
  margin: auto;
  padding: 0 2rem;
  overflow: hidden;
}
</style>
