import { storiesOf } from '@storybook/vue';

import TopTemplate from './index.vue';

storiesOf('templates/TopTemplate', module).add('basic', () => ({
  components: { TopTemplate },
  template: `<top-template />`
}));
