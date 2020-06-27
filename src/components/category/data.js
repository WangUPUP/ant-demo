const columns = [
	{
		dataIndex: 'name',
		key: 'name',
		slots: { title: '' },
		scopedSlots: { customRender: 'name' },
		width: '25%'
	},
	{
		title: 'Age',
		dataIndex: 'age',
		key: 'age',
		width: '25%'
	},
	{
		title: 'Address',
		dataIndex: 'address',
		key: 'address',
		width: '25%'
	},

	{
		title: 'Action',
		key: 'action',
		scopedSlots: { customRender: 'action' },
		width: '25%'
	}
]

const data = [
	{
		key: '1',
		name: 'John Brown',
		age: 32,
		address: 'New York No. 1 Lake Park'
	},
	{
		key: '2',
		name: 'Jim Green',
		age: 42,
		address: 'London No. 1 Lake Park'
	},
	{
		key: '3',
		name: 'Joe Black',
		age: 32,
		address: 'Sidney No. 1 Lake Park'
	}
]

export default {
	init: function() {
		return { data, columns }
	}
}
