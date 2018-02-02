import { connect } from 'react-redux';
import landingPage from './landingPage'


// This function takes the store and returns an object
// that's passed to the props of the component.
function mapStoreToProps(store) {
    console.log(store)
  return {
  
    email: store.email,
    password:store.password
};
}

// This might look odd but, connect returns a function,
// that is then called with the component itself.
export default connect(mapStoreToProps)(landingPage);
