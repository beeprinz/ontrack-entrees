import { connect } from 'react-redux';
import landingPage from './landingPage'


// This function takes the store and returns an object
// that's passed to the props of the component.
function mapStoreToProps(store) {

  return {
  
    email: store.login.email,
    password: store.login.password,
    userToken: store.login.userToken,
    userId: store.login.userId
}
};

// This might look odd but, connect returns a function,
// that is then called with the component itself.
export default connect(mapStoreToProps)(landingPage);
