import axios from "axios";

export const login = async (data) => {

    const returnData = await axios.post('http://127.0.0.1:8001/api/login', { email: data.email, password: data.password, password_confirmation: data.password_confirmation });

    console.log(returnData);

    return {
        type: 'admin/login',
        payload: returnData
    };
}