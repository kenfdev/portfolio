<template>
  <a :class="$style.logoIcon" :href="url" :style="style" target="_blank">
    <i class="fab" :class="icon" />
  </a>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class KLogoIcon extends Vue {
  @Prop({ type: String, required: true }) url!: string;
  @Prop({ type: String, required: true }) icon!: string;
  @Prop({ type: String, default: '#e0e1e2' }) bgColor!: string;
  @Prop({ type: String, default: 'black' }) color!: string;

  get style() {
    return { 'background-color': this.bgColor, color: this.color };
  }
}
</script>

<style lang="scss" module>
.logoIcon {
  font-size: 1.4rem;
  color: black;
  padding: 0.78em 0.78em 0.78em;
  line-height: 1;
  border-radius: 10em;
  display: inline-block;
}
</style>
