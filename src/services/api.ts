import axios from "axios";
import secure from "../config/segureLS";

export const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASEURL,
})

api.interceptors.request.use((config) => {
    const token = secure.get('calenday@access-token');

    if (token?.data){
        config.headers = {
            Authorization: `Bearer ${token.data}`,
        }
    }

    return config;
})

api.interceptors.response.use(
    (res ) => res,
    (error) => {
        const { response } = error

        if (response) {
            const token = secure.get('houpa@access-token');

            if (response.status === 401 && token?.data) {
                secure.clear();
                window.location.href = process.env.REACT_APP_PUBLIC_URL || '';
            }

            // eslint-disable-next-line no-throw-literal
            throw {...response.data, status: response.status }
        }
    }
)
