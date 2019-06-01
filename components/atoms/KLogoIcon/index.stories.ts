import { storiesOf } from '@storybook/vue';

import KLogoIcon from './index.vue';

storiesOf('atoms/KLogoIcon', module).add('basic', () => ({
  components: { KLogoIcon },
  template: `<k-logo-icon icon="fa-github" url="https://github.com/kenfdev" />`
}));
