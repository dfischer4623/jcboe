import axios from 'axios';
import secureLocalStorage from "react-secure-storage";

const token = secureLocalStorage.getItem('token');
const Instance = axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND_URL}api`,
    headers: {
        Authorization: token ? ('Bearer ' + token) : null
    }
});
export default Instance;