<template>
  <section>
    <k-container>
      <h2>Instructor</h2>
    </k-container>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import KContainer from '@/components/atoms/KContainer/index.vue';

@Component({
  components: {
    KContainer
  }
})
export default class InstructorSection extends Vue {}
</script>

<style lang="scss" module></style>
