import { combineReducers } from  'redux-immutable'
import { reducer as AdminReducer } from "../pages/login/store"
const reducer =  combineReducers({
    Admin: AdminReducer
})
export default reducer;
