import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs } from '@storybook/addon-knobs';

import SlideResult from './index.vue';

storiesOf('molecules/SlideResult', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('basic', () => ({
    components: { SlideResult },
    template: `<slide-result />`
  }));
