import React from 'react';

import {
    loginClick
} from './loginActions';


export default class Login extends React.Component {
    constructor (props){
        super(props);

this.handleEmailInput = this.handleEmailInput.bind(this);
this.handleLoginClick = this.handleLoginClick.bind(this);

    }
  
  

handleEmailInput(event){
    const {dispatch} = this.props;
    const {value} = e.target;
    dispatch(loginEmail(value));
}
handlePasswordInput(event){
    const {dispatch} = this.props;
    const {value} = e.target;
    dispatch(loginEmail(value));
}


  handleLoginClick(){
      const {dispatch, loginInput} = this.props;
      dispatch(loginClick(loginInput));

  }
  
    render() {
    
    return (

    <div >
      <nav className="navbar navbar-toggleable-md navbar-light bg-success">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>


        <a className="navbar-brand nav-item active" href="#" style={{ fontFamily: 'Arvo' + 'serif', fontSize: 30 + "px" }}>OnTrack Entrees
         <i className="fa fa-train" aria-hidden="true" style={{marginLeft:10 + 'px'}}></i>
          <span className="sr-only">(current)</span>
        </a>

        
         <li style={{display:"inline", marginLeft:50 + "px"}}> <input className="form-control mr-sm-2" type="text" placeholder="Search" style={{paddingLeft: 100 + 'px', paddingRight: 100 + 'px'}} /></li>
        <li style={{display:"inline"}}>  <button className="btn bg-inverse text-white my-2 my-sm-0" type="submit">Search</button> </li>


        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">

            <li className="nav-item" style={{ marginLeft: 925 + "px", paddingTop: 10 + "px" }}>
              <a href="#">
                <i className="fa fa-shopping-cart fa-2x text-dark" style={{ fontSize: 25 + "px" }}>| Items</i>
              </a>
            </li>
          

            <li className="nav-item dropdown" style={{ marginLeft: 25 + "px" }}>
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false">
                <i className="fa fa-user-circle-o fa-2x text-dark" style={{ fontSize: 25 + "px" }} aria-hidden="true"> Account</i>
              </a>
              
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Account Setting</a>
                <a className="dropdown-item" href="#">Order History</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Log Out</a>

                <div className="form-group text-center ">
                                <label htmlfor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control"  onChange={this.handleEmailInput} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div className="form-group text-center">
                                <label htmlfor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control"  onChange={this.handlePasswordInput} id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <div className="text-center">
                                <button type="submit" className="btn btn-primary text-center" onClick={this.handleLoginClick} >Log In</button>
                            </div>
              </div>
              
            </li>
          </ul>
        </div>
      </nav>
    </div>










  )
}
}