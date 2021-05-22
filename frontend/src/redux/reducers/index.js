import {combineReducers} from 'redux';
import {loginReducer, registerReducer} from './authReducers.js';
import { adddeviceReducer, devicesReducer } from './deviceReducers.js';

const rootReducer = combineReducers({
    Loginstatus : loginReducer,
    Registerstatus : registerReducer,
    Devices:devicesReducer,
    Adddevice:adddeviceReducer

})

export default rootReducer;