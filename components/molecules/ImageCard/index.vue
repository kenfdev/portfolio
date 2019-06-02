<template>
  <k-card :bg-image="image">
    <slot />
  </k-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import KCard from '@/components/atoms/KCard/index.vue';

@Component({
  components: {
    KCard
  }
})
export default class ImageCard extends Vue {
  @Prop({ type: String, required: true }) image!: string;
}
</script>

<style lang="scss" module>
.imageCard {
  display: flex;
  align-items: center;
  list-style: none;
}
</style>
