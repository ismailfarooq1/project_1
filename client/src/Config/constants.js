import Cookies from "universal-cookie"

var cookies = new Cookies();

export const axiosConstants = {
    basePath: 'http://127.0.0.1:8001/',
    headers: { Authorization: 'Bearer ' + cookies.get('authToken') },
}
