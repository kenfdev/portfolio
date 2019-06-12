<template>
  <div :class="$style.repoResult">
    <div :class="$style.title">
      <ais-highlight :hit="item" attribute="title" />
    </div>
    <div :class="$style.description">
      <ais-highlight :hit="item" attribute="description" />
    </div>
    <k-repo-stats :stats="item.stats" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import KRepoStats from '@/components/atoms/KRepoStats/index.vue';

interface RepoItem {
  title: string;
  description: string;
  stats: any;
}

@Component({
  components: {
    KRepoStats
  }
})
export default class RepoResult extends Vue {
  @Prop({ type: Object, required: true }) item!: RepoItem;
}
</script>

<style lang="scss" module>
.repoResult {
  position: relative;
  margin-bottom: 1rem;
  .title {
    font-weight: 600;
    color: #000;
    text-decoration: none;
  }
  .description {
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
    color: #586069;
  }
}
</style>
