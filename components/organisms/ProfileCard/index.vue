<template>
  <section class="profile-card level">
    <k-avatar class="level-item" size="100px">
      <img src="~/assets/images/ken.jpg" alt="avatar" />
    </k-avatar>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import KAvatar from '@/components/atoms/KAvatar/index.vue';

@Component({
  components: {
    KAvatar
  }
})
export default class ProfileCard extends Vue {}
</script>

<style lang="scss"></style>
