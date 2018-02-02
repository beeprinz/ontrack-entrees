import React from 'react'

export default class landingPage extends React.Component {
    constructor(props) {
        super(props);
       
        this.handleLogInInput = this.handleLogInInput.bind(this);
        this.handleSignUpButton = this.handleSignUpButton.bind(this);
        this.handleSearchUpButton = this.handleSearchUpButton.bind(this)
        this.handleDefault = this.handleDefault.bind(this);
    }


    handleLogInInput(event){
        const { dispatch } = this.props;
        const { value } = event.target;

        dispatch(get(value));
    }

    handleSignUpButton(event){
        const { dispatch } = this.props;
        const { value } = event.target;
            
    }
    handleSearchUpButton(event){
        const { dispatch } = this.props;
        const { value } = event.target 
    }
    handleDefault(event){

        const { dispatch } = this.props;

        const { value } = event.target;

      
    }
    render() {
        return (
    <div className="andrew-body">
        <div className="landingPage">
            <div className="pimg1">
                <nav className="navbar navbar-toggleable-md navbar-light bg-faded ">
                <a className="navbar-brand" href="#">OnTrack Entrees <i className="fa fa-train" aria-hidden="true"></i></a>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    <li style={{marginLeft: 900 +'px'}} className="nav-item dropdown navbar-right item">
                        <a className="nav-link  dropdown-toggle dropdown-toggle-split item" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sign Up or Login
                        </a>
                        <div className="dropdown-menu l " aria-labelledby="navbarDropdownMenuLink navbar-spacing">
                            <form className="mx-2 ">
                                <div className="form-group text-center ">
                                <label htmlfor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div className="form-group text-center">
                                <label htmlfor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <div className="text-center">
                                <button type="submit" className="btn btn-primary text-center">Log In</button>
                            </div>
                            </form>
                            <hr />
                        <a className="dropdown-item text-center" href="/signup"> or Sign Up</a>
                        </div>
                    </li>
                    </ul>
                </div>
                </nav>
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
