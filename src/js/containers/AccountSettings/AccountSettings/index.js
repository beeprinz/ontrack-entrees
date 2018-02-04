import { connect } from 'react-redux';
import AccountSettings from './AccountSettings';


function mapStoreToProps(store){
    return{
          email: store.login.email,
          phoneNumber: store.login.phoneNumber,
          owner: store.login.owner,
          address: store.login.address,
    };
}

export default connect(mapStoreToProps)(AccountSettings);
