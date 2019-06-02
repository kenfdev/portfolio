<template>
  <header :class="$style.helloSection">
    <div :class="$style.content">
      <div :class="$style.avatar">
        <k-avatar size="118px">
          <img :src="require('~/assets/images/ken.jpg')" alt="avatar" />
        </k-avatar>
      </div>
      <div :class="$style.catch">
        <span :class="$style.primary">Ken Fukuyama</span>
        <span :class="$style.secondary">Software Engineer at CYDAS, Inc.</span>
      </div>
      <!-- <div :class="$style.externalLinks">
      <k-logo-icon icon="fa-github" url="https://github.com/kenfdev" />
      <k-logo-icon
        icon="fa-facebook-square"
        url="https://facebook.com/kenfukuyama85"
        bg-color="#3b5998"
        color="#fff"
      />
      <k-logo-icon
        icon="fa-twitter"
        url="https://twitter.com/kenfdev"
        bg-color="#55acee"
        color="#fff"
      />
      <k-logo-icon
        icon="fa-linkedin-in"
        url="https://linkedin.com/in/kenfdev"
        bg-color="#1f88be"
        color="#fff"
      />
      <k-logo-icon icon="fa-medium" url="https://medium.com/@kenfdev" />
    </div> -->
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import KAvatar from '@/components/atoms/KAvatar/index.vue';
import KLogoIcon from '@/components/atoms/KLogoIcon/index.vue';

@Component({
  components: {
    KAvatar,
    KLogoIcon
  }
})
export default class HelloSection extends Vue {}
</script>

<style lang="scss" module>
.helloSection {
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  background: #333
    url('https://images.unsplash.com/photo-1545987796-200677ee1011?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')
    no-repeat center center/cover;
  height: 100vh;
  color: #fff;

  .content {
    background-color: rgba(0, 0, 0, 0.4);
    height: 100%;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    img {
      box-shadow: inset 0 1.5px 3px 0 rgba(0, 0, 0, 0.15),
        0 1.5px 3px 0 rgba(0, 0, 0, 0.15);
    }

    .catch {
      padding: 0.8rem 0 1rem 0;
      display: inline-flex;
      flex-flow: column;
      text-align: center;
      width: 100%;
      .primary {
        font-weight: 600;
        font-size: 3rem;
      }
      .secondary {
        font-size: 1.5rem;
        color: rgba(255, 255, 255, 0.9);
      }
      p {
        padding: 0 1rem;
      }
    }
  }
}
</style>
