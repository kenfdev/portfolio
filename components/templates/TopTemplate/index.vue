<template>
  <section id="top-cover">
    <profile-card />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProfileCard from '@/components/organisms/ProfileCard/index.vue';

@Component({
  components: {
    ProfileCard
  }
})
export default class TopTemplate extends Vue {}
</script>

<style lang="scss"></style>
