import Home from '@/components/Home'
import Router from 'vue-router'
import Category from '../components/category/index.vue'
import Stock from '../components/stock/index.vue'
import Saled from '../components/saled/index.vue'
import Login from '../components/Login.vue'
import UsersManage from '../components/userManage/index.vue'

// 处理elementUI 重复点击菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

const router = new Router({
	routes: [
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
		},
		{
			path: '/login',
			name: 'Login',
			component: Login
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
					title: '界面1',
					meta: { authority: true }
				},
				{
					path: '/stock',
					component: Stock,
					title: '界面2',
					meta: { authority: true }
				},
				{
					path: '/saled',
					component: Saled,
					title: '界面3',
					meta: { authority: true }
				},
				{
					path: '/usermanage',
					componet: UsersManage,
					title: '权限管理',
					meta: { authority: false }
				}
			]
		}
	]
})

// 使用 router.beforeEach 注册一个全局前置守卫, 判断用户是否登录
router.beforeEach((to, from, next) => {
	if (to.path === '/login') {
		return next()
	}
	const tokenStr = window.sessionStorage.getItem('token')
	const userinfo = JSON.parse(window.localStorage.getItem('userinfo'))
	if (!tokenStr) {
		return next('/login')
	} else {
		next()
	}

	if (userinfo.role[0] === 'admin') {
		let routers = router.options.route
		routers[0].children.forEach(item => {
			item.meta.authority = true
		})
	}
})

// 根据角色信息动态添加路由

export default router
