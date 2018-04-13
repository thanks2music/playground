// Vue
import Vue from 'vue/dist/vue.esm.js';
import Loading from './vue/loading.vue';
import ProgressBar from './vue/progressBar.vue';
// Style
import './assets/stylesheets/app.styl';

const app = new Vue({
  el: '#app',
  components: {
    Loading,
    ProgressBar
  },
});
