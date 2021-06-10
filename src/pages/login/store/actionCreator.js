import * as constants from './constants';
import { push } from "react-router-redux";
import axios from "axios"
import qs from "qs"
export const  AdminLogin = (username,password)=>{
    return (dispatch) =>{
        axios.post('/user/login',qs.stringify({
            username: username,
            password: password
        }),{
            headers:{
                "Content-Type" : "application/x-www-form-urlencoded"
            }
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
