import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs } from '@storybook/addon-knobs';

import InstructorSection from './index.vue';

storiesOf('organisms/InstructorSection', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('basic', () => ({
    components: { InstructorSection },
    template: `<instructor-section />`
  }));
