<template>
  <div :class="$style.repoStats">
    <span style="margin-right: 1rem;">
      <span :class="$style.languageColor" :style="languageColor" />
      <span>{{ stats.language }}</span>
    </span>
    <span><i class="fas fa-star" />{{ stats.stars }}</span>
    <span style="margin-left: 1rem;"
      ><i class="fas fa-code-branch" />{{ stats.forks }}</span
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

export interface KRepoStatsData {
  language: 'Go' | 'JavaScript' | 'HCL' | 'Shell';
  stars: number;
  forks: number;
}

@Component
export default class KRepoStats extends Vue {
  @Prop({ type: Object, required: true }) stats!: KRepoStatsData;

  get languageColor() {
    let bgColor = '';
    switch (this.stats.language) {
      case 'Go':
        bgColor = '#00add8';
        break;
      case 'Shell':
        bgColor = '#89e051';
        break;
      case 'JavaScript':
        bgColor = '#f1e05a';
        break;
      default:
        bgColor = '#ccc';
        break;
    }
    return {
      'background-color': bgColor
    };
  }
}
</script>

<style lang="scss" module>
.repoStats {
  .languageColor {
    background-color: #00add8;
    border-radius: 50%;
    display: inline-block;
    height: 12px;
    position: relative;
    top: 1px;
    width: 12px;
  }
  i {
    color: #586069;
  }
}
</style>
