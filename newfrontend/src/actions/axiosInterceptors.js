import axios from "./axios";

const setupAxiosInterceptors = (store) => {
    axios.interceptors.response.use(
        response => response,
        error => {
            //if error come as 401(Unauthenticated) then logout
            if (error.response && error.response.status === 401) {
                store.dispatch({ type: 'userdata/logout' });
            }
            return Promise.reject(error);
        }
    );
};

export default setupAxiosInterceptors;