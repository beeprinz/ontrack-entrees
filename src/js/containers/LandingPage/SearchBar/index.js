import { connect } from 'react-redux';
import SearchBar from './SearchBar';

function mapStoreToProps(store) {
    // console.log(store.searchbarReducer.searchBarInput,'store')
    return {
        search: store.searchbarReducer.searchBarInput,
        googleResults: store.searchbarReducer.googleResults
    }
}

export default connect(mapStoreToProps)(SearchBar);