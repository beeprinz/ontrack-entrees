import { types } from './signupActions';

const initialState = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phoneNumber: '',
      owner: '',
      address:'',
      userSaved: false
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
            };
        }
        case types.POST_USER_INFO: {
            return {
                ...state,
                userSaved:true
            }
        }
        default: {
            return state;
        }
    }


}