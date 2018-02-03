import axios from 'axios';

export const getLogInput = (userInput) => { 
    return {
      type: 'GET_EMAIL_INPUT',
      userInput:payload
    }
  }

  export const getPasswordInput = (userInput) => {  
      console.log(payload,'dfsfdfsdf')
    return {
      type: 'GET_PASSWORD_INPUT',
      userInput:payload 
    }
  }
  
  export const updateLogInput = (update) => { 
    // console.log(update)
    return {
      type: 'UPDATE_LOG_INPUT',
      payload: update
    }
  }
  