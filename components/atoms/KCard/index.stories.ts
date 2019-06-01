import { storiesOf } from '@storybook/vue';

import KCard from './index.vue';

storiesOf('atoms/KCard', module).add('basic', () => ({
  components: { KCard },
  template: `<k-card bg-image="https://images.unsplash.com/photo-1559311745-a57f6233488e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1717&q=80">
  HOGE
  </k-card>`
}));
