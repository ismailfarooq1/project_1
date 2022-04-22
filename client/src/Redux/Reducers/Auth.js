import { LOGIN } from "../Types";
import Cookies from "universal-cookie";
import { axiosConstants } from '../../Config/constants';

export default (state = {}, action) => {
    let cookies = new Cookies();
    console.log('auth action');
    console.log(action);
    switch (action.type) {
        case 'admin/login':
            cookies.set('authToken', action.payload.token, { path: '/' })
            return { ...state, isAuthed: true, token: action.payload.token };

        case 'admin/logout':
            cookies.remove('authToken')
            return { ...state, isAuthed: false, token: '' };
        default:
            return state;
    }
}