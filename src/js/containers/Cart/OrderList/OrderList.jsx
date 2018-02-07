import React from 'react';
import {Link} from 'react-router-dom'

export default class OrderList extends React.Component {
    constructor(props) {
        super(props);

        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleMinusClick = this.handleMinusClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

    }

    handleAddClick(event) {
        const { amount, dispatch } = this.props;
        dispatch(addItem(dispatch));

    }

    handleMinusClick(event) {
        const { amount, dispatch } = this.props;
        dispatch(addItem(dispatch));
    }


    handleDelete(event) {
        const { amount, dispatch } = this.props;
        dispatch(addItem(dispatch));
    }


    render() {

        return (

            <div>

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
<ul className="navbar-nav  navbar-right dropdown" >

<li className="nav-item" style={{ marginRight: 60 + "px"}}> 
<a href="#" className="nav-link  ">
<i className="fa fa-shopping-cart fa-2x text-dark" aria-hidden="true" style={{ fontSize: 20 + "px" }}>| Items</i> </a>
 </li>

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


                <div className="container">
                    <h1 style={{ marginTop: 50 + "px" }}>Order</h1>


                    <div className="col">
                        <div className="card  border-info">

                            <div className="card-body pb-2 ">

                                <table className="table table-striped">

                                    <tbody>

                                        <tr>
                                            <td><h4>
                                                <a href="#"><i className="fa fa-times fa-2x text-dark" aria-hidden="true" style={{ fontSize: 25 + "px" }} onClick={this.handleDelete}>
                                                </i></a>   1. House-made Sausage</h4></td>
                                            <td></td>
                                            <td><h4>$4.75</h4></td>
                                            <td></td>
                                            <td ><h4><a href="#"><i className="fa fa-minus fa-lg text-dark" aria-hidden="true" style={{ fontSize: 20 + "px" }} onClick={this.handleMinusClick}>
                                            </i></a> 1 <a href="#"><i className="fa fa-plus fa-lg text-dark" aria-hidden="true" style={{ fontSize: 20 + "px" }} onClick={this.handleAddClick}>
                                            </i></a></h4></td>
                                        </tr>
                                        <tr>
                                            <td><h4><a href="#"><i className="fa fa-times fa-2x text-dark" aria-hidden="true" style={{ fontSize: 25 + "px" }} onClick={this.handleDelete} >
                                            </i></a>  2. Meatballs</h4></td>
                                            <td></td>
                                            <td><h4>$6.75</h4></td>
                                            <td></td>
                                            <td ><h4><a href="#"><i className="fa fa-minus fa-lg text-dark" aria-hidden="true" style={{ fontSize: 20 + "px" }} onClick={this.handleMinusClick}>
                                            </i></a> 1 <a href="#"><i className="fa fa-plus fa-lg text-dark" aria-hidden="true" style={{ fontSize: 20 + "px" }} onClick={this.handleAddClick}>
                                            </i></a></h4></td>
                                        </tr>

                                        <tr>
                                            <td><h4><a href="#"><i className="fa fa-times fa-2x text-dark" aria-hidden="true" style={{ fontSize: 25 + "px" }} onClick={this.handleDelete}>
                                            </i></a> 3. Season Pickles</h4></td>
                                            <td></td>
                                            <td><h4>$7.75</h4></td>
                                            <td></td>
                                            <td ><h4><a href="#"><i className="fa fa-minus fa-lg text-dark" aria-hidden="true" style={{ fontSize: 20 + "px" }} onClick={this.handleMinusClick}>
                                            </i></a> 1 <a href="#"><i className="fa fa-plus fa-lg text-dark" aria-hidden="true" style={{ fontSize: 20 + "px" }} onClick={this.handleAddClick}>
                                            </i></a></h4></td>
                                        </tr>

                                        <tr>
                                            <td><h4> <a href="#"><i className="fa fa-times fa-2x text-dark" aria-hidden="true" style={{ fontSize: 25 + "px" }} onClick={this.handleDelete} >
                                            </i></a> 4. Salad Lyonnaise</h4></td>
                                            <td></td>
                                            <td><h4>$8.75</h4></td>
                                            <td></td>
                                            <td ><h4><a href="#"><i className="fa fa-minus fa-lg text-dark" aria-hidden="true" style={{ fontSize: 20 + "px" }} onClick={this.handleMinusClick}>
                                            </i></a> 1 <a href="#"><i className="fa fa-plus fa-lg text-dark" aria-hidden="true" style={{ fontSize: 20 + "px" }} onClick={this.handleAddClick}>
                                            </i></a></h4></td>
                                        </tr>

                                        <tr>
                                            <td><h4> <a href="#"><i className="fa fa-times fa-2x text-dark" aria-hidden="true" style={{ fontSize: 25 + "px" }} onClick={this.handleDelete}>
                                            </i></a> 5. 16oz beer</h4></td>
                                            <td></td>
                                            <td><h4>$10.75</h4></td>
                                            <td></td>
                                            <td ><h4><a href="#"><i className="fa fa-minus fa-lg text-dark" aria-hidden="true" style={{ fontSize: 20 + "px" }} onClick={this.handleMinusClick}>
                                            </i></a> 1 <a href="#"><i className="fa fa-plus fa-lg text-dark" aria-hidden="true" style={{ fontSize: 20 + "px" }} onClick={this.handleAddClick}>
                                            </i></a></h4></td>
                                        </tr>

                                    </tbody>
                                </table>
                                <div className="card-header  border border-success   " style={{ paddingLeft: 800 + "px" }}>
                                    <h3>Total $39.57</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container" style={{ marginTop: 50 + "px" }}>
                    <h3>Payment Method</h3>

                    <div className="col">

                        <div className="card border-success" style={{ marginBottom: 50 + "px" }}>

                            <div className="card-body">
                                <form className="needs-validation" novalidate>

                                    <div className="form-group">
                                        <select className="custom-select" required>
                                            <option value="">select payment</option>
                                            <option value="1">credit card</option>
                                            <option value="2">stripe</option>

                                        </select>
                                        <div className="invalid-feedback">Select payment type</div>
                                    </div>

                                    <div className="form-row">
                                        <div className="col-md-3 mb-3">
                                            <label htmlfor="validationCustom01">Card name</label>
                                            <input type="text" className="form-control" id="validationCustom01" placeholder="Card name" required />
                                            <div className="valid-feedback">
                                                Looks good!
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="validationCustom02">Card #</label>
                                            <input type="password" className="form-control" id="validationCustom02" placeholder="Card number" required />
                                            <div className="valid-feedback">
                                                Looks good!
                                            </div>
                                        </div>

                                        <div className="col-md-1 mb-3">
                                            <label htmlFor="validationCustom03">CVC </label>
                                            <input type="password" className="form-control" id="validationCustom03" placeholder="cvc #" required />
                                            <div className="valid-feedback">
                                                Looks good!
                                                </div>
                                        </div>
                                    </div>


                                    <h4>Billing Info</h4>


                                    <div className="form-row">
                                        <div className="col-md-12 mb-3">
                                            <label htmlFor="validationServer07">Address</label>
                                            <input type="text" className="form-control " id="validationServer07" placeholder="Address" required />
                                            <div className="invalid-feedback">
                                                Please provide a valid address.
                                                      </div>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="validationServer08">City</label>
                                            <input type="text" className="form-control" id="validationServer08" placeholder="City" required />
                                            <div className="invalid-feedback">
                                                Please provide a valid city.
                                                  </div>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer09">State</label>
                                            <input type="text" className="form-control" id="validationServer09" placeholder="State" required />
                                            <div className="invalid-feedback">
                                                Please provide a valid state.
                                                  </div>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationServer10">Zip</label>
                                            <input type="text" className="form-control" id="validationServer10" placeholder="Zip" required />
                                            <div className="invalid-feedback">
                                                Please provide a valid zip.
                                                  </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                            <label className="form-check-label" htmlFor="invalidCheck">
                                                Agree to terms and conditions
                                            </label>
                                            <div className="invalid-feedback">
                                                You must agree before submitting.
                                            </div>
                                        </div>
                                    </div>
                                    <Link to={`/thankyou`} className="btn btn-lg btn-primary">Buy Now</Link>
                                </form>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
