export default {
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: resolve => require(['_pages/home/index'], resolve),
        },
        {
            path: '/list/list',
            name: 'list',
            component: resolve => require(['_pages/list/index'], resolve),
        },
    ],
};
