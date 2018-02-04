import React from 'react';
import { Link, Route } from 'react-router-dom';
import  { updateSearch, getSearch, fetchRestaurants, getGoogleSearch, selectPrediction, debounce } from './searchbarActions'
//import PlacesAutocomplete, { geocodeByAddress, geocodeByPlaceId } from 'react-places-autocomplete'; 

export default class SearchBar extends React.Component{
    constructor(props){
        super(props);
        
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.handleOnPredictClick = this.handleOnPredictClick.bind(this);
        this.handleAPI = debounce(this.getGoogleResults.bind(this), 100);
    }


    handleSearchClick(event){
        const {dispatch} = this.props
        const value = this.props.search
        // console.log(value)
        dispatch(getSearch(value))
    }

    getGoogleResults(search) {
        const {dispatch} = this.props
        dispatch(getGoogleSearch(search))
    } 

    handleSearchInput(event){
        const {dispatch} = this.props
        const value = event.target.value
        this.handleAPI(value);
        dispatch(updateSearch(value));
    }

    handleOnPredictClick(event){
        const {dispatch} = this.props
        const value = event.target.value
        dispatch(selectPrediction(value));
    }

    render() {
        const store = this.props
        // console.log('store', store)  
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">OnTrack Entree's</h1>
                    <p className="lead">Because who want's to be hangry</p>
                    <hr className="my-4" />
                </div>
                <div className="input-group input-group-lg">
                    <div className="input-group-prepend">
                        
                        <a value={store.search} onClick={this.handleSearchClick} className="btn btn-outline-secondary" type="button">Search</a>
                    </div>
                    <input value={store.search} onChange={this.handleSearchInput} type="text" className="form-control" placeholder="City" aria-label="Large" aria-describedby="basic-addon1" />
                </div>
                <div>

                <div className="">
                    { !!store.googleResults &&
                        store.googleResults.map((item) =>{
                            return(
                            <div className="alert alert-light alert-dismissible fade show offset-lg-1" key={item.place_id} role="alert">
                                <strong><option onClick={this.handleOnPredictClick}>{item.description}</option></strong>
                            </div>)
                        })
                    }
                    </div>
                </div>

            </div>
        )
    }

}