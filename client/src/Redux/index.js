import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Reducers from './Reducers/index';
const store = createStore(Reducers, {
    'Auth': {
        'isAuthed': false,
        'token': ''
    }
}, applyMiddleware(ReduxThunk));
export default store;