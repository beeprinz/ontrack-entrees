import axios from 'axios';

export const getLogInput = (userInput) => { 
    
    return {
      type: 'GET_LOG_INPUT',
      payload: userInput
    }
  }
  