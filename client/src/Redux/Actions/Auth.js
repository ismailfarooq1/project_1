import axios from "axios";
import { axiosConstants } from '../../Config/constants';

export const login = (data) => {
    return async (dispatch) => {
        const response = await axios.post(axiosConstants.basePath + 'api/login', { email: data.email, password: data.password, password_confirmation: data.password_confirmation })
        dispatch({
            type: 'admin/login',
            payload: response.data
        })
    }
}

export const logout = () => {

    // console.log('logout axiosConstants.headers');
    console.log(axiosConstants.headers);

    return async (dispatch) => {
        const response = await axios.get(axiosConstants.basePath + 'api/logout', { headers: axiosConstants.headers })
        dispatch({
            type: 'admin/logout',
            payload: response.data
        })
    }
}