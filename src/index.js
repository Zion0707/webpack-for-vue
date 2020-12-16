import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '_pages/app';
import router from './router';
import '_less/index.less';

Vue.use(VueRouter);

new Vue({
    render: h => h(App),
    router: new VueRouter(router),
}).$mount('#root');
