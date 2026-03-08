import { createSlice } from '@reduxjs/toolkit';
import axios from '../actions/axios';
import secureLocalStorage from "react-secure-storage";

const initialState = {
    value: {},
    token: null,
    locations: []
}

export const userSlice = createSlice({
    name: 'userdata',
    initialState,
    reducers: {
        holdUser: (state, action) => {
            state.value = action.payload
        },
        loginSuccess: (state, action) => {
            state.value = action.payload.user;
            state.token = action.payload.token;
            // axios.defaults.headers['Authorization'] = `Bearer ${action.payload.token}`;
        },
        logout: (state) => {
            state.value = {};
            state.token = null;
            // axios.defaults.headers['Authorization'] = '';
            secureLocalStorage.removeItem('token');
        },
        setLocations: (state, action) => {
            state.locations = action.payload;
        }

    }
})

export const { holdUser, loginSuccess, logout, setLocations } = userSlice.actions;

export default userSlice.reducer
