<template>
  <section id="top-cover">
    <profile-card :class="$style.profileCard" />
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

<style lang="scss" module>
.profileCard {
  margin: 0 auto;
}
</style>
