import { connect } from 'react-redux';
import RestaurantList from './RestaurantList';

function mapStoreToProps(store) {
    console.log(store.searchbar.locations,'store')
    return {
        listings:store.searchbar.locations
    }
}

export default connect(mapStoreToProps)(RestaurantList);