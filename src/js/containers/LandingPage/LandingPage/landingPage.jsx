import React from 'react'
import { 
    getLogInput, updateLogInput
} from './landingpageActions'
import { Redirect } from 'react-router-dom'
import  { updateSearch, getSearch, fetchRestaurants, getGoogleSearch, selectPrediction, debounce } from '../SearchBar/searchbarActions'

// import SearchBar from '../Searchbar/SearchBar'

export default class landingPage extends React.Component {
    constructor(props) {
        super(props);

        this.handleLogInput = this.handleLogInput.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

// Romers Login handleEvent functions (start)

    handleLogInput(event){
        event.preventDefault()
        // console.log('it should render')
        const { dispatch , email , password  } = this.props;
        console.log(email,password)
        console.log(this.props+"this . props ")
        dispatch(getLogInput(email,password)); 
    }

// Need to work on the button to save email and password.
// Need to create authentication login.
    handleChange(event){
       
        const {dispatch} = this.props
        const name = event.target.name
        const value = event.target.value;
        dispatch(updateLogInput({ [name]: value}))
    }

    componentWillReceiveProps() {
        if (!!this.props.userToken) return <Redirect to="/restaurant/:id" />
        
    }
    
























    render() {
      

        const { email , password, userToken } = this.props;

        return (
    <div className="andrew-body">
       
            <div className="pimg1">
            <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-landingpage">
            <a className="navbar-brand navbar-brand-landingpage" href="#">OnTrack Entrees <i className="fa fa-train" aria-hidden="true"></i></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav mr-auto">
            
                </ul>
                <ul className="navbar-nav dropdown" >
                <li classname="nav-item nav-item-dropdown dropdown navbar-right "  style = {{marginRight:60+"px"}}>
                        <a className="nav-link nav-item-dropdown dropdown-toggle item"  id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Login or Signup
                        </a>
                        <div className="dropdown-menu l " aria-labelledby="navbarDropdownMenuLink navbar-spacing">
                        <a className="dropdown-item text-center" href="/login"> login </a>
                    <hr />
                    <a className="dropdown-item text-center" href="/signup">Sign Up</a>
                    </div>
                </li>
            </ul>
            </div>
            </nav>
            <div className="pimg1"></div>
            












            
    <section className="section section-light">
        <h2 style={{marginLeft:40+"px"}} >Explore Cities <i className="fa fa-building-o" aria-hidden="true"></i></h2>
        <hr />
        <div className="row ">
            <div className="col-2"><a className="btn btn-success btn-lg m-4" href="#" role="button">San Diego</a></div>
            <div className="col-2"><a className="btn btn-success btn-lg m-4" href="#" role="button">Los Angeles</a></div>
            <div className="col-2"><a className="btn btn-success btn-lg m-4" href="#" role="button">San Francisco</a></div>
            <div className="col-2"><a className="btn btn-success btn-lg m-4" href="#" role="button">New York</a></div>
            <div className="col-2"><a className="btn btn-success btn-lg m-4" href="#" role="button">Boston</a></div>
            <div className="col-2"><a className="btn btn-success btn-lg m-4" href="#" role="button">Mami</a></div>
            </div>
        <div className="row ">
            <div className="col-2"><a className="btn btn-success btn-lg m-4" href="#" role="button">Austin</a></div>
            <div className="col-2"><a className="btn btn-success btn-lg m-4" href="#" role="button">Chicago</a></div>
            <div className="col-2"><a className="btn btn-success btn-lg m-4" href="#" role="button">Houston</a></div>
            <div className="col-2"><a className="btn btn-success btn-lg m-4" href="#" role="button">Denver</a></div>
            <div className="col-2"><a className="btn btn-success btn-lg m-4" href="#" role="button">Portland</a></div>
            <div className="col-2"><a className="btn btn-success btn-lg m-4" href="#" role="button">Seattle</a></div>
        </div>
        <h2 style={{marginLeft:40+"px"}}>About Us <i className="fa fa-id-card" aria-hidden="true"></i></h2>
        <hr />
        <div className="card">
            <div className="about-text card-block">
                OnTrack Entrees is transforming the way goods move around cities by enabling anyone to have anything delivered on-demand. Our revolutionary Urban Logistics platform connects customers with local couriers who can deliver anything from any store or restaurant in minutes. We empower communities to shop local with no waiting,
                and empower businesses through our API to offer delivery.
            </div>
            </div>
    </section>            
            </div>  
        </div>       
        )
    }
}
