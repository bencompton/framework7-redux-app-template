import { createStore, combineReducers } from 'redux';
import { Framework7StateKernel, framework7Reducer, syncFramework7WithStore } from 'framework7-redux';

export const stateKernel = new Framework7StateKernel();

export const store = createStore(
    combineReducers({
        framework7: framework7Reducer
    })
);

syncFramework7WithStore(store, stateKernel);
