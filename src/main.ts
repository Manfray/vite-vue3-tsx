import { createApp } from 'vue'
import App from './App'
import router from '@/router'
import store from '@/store'

// 引入ant-design-vue
import antDesignVue from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';

createApp(App).use(antDesignVue).use(router).use(store).mount('#app')
