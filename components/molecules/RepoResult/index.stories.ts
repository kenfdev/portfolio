import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs } from '@storybook/addon-knobs';

import RepoResult from './index.vue';

storiesOf('molecules/RepoResult', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('basic', () => ({
    components: { RepoResult },
    data() {
      return {
        item: {
          type: 'repository',
          title: 'remo-exporter',
          url: 'https://github.com/kenfdev/remo-exporter',
          description: 'Prometheus Nature Remo Exporter',
          stats: { language: 'Go', stars: 3, forks: 1 },
          objectID: '132569661',
          _highlightResult: {
            type: {
              value: '<mark>repo</mark>sitory',
              matchLevel: 'full',
              fullyHighlighted: false,
              matchedWords: ['repo']
            },
            title: {
              value: 'remo-exporter',
              matchLevel: 'none',
              matchedWords: []
            },
            url: {
              value: 'https://github.com/kenfdev/remo-exporter',
              matchLevel: 'none',
              matchedWords: []
            },
            description: {
              value: 'Prometheus Nature Remo Exporter',
              matchLevel: 'none',
              matchedWords: []
            },
            stats: {
              language: { value: 'Go', matchLevel: 'none', matchedWords: [] },
              stars: { value: '3', matchLevel: 'none', matchedWords: [] },
              forks: { value: '1', matchLevel: 'none', matchedWords: [] }
            }
          }
        }
      };
    },
    template: `<repo-result :item="item" />`
  }));
