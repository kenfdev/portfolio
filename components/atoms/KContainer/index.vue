<template>
  <div class="container">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class KContainer extends Vue {}
</script>

<style lang="scss" module></style>
