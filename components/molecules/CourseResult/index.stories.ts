import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs } from '@storybook/addon-knobs';

import CourseResult from './index.vue';

storiesOf('molecules/CourseResult', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('basic', () => ({
    components: { CourseResult },
    template: `<course-result />`
  }));
