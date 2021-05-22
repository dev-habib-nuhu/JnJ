import {
    GET_DEVICES_REQUEST,
    GET_DEVICES_SUCCESS,
    GET_DEVICES_ERROR,
    ADD_DEVICE_REQUEST,
    ADD_DEVICE_SUCCESS,
    ADD_DEVICE_ERROR,
    ADD_DEVICE_CLEAN
} from '../constants';

import {BACKEND_BASE_URL} from '../../config/config.js';
import axios from 'axios';


export const alldevices = () => async (dispatch) =>{
    try {
        dispatch({type:GET_DEVICES_REQUEST})
        let config = {};

        if (localStorage.getItem("access_token")) {
            config = {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("access_token")
                }
            }
        }
        
        let {data} = await axios.get(`${BACKEND_BASE_URL}/api/devices`,config);
        if(data.status){
            dispatch({
                type:GET_DEVICES_SUCCESS,
                payload:data
            })
        }
        else{
            dispatch({
                type:GET_DEVICES_ERROR,
                payload:data.message
            })
        }
    
    } catch (error) {
        dispatch({
            type:GET_DEVICES_ERROR,
            payload:error.message
        })
    }
}



export const adddevice = (body) => async (dispatch) =>{
    try {
        dispatch({type:ADD_DEVICE_REQUEST})
        let config = {};

        if (localStorage.getItem("access_token")) {
            config = {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("access_token")
                }
            }
        }
        
        let {data} = await axios.post(`${BACKEND_BASE_URL}/api/devices`,body,config);
        
        if(data.status){
            dispatch({
                type:ADD_DEVICE_SUCCESS,
                payload:data
            })
        }
        else{
            dispatch({
                type:ADD_DEVICE_ERROR,
                payload:data.message
            })
        }
    
    } catch (error) {
        dispatch({
            type:ADD_DEVICE_ERROR,
            payload:error.message
        })
    }
}


export const adddeviceclean = () => (dispatch) =>{
    dispatch({type:ADD_DEVICE_CLEAN})
}