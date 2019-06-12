import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs } from '@storybook/addon-knobs';

import SearchBar from './index.vue';

storiesOf('organisms/SearchBar', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('basic', () => ({
    components: { SearchBar },
    template: `<search-bar />`
  }));
