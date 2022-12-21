import Vue, { h } from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import generatedRoutes from '~pages';

export const router = new Router({
  mode: 'history',
  routes: generatedRoutes,
});

export const app = new Vue({ router, render: () => h(App) });

app.$mount('#app');
