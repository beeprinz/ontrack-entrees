const initialState = {
  email: '',
  password:''
}

export default function landingpageReducer(state = initialState, action) {

    const { type, payload } = action;
    // console.log(type, payload)

    switch (type) {
        case 'GET_LOG_INPUT':
          return {
            ...state,
            email: payload,
            password: payload
          }
          case 'UPDATE_LOG_INPUT':
          return {
            ...state,
            ...payload
          }
          default: {
            return state;
          }
        }
        }