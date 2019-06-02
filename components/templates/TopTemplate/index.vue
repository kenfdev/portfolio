<template>
  <div id="top-cover">
    <hello-section />
    <instructor-section />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloSection from '@/components/organisms/HelloSection/index.vue';
import InstructorSection from '@/components/organisms/InstructorSection/index.vue';

@Component({
  components: {
    HelloSection,
    InstructorSection
  }
})
export default class TopTemplate extends Vue {}
</script>

<style lang="scss" module></style>
