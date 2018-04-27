import Vue from 'vue';
import Router from "vue-router";
import Post from "@/components/Post";
import Home from "@/components/home";

Vue.use(Router)
export default new Router({
    routes:[    
        {
            path:'/',
            component:Home
        },
        {
            path: '/post/:id',
            component: Post
        }
    ],
    mode: 'history',
})







