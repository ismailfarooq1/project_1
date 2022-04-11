import axios from "axios";
import { axiosConstants, headers } from "../../Config/constants";

export const index = async (id) => {
    if (id) {
        console.log('has ID');
    } else {
        const posts = await axios.get(axiosConstants.basePath + 'api/posts', { headers: axiosConstants.headers });
        return {
            type: 'admin/posts',
            payload: posts
        }
    }
}