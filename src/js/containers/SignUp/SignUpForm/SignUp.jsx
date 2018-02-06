import React from 'react';
import { Redirect, Link } from 'react-router-dom'
import { getUser, saveUser, checkValidation } from './signupActions'
import axios from 'axios'

export default class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.State = {
            isValid: true,
            owner: false,   
            communicationError: false
            }
        this.handleUserValidation = this.handleUserValidation.bind(this)
        this.handleChange = this.handleChange.bind(this);    
    }

handleChange(event) {
     const target = event.target;
     const value = target.value;
     const name = target.name;
     
     this.setState({
         [name]: value
        }, function(){
     });
 }

 handleUserValidation(e){
  e.preventDefault() 
     const { dispatch } = this.props;
     const { postResults } = this.props;

        const userInfo = {
              "firstName":this.state.firstName,
              "lastName": this.state.lastName,
              "email": this.state.email,
              "password": this.state.password,
              "password2": this.state.password2,
              "phoneNumber": this.state.phoneNumber,
              "owner": this.state.owner,
              "address": this.state.address,
              "postResults": postResults
         }  

    // Axios call to DB and store for new User
  
    
    if(userInfo.password === userInfo.password2 && userInfo.owner != undefined){   
            axios.post('http://localhost:5000/api/users',{
               first_name: userInfo.firstName,
               last_name: userInfo.lastName,
               email: userInfo.email,
               home_address: userInfo.address,
               password: userInfo.password,
               phone_number: userInfo.phoneNumber,
               owner: userInfo.owner,
               emailVerified: true,
             })
             .then(function (response) {
               dispatch(saveUser(response))           
             })
             .catch(function (error) {
                this.setState({
                    communicationError: true
                })
                dispatch(saveUserFailed(error))
             })
               dispatch(getUser(userInfo)); 
            
         }else{
            dispatch(checkValidation(userInfo))
         }

     }
        
