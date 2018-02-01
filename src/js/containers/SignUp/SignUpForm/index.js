import { connect } from 'react-redux';
import SignUp from './SignUp';


function mapStoreToProps(store){
    return{
          firstName: store.firstName,
          lastName: store.lastName,
          emailAddress: store.emailAddress,
          password: store.password,
          phoneNumber: store.phoneNumber,
          owner: store.owner,
          address: store.address,
    };
}

export default connect(mapStoreToProps)(SignUp);