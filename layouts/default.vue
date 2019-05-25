<template>
  <k-container>
    <nuxt />
  </k-container>
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
