import { connect } from 'react-redux';
import SearchBar from './SearchBar';

function mapStoreToProps(store) {
    // console.log(store.searchbarReducer.searchBarInput,'store')
    return {
        search:store.searchbarReducer.searchBarInput
    }
}

export default connect(mapStoreToProps)(SearchBar);