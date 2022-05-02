import axios from "axios";

export const index = () => {
    return async (dispatch) => {
        const response = await axios.get('api/user/index');
        dispatch({
            type: 'admin/user',
            payload: response.data
        })
    }
}