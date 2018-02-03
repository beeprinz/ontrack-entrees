import { connect } from 'react-redux';
import landingPage from './landingPage'


// This function takes the store and returns an object
// that's passed to the props of the component.
function mapStoreToProps(store) {
    // console.log(store.email.email)
  return {
  
    email: store.email.email,
    password: store.email.password
};
}

// This might look odd but, connect returns a function,
// that is then called with the component itself.
export default connect(mapStoreToProps)(landingPage);
