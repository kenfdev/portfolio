import { configure } from '@storybook/vue';

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const req = require.context('../.', true, /\.stories\.ts$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
