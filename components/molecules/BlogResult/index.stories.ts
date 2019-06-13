import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs } from '@storybook/addon-knobs';

import BlogResult from './index.vue';

storiesOf('molecules/BlogResult', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('basic', () => ({
    components: { BlogResult },
    data() {
      return {
        item: {
          type: 'blog',
          title:
            '「k3sとラズパイでフロントエンド開発に挑戦した話」を発表しました',
          url: 'https://kenfdev.hateblo.jp/entry/2019/06/08/004145',
          published: '2019-06-08T00:41:45+09:00',
          publishedAt: 1559922105000,
          updated: '2019-06-08T00:41:45+09:00',
          updatedAt: 1559922105000,
          summary:
            '今週は2つのイベントでLTをさせていただきました！ほぼ同じ内容で登壇したので、2日連続で参加された方には申し訳なかったのですが、少し内容を変える努力はしました。。。 rancherjp.connpass.com cnjp.connpass.com 発表資料 ストーリー フロントエ…',
          tags: ['k3s', 'Slides', 'Nuxt.js', 'RaspberryPi'],
          objectID:
            'tag:blog.hatena.ne.jp,2013:blog-kenev-17680117126988374143-17680117127189347477',
          _highlightResult: {
            type: { value: 'blog', matchLevel: 'none', matchedWords: [] },
            title: {
              value:
                '「k3sとラズパイでフロントエンド開発に挑戦した話」を発表しました',
              matchLevel: 'none',
              matchedWords: []
            },
            url: {
              value: 'https://kenfdev.hateblo.jp/entry/2019/06/08/004145',
              matchLevel: 'none',
              matchedWords: []
            },
            published: {
              value: '2019-06-08T00:41:45+09:00',
              matchLevel: 'none',
              matchedWords: []
            },
            publishedAt: {
              value: '1559922105000',
              matchLevel: 'none',
              matchedWords: []
            },
            updated: {
              value: '2019-06-08T00:41:45+09:00',
              matchLevel: 'none',
              matchedWords: []
            },
            updatedAt: {
              value: '1559922105000',
              matchLevel: 'none',
              matchedWords: []
            },
            summary: {
              value:
                '今週は2つのイベントでLTをさせていただきました！ほぼ同じ内容で登壇したので、2日連続で参加された方には申し訳なかったのですが、少し内容を変える努力はしました。。。 rancherjp.connpass.com cnjp.connpass.com 発表資料 ストーリー フロントエ…',
              matchLevel: 'none',
              matchedWords: []
            },
            tags: [
              { value: 'k3s', matchLevel: 'none', matchedWords: [] },
              { value: 'Slides', matchLevel: 'none', matchedWords: [] },
              { value: 'Nuxt.js', matchLevel: 'none', matchedWords: [] },
              { value: 'RaspberryPi', matchLevel: 'none', matchedWords: [] }
            ]
          }
        }
      };
    },
    template: `<blog-result :item="item" />`
  }));
