import axios from 'axios';
import {BACKEND_BASE_URL} from '../config/config.js';

export const updatedevice = async (device_id,body) =>{
    try {
        let config = {};
        if (localStorage.getItem("access_token")) {
            config = {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("access_token")
                }
            }
        }
        let {data} = await axios.put(`${BACKEND_BASE_URL}/api/devices/${device_id}`,body,config); 
        return data;
    } catch (error) {
        console.log('Error updating device ',error.message)
        return false
    }

}


export const deletedevice = () =>{

}