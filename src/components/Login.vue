<template>
	<section>
		<a-card>
			<a-row class="title"><h1>欢迎,请登录</h1></a-row>
			<a-row>
				<a-form
					ref="loginForm"
					:model="loginFrom"
					label-width="80px"
					:rules="loginRules"
					:label-col="{ span: 5 }"
					:wrapper-col="{ span: 12 }"
					style="margin-top:50px"
				>
					<a-form-item label="账号" prop="username">
						<a-input v-model="loginFrom.username">
							<a-icon slot="prefix" type="user" />
						</a-input>
					</a-form-item>
					<a-form-item label="密码" prop="password">
						<a-input v-model="loginFrom.password">
							<a-icon slot="prefix" type="lock" />
						</a-input>
					</a-form-item>
				</a-form>
			</a-row>
			<a-row type="flex" justify="end">
				<a-col :span="4">
					<a-button @click="login" type="primary">登录</a-button>
				</a-col>
				<a-col :span="4">
					<a-button @click="restLoginForm('loginForm')" type="primary">重置</a-button>
				</a-col>
			</a-row>
		</a-card>
	</section>
</template>

<script>
import { loginApi } from '../api/loginApi'
// import { asyncRoute } from '../router/index'

export default {
	data() {
		return {
			loading: false,
			loginFrom: {
				username: '',
				password: ''
			},
			loginRules: {
				username: [
					{ required: true, message: '请输入账号', trigger: 'blur' },
					{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
				],
				password: [
					{ required: true, message: '请输入密码', trigger: 'blur' },
					{ min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' }
				]
			}
		}
	},
	methods: {
		login() {
			let params = Object.assign({}, this.loginFrom)
			loginApi(params)
				.then(res => {
					// console.log(res)
					if (res.data.status) {
						// 登录成功
						window.sessionStorage.setItem('token', res.data.status)
						window.localStorage.setItem('userinfo', JSON.stringify(res.data.userinfo))
						this.$router.replace('/category')
					}
				})
				.catch(error => {
					console.log('login异常：')
					console.log(error)
				})
		},

		restLoginForm(formName) {
			// 	if (this.$refs[formName] !== undefined) {
			// 		this.$refs[formName].resetFields()
			// 	}
			// 	window.sessionStorage.clear()
		}
	},
	created() {
		// const userinfo = JSON.parse(window.localStorage.getItem('userinfo'))
		// if (userinfo.role === '0') {
		// 	console.log(this.$router)
		// 	this.$router.options.route.concat(asyncRoute)
		// 	// console.log(router)
		// }
	}
}
</script>

<style scoped>
section {
	position: relative;
	width: 100%;
	height: 900px;
}

.ant-card {
	position: absolute;
	background-color: #e3eaf9;
	width: 600px;
	height: 400px;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}

.title {
	text-align: center;
	margin-top: 50px;
}

.ant-btn {
	line-height: 30px;
}
</style>
