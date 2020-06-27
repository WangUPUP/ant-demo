// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import routes from './router'
import router from './router/index'
import VueRouter from 'vue-router'
import '@/assets/css/global.css'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import store from './store'

import axios from 'axios'
Vue.prototype.$axios = axios

require('./mock')

Vue.use(Antd)
Vue.use(VueRouter)
Vue.config.productionTip = false

/* eslint-disable no-new */
// const router = new VueRouter({
// 	routes
// })
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
