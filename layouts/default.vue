<template>
  <div :class="$style.wrapper">
    <k-container>
      <nuxt />
    </k-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import KContainer from '@/components/atoms/KContainer/index.vue';

@Component({
  components: {
    KContainer
  }
})
export default class DefaultLayout extends Vue {}
</script>

<style lang="scss" module>
.wrapper {
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
}
</style>
