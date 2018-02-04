import { types } from './loginActions';

const initialState = {
    Id: '',
    accessToken: '',
    LogIn: false
};

export default function loginReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {

        case types.LOG_USER_IN_FULLFILLED: {
            return {
                ...state,
                Id: payload.userId,
                accessToken: payload.accessToken,
                LogIn: true
            };
        }
         case types.LOG_USER_IN_FAILED: {
             return {
                ...state,
               LogIn: false
             }
        }
       
        default: {
            return state;
        }
    }


}