<template>
  <div :class="$style.repositoryCard">
    <div :class="$style.title">
      <a :href="item.url" target="_blank">{{ item.title }}</a>
    </div>
    <div :class="$style.description">
      {{ item.description }}
    </div>
    <k-repo-stats :class="$style.repoStats" :stats="item.stats" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import KRepoStats from '@/components/atoms/KRepoStats/index.vue';

interface RepositoryCardItem {
  title: string;
  url: string;
  description: string;
  stats: {
    language: string;
    stars: number;
    forks: number;
  };
}

@Component({
  components: {
    KRepoStats
  }
})
export default class RepositoryCard extends Vue {
  @Prop({ type: Object, required: true }) item!: RepositoryCardItem;
}
</script>

<style lang="scss" module>
.repositoryCard {
  position: relative;
  padding: 1rem;
  margin-bottom: 1rem;
  border-color: #d1d5da;
  border-radius: 3px;
  border: 1px solid #e1e4e8;
  .title a {
    font-weight: 600;
    color: #0366d6;
    text-decoration: none;
  }
  .description {
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
    color: #586069;
  }
  .repoStats {
    position: absolute;
    bottom: 0.5rem;
  }
}
</style>
