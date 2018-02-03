import axios from 'axios';

export const getLogInput = (userInput) => { 
    return {
      type: 'GET_LOG_INPUT',
      payload: userInput
    }
  }
  
  export const updateLogInput = (update) => { 
    // console.log(update)
    return {
      type: 'UPDATE_LOG_INPUT',
      payload: update
    }
  }
  