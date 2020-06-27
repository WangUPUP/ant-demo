import axios from 'axios'

// 请求拦截器
axios.interceptors.request.use(config => {
	// console.log(config)
	config.headers['Authorization'] = '123456'
})
