import { createStore, combineReducers } from 'redux';
import { syncFramework7WithStore, Framework7StateKernel, framework7Reducer } from 'framework7-redux';

export const framework7StateKernel = new Framework7StateKernel();

export const store = createStore(
	combineReducers({
		framework7: framework7Reducer
	})
);

syncFramework7WithStore(store, framework7StateKernel);