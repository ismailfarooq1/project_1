import { LOGIN } from "../Types";

export default (state = {}, action) => {
    switch (action.type) {
        case 'admin/login':
            // console.log("ACTION LOGIN");
            return { ...state, adminData: action.payload };
        default:
            // console.log(action.type);
            return state;
    }
}