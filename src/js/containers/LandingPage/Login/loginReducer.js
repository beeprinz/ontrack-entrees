const defaultState = {
    emailLogin: '',
    passwordLogin: '',
    history:[]


}



export default function SearchReducer(state = defaultState, action) {
    const { type, payload } = action;



    switch (type) {
        case 'LOGIN_CLICK':
          return {
            ...state,
            emailLogin: payload,
            passwordLogin: payload 
        }

            default: {
                return state;

          }
        }
}