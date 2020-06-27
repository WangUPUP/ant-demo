// 引入mockjs
const Mock = require('mockjs')
// const qs = require('qs')
// 获取 mock.Random 对象
// const Random = Mock.Random

// 登录
const login = function(params) {
	let loginData = JSON.parse(params.body)
	let status = false // 登录状态：ture--成功，false--失败
	// let token = '99999'
	if (loginData.username === 'admin' && loginData.password === '123456') {
		status = true
	}
	let userinfo = {
		username: 'superadmin',
		password: '123456',
		role: '0' // 超级管理员
	}
	return {
		status: status,
		userinfo: userinfo
	}
}

// 获取角色信息
// cosnt getUserData = params => {

// }

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/mk_login', 'post', login) // 登录
