<template>
	<section>
		<a-card style="width: 100%;height:100%">
			<a-row>
				<a-col :span="1"><a-button type="primary" shape="round" size="large">新增</a-button></a-col>
			</a-row>
			<a-row>
				<a-table :columns="columns" :dataSource="data">
					<span slot="customTitle"><a-icon type="smile-o" />Name</span>
				</a-table>
			</a-row>
		</a-card>
	</section>
</template>

<script>
import data from './data'
import methods from './methods'

export default {
	data() {
		return data.init()
	},
	methods: methods
}
</script>

<style lang="less" scoped>
.ant-btn {
	line-height: 40px;
	padding: 0px;
}
</style>
