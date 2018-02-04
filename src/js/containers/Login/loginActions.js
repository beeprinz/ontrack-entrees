import axios from 'axios'

 export const types = {
    LOG_USER_IN_FULLFILLED: 'LOG_USER_IN_FULLFILLED',
    LOG_USER_IN_FAILED: 'LOG_USER_IN_FAILED'
 };
 
export function LogUserIn(userInfo) {

      return {
          type: types.LOG_USER_IN_FULLFILLED,
          payload: userInfo, 
       
      }
}
 export function userError(userInfo){
     
     return{
         type: types.LOG_USER_IN_FAILED,
         payload: userInfo
     }
 }

