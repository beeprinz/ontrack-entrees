import React from 'react'

import { 
    getLogInput
} from './landingpageActions'

export default class landingPage extends React.Component {
    constructor(props) {
        super(props);
      
       
        this.handleLogInput = this.handleLogInput.bind(this);
        this.handleChange = this.handleChange.bind(this);
        // this.handleLogClick = this.handleLogClick.bind(this);
    }

// Romers Login handleEvent functions (start)

    handleLogInput(e){
        console.log(value,'it should render')
        const { dispatch } = this.props;
        const { value } = target.value;
        const userInput = {
            "email": this.state.email,
            "password": this.state.password
        }
       e.preventDefault()
        dispatch(getLogInput(userInput)); 
        
    }
    handleChange(e){
        const target= event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }
    // handleLogClick(){
    //     const {dispatch,userInput} = this.props;
    //     dispatch(getLogInput(userInput));
    // }



    // (end)

    // handleSignUpButton(event){
    //     const { dispatch } = this.props;
    //     const { value } = event.target;
            
    // }
    // handleSearchUpButton(event){
    //     const { dispatch } = this.props;
    //     const { value } = event.target 
    // }
    // handleDefault(event){

    //     const { dispatch } = this.props;

    //     const { value } = event.target;

      
    // }
    
    render() {
        
        return (
    <div className="andrew-body">
        <div className="landingPage">
            <div className="pimg1">
            <div id="app" class="container">
            <nav className="navbar navbar-landingpage navbar-toggleable-md navbar-light bg-faded">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand navbar-brand-landingpage" href="#">OnTrack Entrees <i className="fa fa-train" aria-hidden="true"></i></a>
                <ul className="navbar-nav mr-auto">         
                </ul>
                <ul className="navbar-nav dropdown" >
                <li classname="nav-item nav-item-dropdown dropdown navbar-right "  style = {{marginRight:60+"px"}}>
                        <a className="nav-link nav-item-dropdown dropdown-toggle item"  id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Login or Signup
                        </a>
                        <div className="dropdown-menu l " aria-labelledby="navbarDropdownMenuLink navbar-spacing">
                            <form onSubmit = {this.handleLogInput}className="mx-2 ">
                                <div className="form-group text-center ">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleChange}/>
                                </div>
                                <div className="form-group text-center">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"  onChange={this.handleChange}/>
                                </div>
                                <div className="text-center">
                                <button type="submit" className="btn btn-primary text-center" >Log In</button>
                            </div>
                        </form>
                    <hr />
                    <a className="dropdown-item text-center" href="/signup"> or Sign Up</a>
                    </div>
                </li>
            </ul>
            </nav>
            </div>
   
                </div>
                
<div className="pimg1"></div>   
    <div className="ptext container navbar-spacing">
        <span className="border navbar-spacing">
            <div className="center"><muted>Enter an Address</muted></div>
                <div className="input-group navbar-spacing">
                    <input type="text" className="form-control" placeholder="Enter Address" />
{/* INSERT SEARCH BAR FUNCTIONALITY */}                    <span className="input-group-btn">
                    <a onClick=""> <button className="btn btn-secondary" type="button">Search <i className="fa fa-location-arrow" aria-hidden="true"></i> </button></a>
                </span>
            </div>
        </span>
    </div>
              
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
        <div className="about-text card-block p-2">
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
