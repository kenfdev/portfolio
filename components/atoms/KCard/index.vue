<template>
  <div :class="$style.card">
    <div :class="$style.image">
      <img v-if="bgImage" :src="bgImage" />
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
}
</script>

<style lang="scss" module>
.card {
  display: inline-block;
  background-color: #fff;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  color: #4a4a4a;
  max-width: 100%;
  position: relative;
  display: flex;
  flex-flow: column;
  .image {
    position: relative;
    width: 100%;
    overflow: hidden;
    img {
      width: 100%;
      height: 230px;
    }
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
    padding: 1.5rem 1rem;
  }
}
</style>
