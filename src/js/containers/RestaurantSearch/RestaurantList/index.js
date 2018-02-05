import { connect } from 'react-redux';
import RestaurantList from './RestaurantList';

function mapStoreToProps(store) {
    return {
        listings:store.searchbarReducer.locations
    }
}

export default connect(mapStoreToProps)(RestaurantList);