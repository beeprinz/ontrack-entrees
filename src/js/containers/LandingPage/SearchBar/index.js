import { connect } from 'react-redux';
import SearchBar from './SearchBar';

function mapStoreToProps(store) {
    // console.log(store.searchbarReducer.searchBarInput,'store')
    return {
        search: store.searchbar.searchBarInput,
        googleResults: store.searchbar.googleResults
    }
}

export default connect(mapStoreToProps)(SearchBar);