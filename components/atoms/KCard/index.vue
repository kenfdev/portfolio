<template>
  <div :class="$style.card">
    <div :class="$style.image">
      <div v-if="bgImage" :class="$style.bgImage" :style="bgImageStyle" />
    </div>
    <div :class="$style.content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class KCard extends Vue {
  @Prop({ type: String }) bgImage!: string;
  get bgImageStyle() {
    return { 'background-image': `url(${this.bgImage})` };
  }
}
</script>

<style lang="scss" module>
.card {
  background-color: #fff;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  color: #4a4a4a;
  max-width: 100%;
  position: relative;
  .image {
    position: relative;
    width: 100%;
  }

  .bgImage {
    display: block;
    height: 4rem;
    background-position: center;
  }

  .content {
    display: flex;
    flex-flow: column;
    align-items: center;
    background-color: transparent;
    width: 100%;
    padding: 1.5rem 0;
  }
}
</style>
