import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs } from '@storybook/addon-knobs';

import RepositoryCard from './index.vue';

storiesOf('molecules/RepositoryCard', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('basic', () => ({
    components: { RepositoryCard },
    data() {
      return {
        item: {
          title: 'faas-rancher',
          url: 'https://github.com/kenfdev/faas-rancher',
          description:
            '[DEPRECATED] Enable Rancher as a backend for Functions as a Service (OpenFaaS) https://github.com/alexellis/faas',
          stats: {
            language: 'Go',
            stars: 29,
            forks: 1
          }
        }
      };
    },
    template: `<repository-card :item="item" />`
  }));
