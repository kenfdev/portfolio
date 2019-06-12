<template>
  <div :class="$style.slideResult">
    <div :class="$style.thumbnail">
      <img :src="item.thumbnail" alt="" />
    </div>
    <div :class="$style.detail">
      <div :class="$style.title">
        <ais-highlight :hit="item" attribute="title" />
      </div>
      <p :class="$style.publishedDate">
        {{ formatDateTime(item.publishedDate) }}
      </p>
      <p :class="$style.description">
        <ais-highlight :hit="item" attribute="description" />
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { formatToTimeZone } from 'date-fns-timezone';

interface SlideItem {
  thumbnail: string;
  title: string;
  publishedDate: string;
  description: string;
}

@Component
export default class SlideResult extends Vue {
  @Prop({ type: Object, required: true }) item!: SlideItem;
  formatDateTime(dateTimeString: string) {
    const date = new Date(dateTimeString);
    return formatToTimeZone(date, 'YYYY-MM-DD', { timeZone: 'Asia/Tokyo' });
  }
}
</script>

<style lang="scss" module>
.slideResult {
  display: grid;
  grid-template-columns: 2fr 5fr;
  grid-column-gap: 10px;
  grid-row-gap: 15px;
  .thumbnail {
    display: flex;
    align-items: center;
    img {
      width: 100%;
      height: auto;
    }
  }
  .title {
    color: #000;
    font-size: 1rem;
    margin-bottom: 0.25rem;
    font-weight: bold;
  }
  .detail {
    color: #9e9e9e;
    font-size: 0.9rem;
    margin-bottom: 0;
    margin-top: 0.25rem;
    .description {
      white-space: pre-wrap;
    }
  }
}
</style>
