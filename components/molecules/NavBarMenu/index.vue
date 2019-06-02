<template>
  <ul :class="$style.navbarMenu">
    <li v-for="(item, index) in items" :key="index">
      {{ item.name }}
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class NavBarMenu extends Vue {
  @Prop({ type: Array }) items!: any[];
}
</script>

<style lang="scss" module>
.navbarMenu {
  display: flex;
  align-items: center;
  list-style: none;
}
</style>
