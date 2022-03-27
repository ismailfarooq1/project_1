export default (state = {}, action) => {
    switch (action.type) {
        case 'admin/login':
            return { ...state, allMedicine: action.payload };
        default:
            return state;
    }
}