import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FALIURE,
    LOGIN_CLEAN,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_ERROR
} from '../constants';
import {BACKEND_BASE_URL} from '../../../../config.js';

import axios from 'axios';

export const login = (body) => async (dispatch) =>{
    try {
        dispatch({type:LOGIN_REQUEST})
        let resp = await axios.post(`${BACKEND_BASE_URL}/api/user`,body);
        console.log('LOGIN RESP',resp)
        if(resp.data?.status){
            dispatch({
                type:LOGIN_SUCCESS,
                payload:resp.data
            })
            localStorage.setItem('access_token',resp?.data?.access_token);
            localStorage.setItem('id',resp?.data?.data?.id)
        }
        else{
            dispatch({
                type:LOGIN_FALIURE,
                payload:resp.data.message
            })
        }
    
    } catch (error) {
        dispatch({
            type:LOGIN_FALIURE,
            payload:error.message
        })
    }
}


export const loginClean = () => (dispatch) =>{
    dispatch({type:LOGIN_CLEAN})
}

export const logout = () => async (dispatch) =>{
    try {
        dispatch({type:LOGOUT_REQUEST})
        localStorage.clear()
            dispatch({
                type:LOGOUT_SUCCESS
            })
    
    } catch (error) {
        console.log('error =>',error.message)
        dispatch({
            type:LOGOUT_ERROR,
            payload:error.message
        })
    }
}