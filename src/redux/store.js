import {createStore} from 'redux';
import roorReducers from './reducer';


const store = createStore(roorReducers);

export default store;