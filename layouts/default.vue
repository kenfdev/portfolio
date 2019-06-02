<template>
  <div>
    <nav-bar :class="$style.navBar" />
    <nuxt />
    <footer :class="$style.footer">
      <k-container>
        <p>Copyright © 2019, Ken Fukuyama, All Rights Reserved</p>
      </k-container>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import KContainer from '@/components/atoms/KContainer/index.vue';
import NavBar from '@/components/organisms/NavBar/index.vue';

@Component({
  components: {
    KContainer,
    NavBar
  }
})
export default class DefaultLayout extends Vue {}
</script>

<style lang="scss" module>
.navBar {
  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-between;
  z-index: 1;
  @include sm {
    position: relative;
  }
}
.footer {
  background: #333;
  color: #fff;
  text-align: center;
}
</style>
