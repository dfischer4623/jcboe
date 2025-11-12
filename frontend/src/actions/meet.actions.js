import axios from "./axios";

export const updateUserStatus = (data) => {
    return axios.post(`/user/update-status`, data);
}