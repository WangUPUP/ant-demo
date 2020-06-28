<template>
	<a-layout>
		<a-layout-sider>
			<a-menu
				mode="inline"
				style="width: 200px; text-align:center"
				@click="handerClick"
				theme="dark"
				:defaultSelectedKeys="defaultSelectedKeys"
			>
				<a-menu-item
					v-for="item in router.children"
					:key="item.path"
					style="padding:0px; margin:0px 0px 10px "
					v-if="item.meta.authority"
				>
					{{ item.title }}
				</a-menu-item>
				<!-- <a-menu-item :key="item.path" style="padding:0px; margin:0px 0px 10px " v-if="item.meta.authority">
					{{ item.title }}
				</a-menu-item> -->
			</a-menu>
		</a-layout-sider>
		<a-layout-content>
			<router-view />
		</a-layout-content>
	</a-layout>
</template>

<script>
export default {
	data() {
		let router = this.$router.options.routes[0]
		return {
			// 初始选中的菜单项
			defaultSelectedKeys: [this.$route.path],
			router
		}
	},
	methods: {
		// 页面跳转方法
		handerClick(item) {
			this.$router.push(item.key)
		}
	},
	created() {}
}
</script>

<style lang="less" scoped></style>
