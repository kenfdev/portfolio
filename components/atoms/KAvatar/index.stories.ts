import { storiesOf } from '@storybook/vue';

import KAvatar from './index.vue';

import Image from '~/assets/images/ken.jpg';

storiesOf('atoms/KAvatar', module).add('basic', () => ({
  components: { KAvatar },
  template: `<k-avatar size="100px">
      <img src="${Image}" alt="avatar" />
     </k-avatar>`
}));
