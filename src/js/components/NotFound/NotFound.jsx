
// import React from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
   <div className= 'p-3 mb-5 bg-success text-white notfounderror'>   
    <div className ='container'>
      <h1 className="display-1">404</h1>
      <h1 className="display-5">Whoopsss! Something went wrong.</h1>
      <p>
        This page is not available. Click back to return home. 
      </p>
      <Link to='/'>
      <button type="button" className="btn btn-secondary">Go Back</button>
      </Link>
      <img className='img-responsive mx-auto d-block' src= 'https://data.whicdn.com/images/132849199/original.png' width="30%" height="30%" />
    </div>
    </div>
  );
};
export default NotFound;