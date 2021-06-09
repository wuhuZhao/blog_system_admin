import { fromJS } from "immutable";
import * as constants from './constants';
const defaultState = fromJS({
    userToken: ""
})
export default (state = defaultState,action) =>{
    switch (action.type) {
        case constants.SET_USER_TOKEN:
            return state.set("userToken",action.data)
        default:
            return state
    }
}
