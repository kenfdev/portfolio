<template>
  <nav :class="$style.navBar">
    <h1>Ken Fukuyama</h1>
    <nav-bar-menu :items="[{ name: 'Home' }]" />
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
  display: flex;
  position: sticky;
  top: 0;
  background: #333;
  color: #fff;
  justify-content: space-between;
  z-index: 1;
  padding: 1rem;
}
</style>
