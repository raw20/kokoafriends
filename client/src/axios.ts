import axios from "axios";

const api = axios.create(
    {
        baseURL: process.env.REACT_APP_FRONTEND_BASE_URL,
        withCredentials: true,
        headers:{
            "Content-type": "application/json",
        },
    });

export default api;