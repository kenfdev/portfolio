import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs } from '@storybook/addon-knobs';

import ProfileCard from './index.vue';

storiesOf('organisms/ProfileCard', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('basic', () => ({
    components: { ProfileCard },
    template: `<profile-card />`
  }));
