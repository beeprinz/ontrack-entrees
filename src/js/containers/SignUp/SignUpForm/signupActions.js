import axios from 'axios'

 export const types = {
     GET_USER_INFO: 'GET_USER_INFO',
     POST_USER_FULLFILLED: 'POST_USER_FULLFILLED',
     POST_USER_FAILED: 'POST_USER_FAILED',
     USER_IS_INVALID: ' USER_IS_INVALID'
 };
export function getUser(userInfo) {
    console.log(userInfo + "USER INFO")
      return {
          type: types.GET_USER_INFO,
          payload: userInfo, 
       
      }
}
 export function saveUser(postResults){
     
     return{
         type: types.POST_USER_FULLFILLED,
         payload: postResults
     }
 }
 export function checkValidation(userInfo){
     return {
     type:types.USER_IS_INVALID,
     payload: userInfo 
 }
}
 export function saveUserFailed(postResults)
{
    return {
        type: types.POST_USER_FAILED,
        payload: postResults
    }
}