render (){
    const { communicationError } = this.props
    const { userSaved } = this.props;
    const { owner } = this.props;
    const { isValid } = this.props;
    console.log(this.props)
    return (
    <div className = "SignUpForm "> 
        <header ><h1 className= "text-center p-3 graduate about-text" >OnTrack Entrees Sign Up form</h1></header>
        <div class="card">
        <div class="card-block text-center">
        <form onSubmit = {this.handleUserValidation} className="container text-center">
         {isValid ? '': <div className="alert alert-danger" role="alert">
          <strong>Oh snap!</strong> Password is not matching or Please choose one option for owner inquiry.
          </div> }
            <div className="form-group text-center">
            <label htmlFor="firstName" >First Name</label>
                <input onChange = {this.handleChange} name="firstName" className="form-control" type="text" id="firstName" />
            </div>
            <div className="form-group text-center">
            <label htmlFor="lastName" >Last Name</label>
                <input onChange = {this.handleChange} name="lastName" className="form-control" type="text"  id="lastName" />
            </div>
            <div className="form-group text-center">
                <label htmlFor="email">Email address</label>
                <input onChange = {this.handleChange} name="email"  type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" Name="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group text-center" >
                <label htmlFor="password">Password</label>
                <input onChange = {this.handleChange} name="password"  type="password" className="form-control" id="password" placeholder="Password" />
            </div>
            <div className="form-group text-center">
                <label htmlFor="password2">Please Confirm Password</label>
                <input onChange = {this.handleChange} name="password2" type="password" className="form-control" id="password2" placeholder="Confirm Password" />
            </div> 
            <div className="form-group text-center">
            <label htmlFor="phoneNumber" className="col-2 col-form-label">Phone Number</label>
                <input  onChange = {this.handleChange} name="phoneNumber"  className="form-control" type="tel" id="phoneNumber" />
            </div>
            <div className="form-group text-center">
                <label htmlFor="owner">Restaurant Owner?</label>
                <select onChange = {this.handleChange} value={owner} name="owner" className="form-control" id="owner">
                <option> Select One </option>
                <option value="true">True</option>
                <option value="false">False</option>
                </select>
            </div>
            <div  className="form-group text-center">
                <label htmlFor="address">Address</label>
                <textarea onChange = {this.handleChange} name="address" className="form-control" id="address" rows="2"></textarea>
                <h6 className="p-2">By Submiting you are agreeing to our<button type="button" className="btn btn-link p-2" data-toggle="modal" data-target="#exampleModalLong">terms and service.</button></h6>
            </div>
            
            <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Terms And Service</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                USER AGREEMENT 
                This Web site is sponsored by OnTrack LLC as a service to its customers, shareholders and the general public.  Access to and use of this Web site and any other Web site that is owned or operated by Potlatch or its subsidiaries are subject to the terms set forth in this Web site terms of use.  Reference to "this Web site" includes this Web site and any other Web site that is owned or operated by Potlatch or its subsidiaries.  BY ACCESSING AND USING ANY PART OF THIS WEB SITE, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS AND EXPRESSLY AGREE AND CONSENT TO BE BOUND BY ALL OF THE TERMS AND CONDITIONS IN THIS WEB SITE TERMS OF USE.  IF YOU DO NOT AGREE TO ALL OF THE TERMS, PLEASE PROMPTLY EXIT THE SITE AND YOU MAY NOT ACCESS OR USE ANY PART OF THE WEB SITE.  POTLATCH RESERVES THE RIGHT TO MODIFY THESE TERMS AT ANY TIME AND YOU AGREE TO BE BOUND BY SUCH MODIFICATIONS OR REVISIONS.
               <b> BY AGREEING YOU GIVE UP YOUR RIGHT TO EAT, SLEEP, AND TALK UNDER PENAL CODE 1337</b>
                COPYRIGHT NOTICE
                This Web site, including all text and graphics, the selection, arrangement, and presentation of all materials (including information in the public domain), and the overall design are protected by copyright and other intellectual property laws.  Potlatch hereby authorizes you to view, copy, print, and distribute the documents, related graphics and materials published by Potlatch on this Web site subject to the following conditions:
                BY AGREEING WE GET ACCESS TO ALL YOUR CHILDREN
                use is for informational, non-commercial purposes only;
                the material may not be modified in any way;
                no graphics available from this Web site may be used separate from the accompanying text;
                no unauthorized copy may be made of any Potlatch trademark; and
                any copy of any portion of the material must contain the following copyright notice: Copyright © 2007 Potlatch Corporation. All rights reserved.
                Modification of the documents, related graphics and materials or use of the documents, related graphics and materials for any other purpose is a violation of Potlatch's copyright and other intellectual property rights.  The use of any documents, related graphics and materials from this Web Site on any other Web Site or any networked computer environment is prohibited.  

                OWNERSHIP OF MATERIALS
                Any product, process or technology described in this Web Site may be the subject of other intellectual property rights reserved by Potlatch.  Nothing contained under this Web site terms of use shall be construed as conferring by implication, estoppel or otherwise any license or right under any patent, trademark or other intellectual property right of Potlatch or any third party.  Except as expressly provided above, nothing contained herein shall be construed as conferring any license or right under any Potlatch copyright.  Any rights not expressly granted herein are reserved.

                TRADEMARKS
                Potlatch, the Potlatch logo, and other names of Potlatch and Potlatch products referenced in this Web site are registered trademarks or other trademarks, service marks or trade names of Potlatch Corporation.  No license to use any of these trademarks is given or implied.  Potlatch's trademarks may be used only with permission from Potlatch.  All other trademarks or trade names referenced on this Web site are the property of their respective owners.

                DISCLAIMER
                ALL MATERIALS IN THIS WEB SITE ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, WHETHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, POTLATCH DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, INFRINGEMENT OR OTHERWISE. POTLATCH DOES NOT WARRANT THAT THE WEB SITE OR THE FUNCTIONS CONTAINED IN THE MATERIALS WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THIS WEB SITE OR THE SERVER(S) THAT MAKES THIS WEB SITE AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. POTLATCH DOES NOT WARRANT OR MAKE ANY REPRESENTATIONS REGARDING THE USE OR THE RESULTS OF THE USE OF THE MATERIALS IN THIS WEB SITE IN TERMS OF THEIR CORRECTNESS, ACCURACY, RELIABILITY, OR OTHERWISE. THE MATERIALS ON THIS WEB SITE ARE PROVIDED FOR INFORMATIONAL PURPOSES ONLY. POTLATCH DOES NOT REPRESENT OR WARRANT THAT ANY MATERIAL IN THIS WEB SITE IS CORRECT, COMPE, OR UP-TO-DATE. POTLATCH MAY CHANGE OR DELETE MATERIAL ON THIS WEB SITE WITHOUT NOTICE AT ANY TIME. USE OF THESE MATERIALS IS AT THE USER'S OWN RISK. ELECTRONIC MAIL SENT TO THIS SITE ON THE INTERNET IS NOT SECURE, AND USERS SHOULD AVOID SENDING SENSITIVE OR CONFIDENTIAL INFORMATION IN UNENCRYPTED MESSAGES.

                LIMITATION OF LIABILITY
                IN NO EVENT SHALL POTLATCH, ITS SUBSIDIARIES, AFFILIATES, AGENTS, REPRESENTATIVES OR LICENSEES BE LIABLE FOR ANY SPECIAL, INCIDENTAL, INDIRECT, CONSEQUENTIAL, SPECIAL, PUNITIVE OR ANY OTHER DAMAGES, INCLUDING BUT NOT LIMITED TO LOST PROFITS, LOSS OF USE, LOSS OF DATA OR INFORMATION, BUSINESS INTERRUPTION OR ANY OTHER DAMAGES ARISING OUT OF OR CONNECTED TO THE AVAILABILITY, USE, RELIANCE ON OR LIABILITY TO USE OF THIS WEB SITE OR USE OF ANY MATERIAL FROM THIS WEB SITE, OR ARISING OUT OF OR CONNECTED TO ANY ACTION TAKEN IN RESPONSE TO OR AS A RESULT OF ANY INFORMATION CONTAINED IN THIS WEB SITE. IN NO EVENT SHALL POTLATCH'S TOTAL LIABILITY FOR CLAIMS, DAMAGES AND CAUSES OF ACTION, WHETHER IN CONTRACT, TORT OR OTHERWISE, EXCEED THE AMOUNT PAID BY THE USER, IF ANY, FOR ACCESSING THIS WEB SITE.

                LINKS TO OTHER MATERIALS
                This Web site may contain links to other resources or Web sites on the Internet ("Third Party Sites").  Third Party Sites are not under the control of Potlatch and Potlatch is not responsible for the content of any Third Party Sites.  Potlatch reserves the right to terminate any link or linking program at any time. Links are provided as aids to help identify and locate other Internet resources of interest.  They are not intended to state or imply that Potlatch sponsors, endorses or is affiliated or associated with the owners or publishers of such resources, or that Potlatch is legally authorized to use any trade name, trademark, logo, legal or official seal, or copyrighted symbol that may be reflected in the Third Party Sites.  If you decide to access any of the Third Party Sites linked to this Web Site, you do so entirely at your own risk.

                JURISDICTION AND APPLICABLE LAWS
                This Web site terms of use shall be governed by and construed in accordance with the laws of the State of Washington, without giving effect to any principles of conflicts of law.  You agree that any action at law or in equity arising out of or relating to these terms shall be filed only in the state or federal courts located in Spokane County, Washington and you hereby consent and submit to the personal jurisdiction of such courts for the purposes of litigating any such action.

                Potlatch makes no representation that the materials in the Web Site are appropriate or available for use in other locations, and access to them from territories where their content is illegal is prohibited.  Those who choose to access this Web Site from other locations do so on their own initiative and are responsible for compliance with applicable local laws.  You may not use or export any materials from this Web site in violation of U.S. export laws and regulations.

                GENERAL
                Potlatch may revise these Web site terms of use at any time by updating this posting.  You should visit this Web site from time to time to review the then-current Web site terms of use because they are binding on you.  Certain provisions of the Web site terms of use may be superseded by expressly designated legal notices or terms located on particular pages at this Web site.  You agree that your accessing and using this Web site is the functional equivalent of your signature and you hereby waive any objection to electronic assent to this agreement, whether based on the Statute of Frauds or similar law, rule, or regulation.  If any provision of these terms shall be unlawful, void, or for any reason unenforceable, then that provision shall be deemed severable from these terms and shall not affect the validity and enforceability of any remaining provisions
                </div>
                </div>
            </div>
            </div>
            <button type="submit"  className="btn btn-primary text-center m-3">Submit</button>
              {userSaved ?   <Redirect to="/"/> :''}      
            </form>
        </div>
    </div>   
</div>
        
    )
}/*End of of Render Component */
} /*End of React Component*/