import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs } from '@storybook/addon-knobs';

import ImageCard from './index.vue';

storiesOf('molecules/ImageCard', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('basic', () => ({
    components: { ImageCard },
    template: `<image-card />`
  }));
