import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs } from '@storybook/addon-knobs';

import CourseResult from './index.vue';

storiesOf('molecules/CourseResult', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('basic', () => ({
    components: { CourseResult },
    data() {
      return {
        item: {
          type: 'course',
          title:
            '【世界で2万人が受講】JavaScriptエンジニアのためのES6完全ガイド',
          image: 'https://i.udemycdn.com/course/240x135/1622006_d42c_4.jpg',
          url: 'https://www.udemy.com/javascriptes6/',
          description:
            '述べ24万人の受講生を抱えるStephen Grider氏による大人気コースの完全日本語版。JSのメソッドのforEach、map、reduce、ES6で新しく登場した関数のデフォルト値やクラス、改善されたオブジェクトリテラルについて学ぶ。',
          objectID: '132569591',
          _highlightResult: {
            type: {
              value: '<mark>course</mark>',
              matchLevel: 'full',
              fullyHighlighted: true,
              matchedWords: ['course']
            },
            title: {
              value:
                '【世界で2万人が受講】JavaScriptエンジニアのためのES6完全ガイド',
              matchLevel: 'none',
              matchedWords: []
            },
            image: {
              value:
                'https://i.udemycdn.com/<mark>course</mark>/240x135/1622006_d42c_4.jpg',
              matchLevel: 'full',
              fullyHighlighted: false,
              matchedWords: ['course']
            },
            url: {
              value: 'https://www.udemy.com/javascriptes6/',
              matchLevel: 'none',
              matchedWords: []
            },
            description: {
              value:
                '述べ24万人の受講生を抱えるStephen Grider氏による大人気コースの完全日本語版。JSのメソッドのforEach、map、reduce、ES6で新しく登場した関数のデフォルト値やクラス、改善されたオブジェクトリテラルについて学ぶ。',
              matchLevel: 'none',
              matchedWords: []
            }
          }
        }
      };
    },
    template: `<course-result :item="item" />`
  }));
