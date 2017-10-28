// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { sync } from 'vuex-router-sync';
import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';

import App from './App';
import routes from './router';
import VuexStore from './vuex/store';

import('../node_modules/vuetify/dist/vuetify.min.js');
import('../node_modules/vuetify/dist/vuetify.min.css');

Vue.use(Vuex);
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Vuetify);


Vue.http.options.root = process.env.SERVER;

const store = new Vuex.Store(VuexStore);
const router = new VueRouter({
  routes,
});

sync(store, router);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
