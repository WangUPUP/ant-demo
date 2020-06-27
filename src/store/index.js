import Vue from 'vue'
import Vuex from 'vuex'

// 挂载Vuex
Vue.use(Vuex)

// 创建VueX对象
const store = new Vuex.Store({
	state: {
		// 存放的键值对就是所要管理的状态
		name: 'helloVueX'
	},
	mutations: {
		edit(state, playload) {
			state.name = 'jack'
			Vue.set(state, 'age', 15)
			console.log(playload)
		}
	},
	getters: {
		nameInfo(state) {
			return '姓名' + state.name
		},
		fullInfo(state, getters) {
			return getters.nameInfo + '年龄' + state.age
		}
	},
	actions: {
		aEdit(context, playload) {
			// setTimeout(() => {
			// 	context.commit('edit', playload)
			// }, 2000)

			// 封装成promise对象
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					context.commit('edit', playload)
					resolve()
				}, 2000)
			})
		}
	}
})

export default store
