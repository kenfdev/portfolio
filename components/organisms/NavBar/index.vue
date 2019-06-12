<template>
  <nav class="navBar" :class="$style.navBar">
    <h1 :class="$style.name">Ken Fukuyama</h1>
    <div :class="$style.container">
      <search-bar />
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBarMenu from '@/components/molecules/NavBarMenu/index.vue';
import SearchBar from '@/components/organisms/SearchBar/index.vue';

@Component({
  components: {
    NavBarMenu,
    SearchBar
  }
})
export default class NavBar extends Vue {}
</script>

<style lang="scss" module>
.navBar {
  background: #333;
  color: #fff;
  padding: 1rem;
  .name {
    @include sm {
      display: none;
    }
  }
  .container {
    flex: 1 1 auto;
    margin: 0 2rem;
  }
}
</style>
