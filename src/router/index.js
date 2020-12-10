import Home from '_pages/home/index';
import List from '_pages/list/index';

export default {
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/list',
            name: 'list',
            component: List,
        },
    ],
};
