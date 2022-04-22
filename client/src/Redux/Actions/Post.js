import axios from "axios";
import { axiosConstants } from "../../Config/constants";

export const index = (id) => {
    // if (id) {
    //     console.log('has ID');
    // } else {

    console.log('POST axiosConstants.headers');
    console.log(axiosConstants.headers);
    return async (dispatch) => {
        const response = await axios.get(axiosConstants.basePath + 'api/posts', { headers: axiosConstants.headers });

        dispatch({
            type: 'admin/posts',
            payload: response.data
        })
    }
    // }
}