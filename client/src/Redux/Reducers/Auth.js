export default (state = {}, action) => {
    switch (action.type) {
        case 'admin/login':
            return { ...state, adminData: action.payload };
        default:
            return state;
    }
}