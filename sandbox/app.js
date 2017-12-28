// Vue
import Vue from 'vue/dist/vue.esm.js';
import Loading from './vue/loading.vue';
import ProgressBar from './vue/progressBar.vue';
const app = new Vue({
  el: '#app',
  components: {
    Loading,
    ProgressBar
  },
});
