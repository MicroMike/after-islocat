import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';

let initialState = {}

const store = createStore(rootReducer, initialState);

store.subscribe(() => {
  console.log(store.getState())
})

export default store;
