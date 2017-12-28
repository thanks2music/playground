// Vue
import Vue from 'vue/dist/vue.esm.js';
import Loading from './vue/loading.vue';
import ProgressBar from './vue/progressBar.vue';
import './main.scss';
const app = new Vue({
  el: '#app',
  components: {
    Loading,
    ProgressBar
  },
});
