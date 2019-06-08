import { storiesOf } from '@storybook/vue';

import KRepoStats from './index.vue';

storiesOf('atoms/KRepoStats', module).add('basic', () => ({
  components: { KRepoStats },
  data() {
    return {
      stats: {
        language: 'Shell',
        stars: 40,
        forks: 3
      }
    };
  },
  template: `<k-repo-stats :stats="stats" />`
}));
