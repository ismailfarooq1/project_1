import Auth from './Auth'
import Config from './Config'
import Post from './Post';
import User from './User';
import { combineReducers } from 'redux'

export default combineReducers({
    Auth: Auth,
    Config: Config,
    Post: Post,
    User: User,
});
