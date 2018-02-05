import { types } from './signupActions';

const initialState = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phoneNumber: '',
      owner: '',
      address:'',
      userSaved: false,
      userSavedFailed:false,
      postResults: '',
      isValid: true,
      communicationError: false,

};

export default function signUpReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {

        case types.GET_USER_INFO: {
            return {
                ...state,
                   firstName: payload.firstName,
                   lastName: payload.lastName,
                   email: payload.email,
                   password: payload.password,
                   phoneNumber: payload.phoneNumber,
                   owner: payload.owner,
                   address: payload.address,
                   postResults: payload.status,
                   userSaved:true
            };
        }
         case types.POST_USER_FULLFILLED: {
             return {
                ...state,
                postResults: payload.postResults,
                userSave:true
             }
        }
        case types.USER_IS_INVALID: {
            return{
                ...state,
                isValid: false
            }
        }
         case types.POST_USER_FAILED: {
            return{
                ...state,
                postResults:payload.postResults,
                userSaveFailed:true
            }
        }
        default: {
            return state;
        }
    }


}