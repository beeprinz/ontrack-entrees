import React from 'react';
import { Link, Route } from 'react-router-dom';
import  { test } from './restaurantlistActions'
//import PlacesAutocomplete, { geocodeByAddress, geocodeByPlaceId } from 'react-places-autocomplete'; 

export default class SearchBar extends React.Component{
    constructor(props){
        super(props);
    }


    // handleSearchClick(event){
    //     const {dispatch} = this.props
    //     const value = this.props.search
    //     // console.log(value)
    //     dispatch(getSearch(value))
    // }

    // getGoogleResults(search) {
    //     const {dispatch} = this.props
    //     dispatch(getGoogleSearch(search))
    // } 

    // handleSearchInput(event){
    //     const {dispatch} = this.props
    //     const value = event.target.value
    //     this.handleAPI(value);
    //     dispatch(updateSearch(value));
    // }

    // handleOnPredictClick(event){
    //     const {dispatch} = this.props
    //     const value = event.target.value
    //     dispatch(selectPrediction(value));
    // }

    render() {
        const store = this.props
        const maxSlideHeight = {maxHeight:"350px", maxWidth:"100%"}
        // console.log('store', store)  
        return (
            <div className="container">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img className="d-block w-100" style={maxSlideHeight} src="https://c1.staticflickr.com/9/8236/8381576595_2e2129b848_b.jpg" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" style={maxSlideHeight}  src="https://c1.staticflickr.com/9/8236/8381576595_2e2129b848_b.jpg" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" style={maxSlideHeight}  src="https://c1.staticflickr.com/9/8236/8381576595_2e2129b848_b.jpg" alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

                <div>
                    <div className="card-group">
                        <div className="mt-4 card">
                            <img className="card-img-top img-thumbnail" src="https://c1.staticflickr.com/9/8236/8381576595_2e2129b848_b.jpg" alt="Card image cap" />
                            <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                            <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                        <div className="mt-4 card">
                            <img className="card-img-top img-thumbnail" src="https://c1.staticflickr.com/9/8236/8381576595_2e2129b848_b.jpg" alt="Card image cap" />
                            <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                            <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                        <div className="mt-4 card">
                            <img className="card-img-top img-thumbnail" src="https://c1.staticflickr.com/9/8236/8381576595_2e2129b848_b.jpg" alt="Card image cap" />
                            <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                            <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>

                        <div className="card-group">
                            <div className="mt-4 card">
                                <img className="card-img-top img-thumbnail" src="https://c1.staticflickr.com/9/8236/8381576595_2e2129b848_b.jpg" alt="Card image cap" />
                                <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                                <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </div>
                            <div className="mt-4 card">
                                <img className="card-img-top img-thumbnail" src="https://c1.staticflickr.com/9/8236/8381576595_2e2129b848_b.jpg" alt="Card image cap" />
                                <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                                <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </div>
                            <div className="mt-4 card">
                                <img className="card-img-top img-thumbnail" src="https://c1.staticflickr.com/9/8236/8381576595_2e2129b848_b.jpg" alt="Card image cap" />
                                <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                                <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}