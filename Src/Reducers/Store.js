import reducers from './Reducers';
import { createStore } from 'redux';

const store = createStore(reducers);

export default store;