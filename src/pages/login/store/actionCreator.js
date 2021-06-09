import * as constants from './constants';
import { push } from "react-router-redux";
import axios from "axios"
export const  AdminLogin = (username,password)=>{
    return (dispatch) =>{
        axios.post('/user/login',{
            username: username,
            password: password
        }).then(res =>{
            if(res.status===200){
                dispatch(setUserToken(res.data.data))
                dispatch(push("/"))
            }else{
                alert("error")
            }
        }).catch(err =>{
            alert(err)
        })
    }
}
const setUserToken = (token) =>{
    return {
        type: constants.SET_USER_TOKEN,
        data: token
    }
}
