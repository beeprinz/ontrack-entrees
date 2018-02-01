import React from 'react';
import { Link } from 'react-router-dom';
import  { updateSearch, getSearch, fetchRestaurants, getGoogleSearch, debounce } from './searchbarActions'
//import PlacesAutocomplete, { geocodeByAddress, geocodeByPlaceId } from 'react-places-autocomplete'; 

export default class SearchBar extends React.Component{
    constructor(props){
        super(props);
        
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.handleAPI = debounce(this.getGoogleResults.bind(this), 1000);
    }

    handleSearch(event){
        const {dispatch} = this.props
        const value = event.target.value;
        dispatch(getSearch(value))
    }

    getGoogleResults(search) {
        const {dispatch} = this.props
        dispatch(getGoogleSearch(search))
    } 

    handleSearchInput(event){
        const {dispatch} = this.props
        const value = event.target.value
        console.log('handleSearch');
        this.handleAPI(value);
        dispatch(updateSearch(value));
    }

    render() {
        const store = this.props
        console.log('store', store)
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
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <button className="btn btn-outline-secondary" type="button">Button</button>
                    </div>
                    <ul>
                    { !!store.googleResults &&
                        store.googleResults.map((item) =>{
                            return(<li key={item.place_id}>{item.description}</li>)
                        })
                    }
                    </ul>
                    {/* <select className="custom-select" id="inputGroupSelect03">
                        <option >Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select> */}
                </div>
            </div>
        )
    }

}