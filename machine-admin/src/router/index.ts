import {RouteRecordRaw,createRouter,createWebHistory} from 'vue-router'
import Main from './../views/main/index.vue'

const layout = {template:'<div><div>'}
const routes = [
    {
        path: '/',
        redirect: '/main',
        component:layout
    },
    {
        path: '/main',
        component: Main
    }
] 

export default createRouter({
    routes,
    history:createWebHistory(),
})