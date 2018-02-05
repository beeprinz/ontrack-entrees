import { connect } from 'react-redux';
import RestaurantDetail from './RestaurantDetail';


// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchData, newSearchTerm }, dispatch);
// }

function mapStateToProps({ list }) {
  return { list };
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);