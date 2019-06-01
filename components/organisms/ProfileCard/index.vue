<template>
  <section :class="$style.profileCard">
    <k-card
      :class="$style.card"
      bg-image="https://images.unsplash.com/photo-1545987796-200677ee1011?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
    >
      <div :class="$style.avatar">
        <k-avatar size="100px">
          <img :src="require('~/assets/images/ken.jpg')" alt="avatar" />
        </k-avatar>
      </div>
      <div :class="$style.catch">
        <span :class="$style.primary">Ken Fukuyama</span>
        <span :class="$style.secondary">Software Engineer at CYDAS, Inc.</span>
        <p>
          I love creating Single Page Apps with JavaScript and Backend APIs with
          Go. CI/CD tooling, automation, and container technologies are also my
          primary interests. I am always eager to learn and improve things. Born
          in the United States and moved to Japan at the age of 10. Hence, fluid
          in both English and Japanese.
        </p>
      </div>
      <div :class="$style.externalLinks">
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
      </div>
    </k-card>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import KCard from '@/components/atoms/KCard/index.vue';
import KAvatar from '@/components/atoms/KAvatar/index.vue';
import KLogoIcon from '@/components/atoms/KLogoIcon/index.vue';

@Component({
  components: {
    KCard,
    KAvatar,
    KLogoIcon
  }
})
export default class ProfileCard extends Vue {}
</script>

<style lang="scss" module>
.profileCard {
  max-width: 1024px;
  .card {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;

    .avatar {
      margin-top: -4rem;
    }
  }

  img {
    box-shadow: inset 0 1.5px 3px 0 rgba(0, 0, 0, 0.15),
      0 1.5px 3px 0 rgba(0, 0, 0, 0.15);
  }

  .catch {
    padding: 0.8rem 0 1rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    display: inline-flex;
    flex-flow: column;
    text-align: center;
    width: 100%;
    .primary {
      font-weight: 600;
    }
    .secondary {
      color: rgba(0, 0, 0, 0.6);
    }
    p {
      padding: 0 1rem;
    }
  }

  .externalLinks {
    padding-top: 1rem;
  }
}
</style>
