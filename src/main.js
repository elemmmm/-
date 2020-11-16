import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'
import { Popup } from 'mint-ui';
Vue.component(Popup.name, Popup);
//导入头部组件
import header from './components/header';
import footer from './components/footer'
//导入底部组件
//导入MintUI的所有组件
import MintUI from 'mint-ui';

//导入MintUI的样式文件
import 'mint-ui/lib/style.min.css';
import '../public/styles/weui.css'

//通过Vue.use()方法将Mint UI注册为Vue的插件
Vue.use(MintUI);
//将header footer变为全局组件
Vue.component('headerTop',header)
Vue.component('footerBtm',footer)
axios.defaults.baseURL = 'http://127.0.0.1'
Vue.prototype.axios = axios;
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')