import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs } from '@storybook/addon-knobs';

import RepoResult from './index.vue';

storiesOf('molecules/RepoResult', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('basic', () => ({
    components: { RepoResult },
    template: `<repo-result />`
  }));
