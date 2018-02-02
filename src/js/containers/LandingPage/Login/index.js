import { connect } from 'react-redux';
import Login from './Login'


// This function takes the store and returns an object
// that's passed to the props of the component.
function mapStoreToProps(store) {
  return {
    
    emailLogin: store.search.emailLogin,
    passwordLogin: store.search.passwordLogin};
}

// This might look odd but, connect returns a function,
// that is then called with the component itself.
export default connect(mapStoreToProps)(Login);
