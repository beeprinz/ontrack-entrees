import axios from 'axios'

 export const types = {
        FETCH_USER_INFO: 'FETCH_USER_INFO',
 };
export function fetchUser(userID) {
      return {
          type: types.FETCH_USER_INFO,
          payload: axios.get('http://localhost:3000/api/users/'+ userID) 
          .then(response => response.data).catch(err => console.log(err))
       
      }
}