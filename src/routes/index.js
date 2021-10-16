import {createRouter, createWebHashHistory} from 'vue-router'
import Home from './Home'
import Movie from './Movie'
import About from './About'
import NotFound from './NotFound'


export default createRouter({
  // hash : /#/ , history
  history: createWebHashHistory(),
  //pages
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/movie/:id',
      component: Movie,
    },
    {
      path: '/about',
      component: About,
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
});