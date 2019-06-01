<template>
  <section id="top-cover">
    <hello-section />
  </section>
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
