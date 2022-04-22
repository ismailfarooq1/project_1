import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Reducers from './Reducers/index';
import Cookies from 'universal-cookie';

const cookie = new Cookies();
const store = createStore(Reducers, {
    'Auth': {
        'isAuthed': (cookie.get('authToken') ? true : false),
        'token': cookie.get('authToken'),
    }
}, applyMiddleware(ReduxThunk));
export default store;