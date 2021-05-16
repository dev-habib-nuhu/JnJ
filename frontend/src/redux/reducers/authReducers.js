import * as actions from '../constants.js';

export const loginReducer = (state={loading:false,error:false,success:false,data:[]},action) =>{
    switch(action.type){
        case (actions.LOGIN_REQUEST):
            state = {...state,loading:true}
            return state;
        case (actions.LOGIN_SUCCESS):
            state = {...state,loading:false,success:true,data:action.payload}
            return state;
        case (actions.LOGIN_FALIURE):
            state = {...state,loading:false,error:true,success:false,data:action.payload}
            return state;
        case (actions.LOGIN_CLEAN):
            state = {...state,loading:false,success:false,error:false,data:[]}
            return state;
        default:
            return state;
    }
}
