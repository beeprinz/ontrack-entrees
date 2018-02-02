import React from 'react';
import { Link } from 'react-router-dom';

export default class HistoryList extends React.Component {

// renderHistory() {
//     const { history } = this.props
//     if (!history.length) { return null or you have no previous orders }
//     return history.map((city, index) => {
//         return <a href="#" key={index} className="list-group-item list-group-item-action">{city.cityName} <p className='small'>{city.dateCalendar} {city.dateHour}</p></a>
//     })
// }
    
render() {

    // const{history} =this.props;
    // console.log('history props', this.props)

    
    return (
    
    //     <div className="card border-primary">
    //         <h5 className="card-header bg-primary text-white">
    //         Search History
    //         </h5>
    //         <div className="card-body">
    //         <div className="list-group">
    //             {this.renderHistory()}
    //         </div>
    //     </div>
    //   </div>
<div>
{/* <nav className="navbar navbar-toggleable-md navbar-light bg-faded ">
                <a className="navbar-brand" href="#">OnTrack Entrees <i className="fa fa-train" aria-hidden="true"></i></a>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    <li className="nav-item dropdown navbar-right item">
                        <a className="nav-link  dropdown-toggle dropdown-toggle-split item" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sign Up or Login
                        </a>
                        <div className="dropdown-menu  " aria-labelledby="navbarDropdownMenuLink navbar-spacing">
                            <form className="mx-2 ">
                                <div className="form-group text-center ">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div className="form-group text-center">
                                <label htmlFor="exampleInputPassword1">Password</label>
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
                </nav> */}

<nav className="navbar navbar-toggleable-md navbar-light bg-success">
  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <a className="navbar-brand" href="#">OnTrack Entrees <i className="fa fa-train" aria-hidden="true"></i></a>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
      <button className="btn bg-inverse text-white my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>

  <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">Action</a>
    <a className="dropdown-item" href="#">Another action</a>
    <a className="dropdown-item" href="#">Something else here</a>
  </div>
</div>

</nav>

<div className= 'p-5 m-5'>
<h1 className="display-5">Orderss</h1>

<ul className="list-group">
  <li className="list-group-item"><p>Lolitas</p> <p className='small'>1 carne asada burrito 1 small coke </p><p className='small'>Total: $8.95</p></li>
  <li className="list-group-item">Morbi leo risus</li>
  <li className="list-group-item">Porta ac consectetur ac</li>
  <li className="list-group-item">Vestibulum at eros</li>
</ul>
</div>

</div>
    );
}
}