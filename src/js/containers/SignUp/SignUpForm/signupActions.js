import axios from 'axios'

 export const types = {
     GET_USER_INFO: 'GET_USER_INFO',
     POST_USER_INFO: 'POST_USER_INFO'
 };
export function getUser(userInfo) {
    console.log(userInfo + "USER INFO")
      return {
          type: types.GET_USER_INFO,
          payload: userInfo,
       
      }
}
export function saveUser(userInfo){
    return{
        type: types.POST_USER_INFO,
        payload:userInfo
    }
}
