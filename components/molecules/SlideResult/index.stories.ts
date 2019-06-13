import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs } from '@storybook/addon-knobs';

import SlideResult from './index.vue';

storiesOf('molecules/SlideResult', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('basic', () => ({
    components: { SlideResult },
    data() {
      return {
        item: {
          type: 'slide',
          title: 'OpenFaaSとは',
          thumbnail:
            'https://speakerd.s3.amazonaws.com/presentations/2a6a0d431c044dcd9253f619be82cc39/preview_slide_0.jpg',
          url: 'https://speakerdeck.com/kenfdev/openfaastoha',
          publishedDate: '2017-10-18',
          description:
            'Serverless FrameworkなOpenFaaS\nその概要について説明します。\n※Serverless Meetup Osaka #4 のLTにて講演した内容です',
          objectID: '132569761',
          _highlightResult: {
            type: {
              value: '<mark>slide</mark>',
              matchLevel: 'full',
              fullyHighlighted: true,
              matchedWords: ['slide']
            },
            title: {
              value: 'OpenFaaSとは',
              matchLevel: 'none',
              matchedWords: []
            },
            thumbnail: {
              value:
                'https://speakerd.s3.amazonaws.com/presentations/2a6a0d431c044dcd9253f619be82cc39/preview_<mark>slide</mark>_0.jpg',
              matchLevel: 'full',
              fullyHighlighted: false,
              matchedWords: ['slide']
            },
            url: {
              value: 'https://speakerdeck.com/kenfdev/openfaastoha',
              matchLevel: 'none',
              matchedWords: []
            },
            publishedDate: {
              value: '2017-10-18',
              matchLevel: 'none',
              matchedWords: []
            },
            description: {
              value:
                'Serverless FrameworkなOpenFaaS\nその概要について説明します。\n※Serverless Meetup Osaka #4 のLTにて講演した内容です',
              matchLevel: 'none',
              matchedWords: []
            }
          }
        }
      };
    },
    template: `<slide-result :item="item" />`
  }));
