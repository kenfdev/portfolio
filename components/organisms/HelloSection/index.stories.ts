import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs } from '@storybook/addon-knobs';

import HelloSection from './index.vue';

storiesOf('organisms/HelloSection', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('basic', () => ({
    components: { HelloSection },
    template: `<hello-section />`
  }));
