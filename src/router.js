import { createRouter, createWebHistory } from 'vue-router'

import Portfolio from './views/Portfolio.vue'
import About from './views/About.vue'
import Home from './views/Home.vue'
import Project from './views/Project.vue'

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
        meta: { transition: 'fade' },
    },
    {
        path: '/about',
        name: 'about',
        component: About,
        meta: { transition: 'abo' },
    },
    {
        path: '/portfolio/:id',
        name: 'project',
        component: Project,
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