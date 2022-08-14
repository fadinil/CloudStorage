import { createRouter, createWebHistory } from 'vue-router'
import homePage from '@/pages/homePage'
import authPage from '@/pages/authPage'

const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/auth',
        component: authPage
        
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
