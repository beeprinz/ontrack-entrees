import { connect } from 'react-redux';
import SignUp from './SignUp';


function mapStoreToProps(store){
    return{
          firstName: store.signup.firstName,
          lastName: store.signup.lastName,
          email: store.signup.email,
          password: store.signup.password,
          phoneNumber: store.signup.phoneNumber,
          owner: store.signup.owner,
          address: store.signup.address,
          userSaved: store.signup.userSaved, 
          postResults: store.signup.postResults,
          isValid: store.signup.isValid
    };
}

export default connect(mapStoreToProps)(SignUp);
