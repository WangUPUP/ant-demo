import Home from '@/components/Home'
import Router from 'vue-router'
import Category from '../components/category/index.vue'
import Stock from '../components/stock/index.vue'
import Saled from '../components/saled/index.vue'
import Login from '../components/Login.vue'
import usersManage from '../components/userManage/index.vue'

// 处理elementUI 重复点击菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

const router = new Router({
	routes: [
		{
			path: '/login',
			name: 'Login',
			component: Login
		},
		{
			path: '/',
			name: 'Home',
			component: Home,
			redirect: '/category',
			children: [
				{
					path: '/category',
					component: Category,
					title: '界面1'
				},
				{
					path: '/stock',
					component: Stock,
					title: '界面2'
				},
				{
					path: '/saled',
					component: Saled,
					title: '界面3'
				}
			]
		}
	],
	route: [
		{
			path: '/',
			name: 'Home',
			component: Home,
			redirect: '/category',
			children: [
				{
					path: '/category',
					component: Category,
					title: '界面1'
				},
				{
					path: '/stock',
					component: Stock,
					title: '界面2'
				},
				{
					path: '/saled',
					component: Saled,
					title: '界面3'
				}
			]
		}
	]
})

export const asyncRoute = [
	{
		path: '/usersManage',
		name: 'Users',
		component: usersManage,
		meta: {
			title: '用户管理',
			icon: 'user'
		}
	}
]

// 使用 router.beforeEach 注册一个全局前置守卫, 判断用户是否登录
router.beforeEach((to, from, next) => {
	if (to.path === '/login') {
		return next()
	}
	const tokenStr = window.sessionStorage.getItem('token')
	if (!tokenStr) {
		return next('/login')
	} else {
		// console.log(userinfo.role === '0')
		next()
	}
})

// 根据角色信息动态添加路由

export default router
