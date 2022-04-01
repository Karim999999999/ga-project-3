import React from 'react';
import { Link } from 'react-router-dom';

function ManageHome() {
  return (
    <section className='section'>
      <div>
        <h1>Welcome to Manage</h1>
        <p>Manage is your one stop portal for all of your team needs.</p>
        <div className='apps-dashboard-container container-flex'>
          <Link to='/manage/articles/' className='articles'>
            <div className='app-button-container'>
              <div className='app-icon' id='sessions-app'></div>
              <h4>Articles</h4>
            </div>
          </Link>
          <Link to='/manage/sessions/' className='sessions'>
            <div className='app-button-container'>
              <div className='app-icon' id='sessions-app'></div>
              <h4>Sessions</h4>
            </div>
          </Link>
          <Link to='/manage/athletes/' className='athletes'>
            <div className='app-button-container'>
              <div className='app-icon' id='sessions-app'></div>
              <h4>Athletes</h4>
            </div>
          </Link>
          <Link to='/manage/users/addUser' className='users'>
            <div className='app-button-container'>
              <div className='app-icon' id='sessions-app'></div>
              <h4>Users</h4>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ManageHome;
