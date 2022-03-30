import React from 'react';
import { Link } from 'react-router-dom';

function ManageHome() {
  return (
    <div>
      <h1>Welcome to Manage</h1>
      <p>Manage is your one stop portal for all of your team needs.</p>
      <div className='apps-dashboard-container'>
        <Link to='/manage/articles/'>
          <div className='app-button-container'>
            <div className='app-icon' id='sessions-app'></div>
            <h4>ARTICLES</h4>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ManageHome;
