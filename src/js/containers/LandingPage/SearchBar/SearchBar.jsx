import React from 'react';
import { Link } from 'react-router-dom';
import { updateSearch, getSearch } from './searchbarActions'
// import PlacesAutocomplete, { geocodeByAddress, geocodeByPlaceId } from 'react-places-autocomplete'; 

export default class SearchBar extends React.Component{
    constructor(props){
        super(props);
        
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSearchInput = this.handleSearchInput.bind(this);
    }

    handleSearch(event){
        const {dispatch} = this.props
        const value = event.target.value;
        dispatch(getSearch(value))
    }

    handleSearchInput(event){
        const {dispatch} = this.props
        const value = event.target.value
        dispatch(updateSearch(value));
    }

    render() {
        // console.log(this.props,'component')
        const store = this.props
        console.log(store.search)

        return (
            <div>
                <div className="jumbotron">
                    <h1 className="display-4">OnTrack Entree's</h1>
                    <p className="lead">Because who want's to be hangry</p>
                    <hr className="my-4" />
                </div>
                <div className="input-group input-group-lg">
                    <div className="input-group-prepend">
                        <button value="test" onClick={this.handleSearch} className="btn btn-outline-secondary" type="button">Search</button>
                    </div>
                    <input value={store.search} onChange={this.handleSearchInput} type="text" className="form-control" placeholder="Restaurants" aria-label="Large" aria-describedby="basic-addon1" />
                </div>
            </div>
        )
    }

}