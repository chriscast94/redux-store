import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(reducer);
export default store;

//Below function wasn't importing/reading reducer import.
// export default function createStore(reducer);