import React from 'react';
import Table from '../Components/Table';
import { Link } from 'react-router-dom';


function Admin() {
  return (
    <div className="admin-container">
      <div className="container">
        {/* Introductory Content */}
        <div className="admin-intro">
          <h2>Welcome to the Admin Panel</h2>
          <p>Manage your car listings, holiday packages, and tour packages easily from here.</p>
        </div>

        {/* Admin Options (Row-wise structure) */}
        <div className="admin-panel">
          {/* <div className="admin-option">
            <Link to='/table'>
              <button className="btn  admin-button">Create Car</button>
            </Link>
          </div> */}
          <div className="admin-option">
            <Link to='/holiday'>
              <button className="btn  admin-button btn2">Holiday Package</button>
            </Link>
          </div>
          <div className="admin-option">
            <Link to='/tour'>
              <button className="btn  admin-button">Tour Package</button>
            </Link>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Admin;
