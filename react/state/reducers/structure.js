const reducer = (state = {}, action) => {
	switch(action.type) {
		case 'LOAD_FORM':
			let objLF = {
				...state,
				[action.data.name]: action.data.structure
			}
			return objLF;
		default: return state;
	}
}

export default reducer;
