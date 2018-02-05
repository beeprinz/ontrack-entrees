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

           
            <div >
      <nav className="navbar navbar-toggleable-md navbar-light bg-success">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>


        <a className="navbar-brand nav-item active" href="#" style={{ fontFamily: 'Arvo' + 'serif', fontSize: 30 + "px" }}>OnTrack Entrees
         <i className="fa fa-train" aria-hidden="true"></i>
          <span className="sr-only">(current)</span>
        </a>

        <form className="form-inline" style={{ marginLeft: 50 + "px" }}>
          <input className="form-control mr-sm-2" type="text" placeholder="Search" />
          <button className="btn bg-inverse text-white my-2 my-sm-0" type="submit">Search</button>
        </form>

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
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
        );
    }
}
