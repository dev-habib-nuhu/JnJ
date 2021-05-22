import {createStore,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const isLoggedin = localStorage.getItem("access_token") ? true : false
let initialState = {
    Login: {LoggedIn : isLoggedin}
}
const store = createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(thunk)));

export default store;