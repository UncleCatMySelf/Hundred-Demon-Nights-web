import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'

Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
Vue.use(VueAxios, axios);
//提示开关
Vue.config.productionTip = true

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')