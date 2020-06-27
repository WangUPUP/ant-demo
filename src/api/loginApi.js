import axios from 'axios'

export const loginApi = params => {
	return axios.post('/mk_login', params)
}
