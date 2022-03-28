import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navTheme = location.pathname.split('/')[1];

  const toggleHamburger = () => setIsMenuOpen(isMenuOpen ? false : true);

  return (
    <header className={`header ${navTheme}`}>
      <div className='container container-grid container-header'>
        <Link to='/' className='logo'>
          LOGO
        </Link>
        <div
          className={`menu-btn ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleHamburger}
        >
          <div className='menu-btn__lines'></div>
        </div>
        <nav className={`main-navigation ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link className='menu-item' to='/about'>
                About
              </Link>
            </li>
            <li className='active'>
              <Link className='menu-item' to='/athletes'>
                Team
              </Link>
            </li>
            <li>
              <Link className='menu-item' to='/discover'>
                Articles
              </Link>
            </li>
            <li>
              <Link className='menu-item' to='#'>
                Manage
              </Link>
            </li>
          </ul>
          <Link to='#' className='menu-item btn btn-support'>
            Support us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
