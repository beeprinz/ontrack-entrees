import axios from 'axios';


export const loginClick = (loginInput) => {
    return {
      type: 'LOGIN_CLICK',
      payload: loginInput,
       
    }
  }