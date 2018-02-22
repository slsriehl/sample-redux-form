import {combineReducers} from 'redux';

import {reducer as forms} from 'redux-form';

import structure from './structure';

import user from './user';

const reducers = combineReducers({
	forms,
	structure,
	user
})

export default reducers;
