<template>
	<a-layout>
		<a-layout-sider>
			<a-menu
				mode="inline"
				style="width: 200px; text-align:center"
				@click="handerClick"
				v-for="(item, index) in this.$router.options.route"
				:key="index"
				theme="dark"
				:defaultSelectedKeys="defaultSelectedKeys"
			>
				<a-menu-item
					v-for="subItem in item.children"
					:key="subItem.path"
					style="padding:0px; margin:0px 0px 10px "
					v-if="subItem.meta.authority"
				>
					{{ subItem.title }}
				</a-menu-item>
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
		return {
			// 初始选中的菜单项
			defaultSelectedKeys: [this.$route.path]
		}
	},
	methods: {
		// 页面跳转方法
		handerClick(item) {
			this.$router.push(item.key)
		}
	}
}
</script>

<style lang="less" scoped></style>
