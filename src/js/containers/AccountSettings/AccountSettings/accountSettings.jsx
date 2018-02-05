
import React from 'react';
// import { Redirect, Link } from 'react-router-dom'
import { fetchUser } from './accountSettingActions';
import axios from 'axios'

export default class AccountSettings extends React.Component {
    constructor(props){
        super(props);
      
        // this.State = {
        //     isValid: true,
        //     owner: false,   
        //     communicationError: false
        //     }
        // this.handleUserValidation = this.handleUserValidation.bind(this)
        // this.handleChange = this.handleChange.bind(this);    
    }
    componentDidMount() {
        const { id }  = this.props.login.id;
        dispatch(fetchUser(id))
             }
// handleChange(event) {
//      const target = event.target;
//      const value = target.value;
//      const name = target.name;
     
//      this.setState({
//          [name]: value
//         }, function(){
//      });
//  }

//  handleUserChanges(e){
//   e.preventDefault() 
//      const { dispatch } = this.props;
//      const { postResults } = this.props;

//         const newUserInfo = {
//               "firstName":this.state.firstName,
//               "lastName": this.state.lastName,
//               "email": this.state.email,
//               "password": this.state.password,
//               "password2": this.state.password2,
//               "phoneNumber": this.state.phoneNumber,
//               "owner": this.state.owner,
//               "address": this.state.address,
//               "postResults": postResults
//          }  

//     // Axios call to DB and store for new User
  
    
//     if(userInfo.password === userInfo.password2 && userInfo.owner != undefined){   
//             axios.put('http://localhost:3000/api/users/${ID}',{
//                first_name: newUserInfo.firstName,
//                last_name: userUserInfo.lastName,
//                email: newUserInfo.email,
//                home_address: newUserInfo.address,
//                password: newUserInfo.password,
//                phone_number:newUserInfo.phoneNumber,
//                owner: newUserInfo.owner,
//                emailVerified: true,
//              })
//              .then(function (response) {
//                dispatch(saveUser(response))           
//              })
//              .catch(function (error) {
//                 this.setState({
//                     communicationError: true
//                 })
//                 dispatch(saveUserFailed(error))
//              })
//                dispatch(updateUser(newUserInfo)); 
            
//          }else{
//             dispatch(checkValidation(userInfo))
//          }

//      }
        
render (){
    // const { communicationError } = this.props
    // const { userSaved } = this.props;
    // const { owner } = this.props;
    // const { isValid } = this.props;
    
    return (
    <div className = "AccountSettings"> 
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded navbar-account">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
        <a className="navbar-brand navbar-brand-account" href="/">OnTrack Entrees <i className="fa fa-train" aria-hidden="true"></i></a>
        <ul className="navbar-nav mr-auto">
        
        <li className="nav-item ">
        <form className="form-inline">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
        </form>
        </li>
        </ul>
        <ul className="navbar-nav dropdown" >
            
        <li classname="nav-item nav-item-dropdown dropdown navbar-right"  style = {{marginRight:60+"px"}}>
            <a className="nav-link nav-item-dropdown dropdown-toggle"  id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fa fa-user"></i> Account 
            </a>
            <div className="dropdown-menu " style = {{marginRight: 30 +"px"}} aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
            </div>
        </li>
        </ul>
    </nav>

        <div className="jumbotron">
        <h1 className="display-3 text-center">Hello, User</h1>
        <p className="lead text-center">Welcome to your account settings, here you can change your information and check your order history</p>
        <hr className="my-4" />
        <div className="caxrd">
        <div className="card-bloxck text-center">
        <form onSubmit = {this.handleUserValidation} className="container text-center">
            <div class="form-group text-center">
                <label class=" col-form-label">First Name</label>
                     <p class="form-control-static">TEST FIRSTNAME</p>
            </div>
            <div class="form-group text-center">
                <label class="col-form-label">Last Name</label>
                     <p class="form-control-static">TEST LASTNAME</p>
            </div>
            <div className="form-group text-center">
                <label htmlFor="email">Email address</label>
                <input onChange = {this.handleChange} name="email"  type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" Name="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group text-center">
            <label htmlFor="phoneNumber" className="col-2 col-form-label">Phone Number</label>
                <input  onChange = {this.handleChange} name="phoneNumber"  className="form-control" type="tel" id="phoneNumber" />
            </div>
            <div class="form-group text-center">
                <label class="col-sm-2 col-form-label">Resturants Owner</label>
                     <p class="form-control-static">Owner</p>
            </div>
            <div  className="form-group text-center">
                <label htmlFor="address">Address</label>
                <textarea onChange = {this.handleChange} name="address" className="form-control" id="address" rows="2"></textarea>
              
            </div>
            <button type="submit"  className="btn btn-primary text-center m-3">Save</button>
              {/* {userSaved ?   <Redirect to="/resturantDetail"/> :''}       */}
            </form>


        </div>
    </div>    
    <hr />
        <p className="lead text-center">
            <a className="btn btn-primary btn-lg text-center" href="#" role="button">Order History</a>
        </p>
        </div>
</div>
        
    )
}/*End of of Render Component */
} /*End of React Component*/