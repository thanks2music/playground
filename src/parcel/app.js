import Vue from 'vue/dist/vue.esm.js';
import Docs from '../vue/docs.vue'
import './app.styl';

const app = new Vue(Docs);
app.$mount('#app');
