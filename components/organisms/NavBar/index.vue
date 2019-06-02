<template>
  <nav :class="$style.navBar">
    <h1>Ken Fukuyama</h1>
    <nav-bar-menu :items="[]" />
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBarMenu from '@/components/molecules/NavBarMenu/index.vue';

@Component({
  components: {
    NavBarMenu
  }
})
export default class NavBar extends Vue {}
</script>

<style lang="scss" module>
.navBar {
  background: #333;
  color: #fff;
  padding: 1rem;
}
</style>
