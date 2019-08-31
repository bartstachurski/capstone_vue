import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Friends from './views/Friends.vue';
import BreweryShow from './views/BreweriesShow.vue';
import SavedBreweries from './views/SavedBreweries.vue';
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import Groups from "./views/Groups.vue";
import GroupsShow from "./views/GroupsShow.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/groups',
      name: 'groups',
      component: Groups
    },
    {
      path: '/groups/:id',
      name: 'groups-show',
      component: GroupsShow
    },
    {
      path: '/breweries/:id',
      name: 'breweries-show',
      component: BreweryShow
    },
    {
      path: '/friends',
      name: 'friends',
      component: Friends
    },
    {
      path: '/saved_breweries',
      name: 'saved-breweries',
      component: SavedBreweries
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
});
