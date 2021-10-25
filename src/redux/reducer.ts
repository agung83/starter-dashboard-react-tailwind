import { combineReducers } from "redux";

import { AuthReducer, ThemeReducer, SidebarReducer } from './modules'


export default combineReducers({
    AuthReducer, ThemeReducer, SidebarReducer
})