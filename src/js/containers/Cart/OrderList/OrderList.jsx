import React from 'react';


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
                <nav className="navbar navbar-expand-lg navbar-light bg-success">
                    <a className="navbar-brand nav-item active" href="#" style={{ fontFamily: 'Arvo' + 'serif', fontSize: 30 + "px" }}>OnTrack Entrees
            <i className="fa fa-train" aria-hidden="true"></i>
                        <span className="sr-only">(current)</span>
                    </a>
                    <form className="form-inline my-2 my-lg-0" style={{ marginLeft: 50 + "px" }}>
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-dark my-2 my-sm-0 " type="submit">Search</button>
                    </form>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-right" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item" style={{ marginLeft: 925 + "px", paddingTop: 10 + "px" }}>
                                <a href="#">
                                    <i className="fa fa-shopping-cart fa-2x text-dark" aria-hidden="true" style={{ fontSize: 25 + "px" }}>| Items</i>
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
                                </div>
                            </li>
                        </ul>
                    </div>
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
                                                </i></a>   1. Carne Asada Fries </h4></td>
                                            <td></td>
                                            <td><h4>$8.75</h4></td>
                                            <td></td>
                                            <td ><h4><a href="#"><i className="fa fa-minus fa-lg text-dark" aria-hidden="true" style={{ fontSize: 20 + "px" }} onClick={this.handleMinusClick}>
                                            </i></a> 1 <a href="#"><i className="fa fa-plus fa-lg text-dark" aria-hidden="true" style={{ fontSize: 20 + "px" }} onClick={this.handleAddClick}>
                                            </i></a></h4></td>
                                        </tr>
                                        <tr>
                                            <td><h4><a href="#"><i className="fa fa-times fa-2x text-dark" aria-hidden="true" style={{ fontSize: 25 + "px" }} onClick={this.handleDelete} >
                                            </i></a>  2. Pollo Asada Burrito</h4></td>
                                            <td></td>
                                            <td><h4>$8.75</h4></td>
                                            <td></td>
                                            <td ><h4><a href="#"><i className="fa fa-minus fa-lg text-dark" aria-hidden="true" style={{ fontSize: 20 + "px" }} onClick={this.handleMinusClick}>
                                            </i></a> 1 <a href="#"><i className="fa fa-plus fa-lg text-dark" aria-hidden="true" style={{ fontSize: 20 + "px" }} onClick={this.handleAddClick}>
                                            </i></a></h4></td>
                                        </tr>

                                        <tr>
                                            <td><h4><a href="#"><i className="fa fa-times fa-2x text-dark" aria-hidden="true" style={{ fontSize: 25 + "px" }} onClick={this.handleDelete}>
                                            </i></a> 3. Carne Asada Tacos</h4></td>
                                            <td></td>
                                            <td><h4>$8.75</h4></td>
                                            <td></td>
                                            <td ><h4><a href="#"><i className="fa fa-minus fa-lg text-dark" aria-hidden="true" style={{ fontSize: 20 + "px" }} onClick={this.handleMinusClick}>
                                            </i></a> 1 <a href="#"><i className="fa fa-plus fa-lg text-dark" aria-hidden="true" style={{ fontSize: 20 + "px" }} onClick={this.handleAddClick}>
                                            </i></a></h4></td>
                                        </tr>

                                        <tr>
                                            <td><h4> <a href="#"><i className="fa fa-times fa-2x text-dark" aria-hidden="true" style={{ fontSize: 25 + "px" }} onClick={this.handleDelete} >
                                            </i></a> 4. Chimichanga</h4></td>
                                            <td></td>
                                            <td><h4>$8.75</h4></td>
                                            <td></td>
                                            <td ><h4><a href="#"><i className="fa fa-minus fa-lg text-dark" aria-hidden="true" style={{ fontSize: 20 + "px" }} onClick={this.handleMinusClick}>
                                            </i></a> 1 <a href="#"><i className="fa fa-plus fa-lg text-dark" aria-hidden="true" style={{ fontSize: 20 + "px" }} onClick={this.handleAddClick}>
                                            </i></a></h4></td>
                                        </tr>

                                        <tr>
                                            <td><h4> <a href="#"><i className="fa fa-times fa-2x text-dark" aria-hidden="true" style={{ fontSize: 25 + "px" }} onClick={this.handleDelete}>
                                            </i></a> 5. Fish Burrito</h4></td>
                                            <td></td>
                                            <td><h4>$8.75</h4></td>
                                            <td></td>
                                            <td ><h4><a href="#"><i className="fa fa-minus fa-lg text-dark" aria-hidden="true" style={{ fontSize: 20 + "px" }} onClick={this.handleMinusClick}>
                                            </i></a> 1 <a href="#"><i className="fa fa-plus fa-lg text-dark" aria-hidden="true" style={{ fontSize: 20 + "px" }} onClick={this.handleAddClick}>
                                            </i></a></h4></td>
                                        </tr>

                                    </tbody>
                                </table>
                                <div className="card-header  border border-success   " style={{ paddingLeft: 800 + "px" }}>
                                    <h3>Total $69.57</h3>
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
                                            <label htmlfor="validationCustom02">Card #</label>
                                            <input type="password" className="form-control" id="validationCustom02" placeholder="Card number" required />
                                            <div className="valid-feedback">
                                                Looks good!
                                            </div>
                                        </div>

                                        <div className="col-md-1 mb-3">
                                            <label htmlfor="validationCustom03">CVC </label>
                                            <input type="password" className="form-control" id="validationCustom03" placeholder="cvc #" required />
                                            <div className="valid-feedback">
                                                Looks good!
                                                </div>
                                        </div>
                                    </div>


                                    <h4>Billing Info</h4>


                                    <div className="form-row">
                                        <div className="col-md-12 mb-3">
                                            <label htmlfor="validationServer07">Address</label>
                                            <input type="text" className="form-control " id="validationServer07" placeholder="Address" required />
                                            <div className="invalid-feedback">
                                                Please provide a valid address.
                                                      </div>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlfor="validationServer08">City</label>
                                            <input type="text" className="form-control" id="validationServer08" placeholder="City" required />
                                            <div className="invalid-feedback">
                                                Please provide a valid city.
                                                  </div>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlfor="validationServer09">State</label>
                                            <input type="text" className="form-control" id="validationServer09" placeholder="State" required />
                                            <div className="invalid-feedback">
                                                Please provide a valid state.
                                                  </div>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlfor="validationServer10">Zip</label>
                                            <input type="text" className="form-control" id="validationServer10" placeholder="Zip" required />
                                            <div className="invalid-feedback">
                                                Please provide a valid zip.
                                                  </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                            <label className="form-check-label" htmlfor="invalidCheck">
                                                Agree to terms and conditions
                                            </label>
                                            <div className="invalid-feedback">
                                                You must agree before submitting.
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-success" type="submit"  > Buy Now</button>
                                </form>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
