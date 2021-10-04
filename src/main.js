import Vue from 'vue';
import { ethers } from 'ethers';
import Vuelidate from "vuelidate";
import vToolTip from 'v-tooltip';

import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
