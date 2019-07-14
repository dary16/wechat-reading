import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/icons/icon.css';
import './assets/css/reset.css';
// import './assets/css/global.scss';
// import './assets/css/mixin.scss';
import components from './components';

Vue.config.productionTip = false;

// 自定义组件格式，全局可用
Object.keys(components).forEach((key) => {
    // 首字母大写
    var name = key.replace(/(\w)/, (v) => v.toUpperCase());

    //使用标签时前缀需要加 g- 以示区别
    Vue.component(`v${name}`, components[key]);
});

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app');
