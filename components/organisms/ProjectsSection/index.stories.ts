import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs } from '@storybook/addon-knobs';

import ProjectsSection from './index.vue';

storiesOf('organisms/ProjectsSection', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('basic', () => ({
    components: { ProjectsSection },
    template: `<projects-section />`
  }));
