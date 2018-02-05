import React from "react";
import { Link } from "react-router-dom";

export default class HistoryList extends React.Component {

// renderHistory() {
//     const { history } = this.props
//     if (!history.length) { return null or you have no previous orders }
//     return history.map((city, index) => {
//         return <a href="#" key={index} className="list-group-item list-group-item-action">{city.cityName} <p className='small'>{city.dateCalendar} {city.dateHour}</p></a>
//     })
// }

// const HistoryList = () => {
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
    
    // <div>
    //   <div className="p-5 m-5">
    //     <h1 className="display-5">Orderss</h1>

    //     <ul className="list-group">
    //       <li className="list-group-item">
    //         <p>Lolitas</p>{" "}
    //         <p className="small">1 carne asada burrito 1 small coke </p>
    //         <p className="small">Total: $8.95</p>
    //       </li>

    //       <li className="list-group-item">Morbi leo risus</li>
    //       <li className="list-group-item">Porta ac consectetur ac</li>
    //       <li className="list-group-item">Vestibulum at eros</li>
    //     </ul>
    //   </div>
    // </div>
<div>
     <div className="p-5 m-5">
      <h1 className="display-5">Order History</h1>

      <div className="list-group col-8">
  
  <a href="#" className="list-group-item list-group-item-action">1/18/18<br/>Lolitas<br /><br />1 Carne Asada Burrito<br />1 small coke</a>
  <h5 className='py-2'>Total: $9.50</h5>
  <a href="#" className="list-group-item list-group-item-action">1/18/18<br/>Urbn Pizza<br /><br />1 Large Pepperoni Pizza<br />1 breadsticks</a>
  <h5 className='py-2'>Total: $16.35</h5>
  <a href="#" className="list-group-item list-group-item-action">12/21/18<br/>Sushi Ninja<br /><br />1 Rainbow Roll<br/>1 Tiger Roll</a>
  <h5 className='py-2'>Total: $22.80</h5>

</div>

      </div>
      </div>
  );
}
};