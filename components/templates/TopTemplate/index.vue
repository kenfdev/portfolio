<template>
  <div id="top-cover">
    <hello-section />
    <projects-section />
    <instructor-section />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloSection from '@/components/organisms/HelloSection/index.vue';
import ProjectsSection from '@/components/organisms/ProjectsSection/index.vue';
import InstructorSection from '@/components/organisms/InstructorSection/index.vue';

@Component({
  components: {
    HelloSection,
    ProjectsSection,
    InstructorSection
  }
})
export default class TopTemplate extends Vue {}
</script>

<style lang="scss" module></style>
