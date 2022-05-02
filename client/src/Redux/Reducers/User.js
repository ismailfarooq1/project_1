export default (state = {}, action) => {
    switch (action.type) {
        case 'admin/user':
            return { ...state, allUsers: action.payload };
        default:
            return state;
    }
}