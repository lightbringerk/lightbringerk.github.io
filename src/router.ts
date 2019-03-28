import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Artwork from './views/Artwork.vue';
import NotFound from './views/NotFound.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/artworks/:folder',
      name: 'artworks',
      component: Artwork,
    },
    {
      path: '*',
      name: '404',
      component: NotFound,
    },
  ],
});
