import Promise from 'bluebird';
import axios from 'axios';


const getForm = (name, dispatch) => {

	return axios.get('/api/user')
	.then(result => {
		let data = result.data;
		return Promise.all([
			dispatch({
				type: 'LOAD_USER',
				data
			}),
			axios.get(`/api/forms/${name}`)
		])
	})
	.then(([action, result]) => {
		let data = result.data;
		return dispatch({
			type: 'LOAD_FORM',
			data
		})
	})
	.catch(err => {
		return Promise.reject(err);
	});

}

export default getForm;
