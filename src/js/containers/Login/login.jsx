import React from 'react';
import { Redirect, Link } from 'react-router-dom'
import { logUserIn, userError } from './loginActions'
import axios from 'axios'

export default class LogIn extends React.Component {
    constructor(props){
        super(props);
        this.State = {
                email: '',
                password: '',
            }
        this.handleUserInput = this.handleUserInput.bind(this)  
        this.handleOnChange = this.handleOnChange.bind(this)
    }

    handleUserInput(event){
        const { dispatch } = this.props;
        const { value } = event.target
        event.preventDefault()
        const userLoginInfo = {
            "email": this.state.email,
            "password": this.state.password
        }
        console.log(userLoginInfo)
        if (userLoginInfo.email =! ''){
            axios.post('http://localhost:3000/api/users/login',{
                "email": userLoginInfo.email,
                "password": userLoginInfo.password
            }).then(function (response) {
                this.setState({email:'',password:''})
                console.log (" THIS IS RESPONSE DATA  + " + response.Data)
                dispatch(logUserIn(response.Data))          
              })
              .catch(function (error) {
                dispatch(userError(userLoginInfo))
                 })
            
        }else{
            dispatch(userError(userLoginInfo))
        }
    }

    handleOnChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log(this.state)
        this.setState({
            [name]: value
           })

    }
render (){
    console.log(this.props)
    return (
        <div className= "login">
            <div className="container">
            <form onSubmit= {this.handleUserInput} >
                <div className="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="email" onChange={this.handleOnChange} name ="email" className="form-control" id="inputEmail3" placeholder="Email" />
                </div>
                </div>
                <div className="form-group row">
                <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                    <input type="password"  onChange={this.handleOnChange} name="password" className="form-control" id="inputPassword3" placeholder="Password" />
                </div>
                </div>
                <div className="form-group row">
                <div className="offset-sm-2 col-sm-10">
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
                </div>
            </form>
        </div>
        </div>
    )
}



}