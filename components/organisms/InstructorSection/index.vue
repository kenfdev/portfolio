<template>
  <section>
    <k-container>
      <h2>Instructor Work</h2>
      <div :class="$style.items">
        <a
          v-for="(course, index) in courses"
          :key="index"
          :class="$style.item"
          :href="course.url"
          target="_blank"
        >
          <image-card :image="course.image">
            <span :class="$style.title">{{ course.title }}</span>
          </image-card>
        </a>
      </div>
    </k-container>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import KContainer from '@/components/atoms/KContainer/index.vue';
import ImageCard from '@/components/molecules/ImageCard/index.vue';

@Component({
  components: {
    KContainer,
    ImageCard
  }
})
export default class InstructorSection extends Vue {
  data() {
    return {
      courses: [
        {
          title:
            '【世界で2万人が受講】JavaScriptエンジニアのためのES6完全ガイド',
          image: require('~/assets/images/es6jp.png'),
          url: 'https://www.udemy.com/javascriptes6/'
        },
        {
          title: '【世界で４万人が受講】 実践！AngularJS講座',
          image: require('~/assets/images/angularjsjp.jpeg'),
          url: 'https://www.udemy.com/angularjs_ja/'
        }
      ]
    };
  }
}
</script>

<style lang="scss" module>
.items {
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  .item {
    text-decoration: none;
    display: flex;
    text-align: left;
    width: 38%;
    .title {
      font-weight: 600;
    }

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
