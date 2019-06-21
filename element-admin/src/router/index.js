import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import {login}  from 'pages/'
// import {login}  from '/pages/login'

const routes = [
    {
        path: '/',
        name: '登录',
        component: login
    }

]

export default new Router({
    routes
})