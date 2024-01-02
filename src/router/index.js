import {createRouter , createWebHistory} from 'vue-router'
import layoutDefault from '/src/layouts/default.vue'
import Home from '/src/pages/Home.vue'

const routes = [
    {
        path : '/',
        name : 'default',
        component : layoutDefault,
        redirect : '/',
        children : [
            {
                path : '/',
                name : 'Home',
                component : Home

            }
        ]
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes 
})

export default router