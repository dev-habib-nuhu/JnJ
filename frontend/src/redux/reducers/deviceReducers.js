import * as actions from '../constants.js';

export const devicesReducer = (state={loading:false,error:false,success:false,data:[]},action) =>{
    switch(action.type){
        case (actions.GET_DEVICES_REQUEST):
            return {...state,loading:true}
        case (actions.GET_DEVICES_SUCCESS):
            return {...state,loading:false,success:true,data:action.payload}
        case (actions.GET_DEVICES_ERROR):
            return {...state,loading:false,error:true,success:false,data:action.payload}
        default:
            return state;
    }
}


export const adddeviceReducer = (state={loading:false,error:false,success:false,data:''},action) =>{
    switch(action.type){
        case (actions.ADD_DEVICE_REQUEST):
            return {...state,loading:true}
        case (actions.ADD_DEVICE_SUCCESS):
            return {...state,loading:false,success:true,data:action.payload}
        case (actions.ADD_DEVICE_ERROR):
            return {...state,loading:false,error:true,success:false,data:action.payload}
        case (actions.ADD_DEVICE_CLEAN):
            return {loading:false,success:false,error:false,data:''}
        default:
            return state;
    }
}