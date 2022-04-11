import axios from "axios";
import { axiosConstants } from '../../Config/constants';

export const login = async (data) => {
    const returnData = await axios.post(axiosConstants.basePath + 'api/login', { email: data.email, password: data.password, password_confirmation: data.password_confirmation });
    return {
        type: 'admin/login',
        payload: returnData
    };
}