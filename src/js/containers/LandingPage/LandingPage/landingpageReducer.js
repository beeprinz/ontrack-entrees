const initialState = {
 email: '',
password:''

}

export default function landingpageReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'GET_LOG_INPUT':
          return {
            ...state,
            email: payload.email,
            password: payload.password
          }
    


          default: {
            return state;
          }
        }
        }