<template>
  <div :class="$style.blogResult">
    <div :class="$style.title">
      <ais-highlight :hit="item" attribute="title" />
    </div>

    {{ formatDateTime(item.updated) }}
    <div :class="$style.summary">
      <ais-highlight :hit="item" attribute="summary" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { formatToTimeZone } from 'date-fns-timezone';

interface BlogItem {
  title: string;
  summary: string;
  updated: string;
}

@Component
export default class BlogResult extends Vue {
  @Prop({ type: Object, required: true }) item!: BlogItem;
  formatDateTime(dateTimeString: string) {
    const date = new Date(dateTimeString);
    return formatToTimeZone(date, 'YYYY-MM-DD', { timeZone: 'Asia/Tokyo' });
  }
}
</script>

<style lang="scss" module>
.blogResult {
  .title {
    color: #000;
    font-size: 1rem;
    margin-bottom: 0.25rem;
    font-weight: bold;
  }
  .summary {
    color: #9e9e9e;
    font-size: 0.9rem;
    margin-bottom: 0;
    margin-top: 0.25rem;
  }
}
</style>
