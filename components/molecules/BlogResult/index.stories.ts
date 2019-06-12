import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs } from '@storybook/addon-knobs';

import BlogResult from './index.vue';

storiesOf('molecules/BlogResult', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('basic', () => ({
    components: { BlogResult },
    template: `<blog-result />`
  }));
