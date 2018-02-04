import { connect } from 'react-redux';
import RestaurantList from './RestaurantList';

function mapStoreToProps(store) {
    // console.log(store.searchbarReducer.searchBarInput,'store')
    return {
    }
}

export default connect(mapStoreToProps)(RestaurantList);