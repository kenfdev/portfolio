<template>
  <div :class="$style['k-avatar']" :style="{ height: size, width: size }">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class KAvatar extends Vue {
  @Prop({ type: String, default: '48px' }) size!: string;
}
</script>

<style lang="scss" module>
.k-avatar {
  align-items: center;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  position: relative;
  text-align: center;
  vertical-align: middle;

  img {
    border-radius: 50%;
    display: inline-flex;
    height: inherit;
    width: inherit;
  }
}
</style>
