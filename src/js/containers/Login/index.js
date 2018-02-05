import { connect } from 'react-redux';
import Login from './Login';


function mapStoreToProps(store){
    return{
        // userId: store.userId,
        // accessToken: store.accessToken
        information:store.information
    };
}

export default connect(mapStoreToProps)(Login);
