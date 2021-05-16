import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FALIURE,
    LOGIN_CLEAN,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_ERROR,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FALIURE
} from '../constants';
import {BACKEND_BASE_URL} from '../../config/config.js';

import axios from 'axios';

export const login = (body) => async (dispatch) =>{
    try {
        dispatch({type:LOGIN_REQUEST})
        let resp = await axios.post(`${BACKEND_BASE_URL}/api/users/login`,body);
        console.log('LOGIN RESP',resp)
        if(resp.data?.status){
            dispatch({
                type:LOGIN_SUCCESS,
                payload:[]
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

export const register = (body) => async (dispatch) =>{
    try {
        dispatch({type:REGISTER_REQUEST})
        let resp = await axios.post(`${BACKEND_BASE_URL}/api/users`,body);
        console.log('REGISTER RESP',resp)
        if(resp.data?.status){
            dispatch({
                type:REGISTER_SUCCESS,
                payload:resp.data
            })
        }
        else{
            dispatch({
                type:REGISTER_FALIURE,
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