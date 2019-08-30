import Vue from 'vue'
import Router from 'vue-router'
import map from '@/pages/map'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'map',
    component: map
  }]
})
