import { LOGIN } from "../Types";

export default (state = {}, action) => {
    switch (action.type) {
        case 'admin/login':
            return { ...state, isAuthed: true, token: action.payload.token };
        default:
            return state;
    }
}