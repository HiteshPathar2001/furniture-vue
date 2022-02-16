import Vue from 'vue'
import createVue from 'vue-router'
import Home from './components/Home'
import blogcontent from "./components/pages/blogcontent";

Vue.use(createVue);

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/blogcontent',
        component:  blogcontent 
    }
]

const router = new createVue({
    routes,
    mode:'history'
})

export default router
