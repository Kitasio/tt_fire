import { createRouter, createWebHistory } from 'vue-router'

import Portfolio from './views/Portfolio.vue'
import About from './views/About.vue'
import Home from './views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: Portfolio,
    },
    {
        path: '/about',
        name: 'about',
        component: About,
    },
    // {
    //     path: '/:catchAll(.*)*',
    //     name: 'NotFound',
    //     component: NotFound,
    // },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router