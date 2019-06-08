<template>
  <section>
    <k-container>
      <h2>Published Courses</h2>
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
// @import '~/assets/sass/variables.scss';
// @import '~/assets/sass/mixins.scss';
.items {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: normal;
  @include lg {
    flex-direction: row;
    align-items: normal;
  }
  @include sm {
    flex-direction: column;
    align-items: center;
  }
  .item {
    text-decoration: none;
    display: flex;
    text-align: left;
    width: 38%;
    margin: 1rem 0;
    @include lg {
      width: 45%;
    }
    @include sm {
      width: 60%;
    }
    @include xs {
      width: 90%;
    }
    .title {
      font-weight: 600;
    }
  }
}
</style>
