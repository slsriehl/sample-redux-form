// import initial from '../initial/';

const reducer = (state = {}, action) => {
	switch(action.type) {
		case 'LOAD_USER':
			let objLU = {
				...state,
				...action.data
			}
			return objLU;
		default: return state;
	}
}

export default reducer;
