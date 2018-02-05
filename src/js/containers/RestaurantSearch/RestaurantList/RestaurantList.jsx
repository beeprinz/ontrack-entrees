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


    render() {
        const store = this.props
        const SanDiego = store.listings.SanDiego
        const LosAngeles = store.listings.LosAngeles
        const maxSlideHeight = {maxHeight:"350px", maxWidth:"100%"}
        // const items = SanDiego.SanDiego
        // console.log('store1', SanDiego, LosAngeles )
        // SanDiego.map(function(info,index){
        //     console.log(info,index)
        // })  
        return (
            <div className="container">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img className="d-block w-100" style={maxSlideHeight} src={SanDiego[0].img} alt="First slide" />
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" style={maxSlideHeight} src={SanDiego[1].img} alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" style={maxSlideHeight} src={SanDiego[2].img} alt="Third slide" />
                        </div>
                    </div>
                </div>


                <div>
                    <div className="card-group">
                    {
                        SanDiego.map((info,index,array) => {
                            // console.log(index)
                            if(index < 3){
                                const item = array[index].menu;
                                return <div key={`1${index}`} className="mt-4 card">
                                    <img className="card-img-top img-thumbnail" style={{maxHeight:'250px'}} src={info.img} alt="Food Image" />
                                    <div className="card-body">
                                    <h5 className="card-title">{info.name}</h5>
                                    {
                                        item.map((item,index)=>{
                                            console.log(item,index);
                                            return <p key={index} className="card-text">{item}</p>
                                        })
                                    }
                                    <a href="#" className="btn btn-primary">Order Now</a>
                                    </div>
                                    <div className="card-footer">
                                    <small className="text-muted">{info.eta}</small>
                                    </div>
                                </div>
                            }
                        })
                    }

                        <div className="card-group">
                        {
                        SanDiego.map((info,index,array) => {
                            // console.log(index)
                            if(index > 2){
                                const item = array[index].menu;
                                return <div key={`2${index}`} className="mt-4 card">
                                    <img className="card-img-top img-thumbnail" style={{maxHeight:'250px'}} src={info.img} alt="Food Image" />
                                    <div className="card-body">
                                    <h5 className="card-title">{info.name}</h5>
                                    {
                                        item.map((item,index)=>{
                                            return <p key={`${index}`} className="card-text">{item}</p>
                                        })
                                    }
                                    <a href="#" className="btn btn-primary">Order Now</a>
                                    </div>
                                    <div className="card-footer">
                                    <small className="text-muted">{info.eta}</small>
                                    </div>
                                </div>
                            }
                        })
                    }
                            {/* <div className="mt-4 card">
                                <img className="card-img-top img-thumbnail" src="https://c1.staticflickr.com/9/8236/8381576595_2e2129b848_b.jpg" alt="Food Image" />
                                <div className="card-body">
                                <h5 className="card-title">Title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <a href="#" className="btn btn-primary">Order Now</a>
                                </div>
                                <div className="card-footer">
                                <small className="text-muted">Eta 22min</small>
                                </div>
                            </div>
                            <div className="mt-4 card">
                                <img className="card-img-top img-thumbnail" src="https://c1.staticflickr.com/9/8236/8381576595_2e2129b848_b.jpg" alt="Food Image" />
                                <div className="card-body">
                                <h5 className="card-title">Title</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary">Order Now</a>
                                </div>
                                <div className="card-footer">
                                <small className="text-muted">Eta 22min</small>
                                </div>
                            </div>
                            <div className="mt-4 card">
                                <img className="card-img-top img-thumbnail" src="https://c1.staticflickr.com/9/8236/8381576595_2e2129b848_b.jpg" alt="Food Image" />
                                <div className="card-body">
                                <h5 className="card-title">Title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                <a href="#" className="btn btn-primary">Order Now</a>
                                </div>
                                <div className="card-footer">
                                <small className="text-muted">Eta 22min</small>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}