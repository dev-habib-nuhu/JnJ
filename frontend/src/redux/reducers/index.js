import {combineReducers} from 'redux';
import {loginReducer, registerReducer} from './authReducers.js';

const rootReducer = combineReducers({
    Loginstatus : loginReducer,
    Registerstatus : registerReducer
})

export default rootReducer;