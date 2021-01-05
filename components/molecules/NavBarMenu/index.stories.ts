import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs } from '@storybook/addon-knobs';

import NavBarMenu from './index.vue';

storiesOf('molecules/NavBarMenu', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('basic', () => ({
    components: { NavBarMenu },
    template: `<nav-bar-menu />`
  }));