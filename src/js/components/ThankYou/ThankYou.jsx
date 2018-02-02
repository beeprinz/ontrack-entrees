import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className= 'p-3 mb-5 thankyoubody'>   
    <div className ='container'>
      <h1 className="display-5">Your Order is Complete!</h1>
      <p>
        The restaurant has received your order and we will notify you when the order has been picked up by a driver! 
      </p>
      <Link to='/'>
      <button type="button" className="btn btn-success">Back Home</button>
      </Link>
      <img className='img-responsive mx-auto d-block' src= 'https://d30y9cdsu7xlg0.cloudfront.net/png/973466-200.png' />
    </div>
    </div>
  );
};
export default ThankYou;