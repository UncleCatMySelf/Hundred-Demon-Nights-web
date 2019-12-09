import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Technology from './pages/technology'

Vue.use(Router);
export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/technology',
            name: 'technology',
            component: Technology
        }
    ]
})