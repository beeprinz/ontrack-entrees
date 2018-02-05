import { types } from './accountSettingActions';

const initialState = {
      email: this.props.login.email,
      phoneNumber: this.props.login.phoneNumber,
      owner: this.props.login.owner,
      address: this.props.login.address,
};

export default function signUpReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {

        case types.FETCH_USER_INFO: {
            return {
                ...state,         
                   email: payload.email,
                   password: payload.password,
                   phoneNumber: payload.phoneNumber,
                   owner: payload.owner,
                   address: payload.address,
            };
        }
        default: {
            return state;
        }
    }


}