import axios from 'axios';

export const getLogInput = (email, password) => { 
   

    var loginData = {
        email: email,
        password: password
    }

    return {
        
      type: 'LOGIN',
      payload: axios.post('http://localhost:5000/api/users/login', loginData)
                .then(response => {
                    //we'll want to return token
                    // response.data.id
                   return response; 
                }).catch(error => {
                    alert(error)
                })
                
    }
  }


  
  export const updateLogInput = (update) => { 
    return {
      type: 'LOG_INPUT',
      payload: update
    }
  }
  