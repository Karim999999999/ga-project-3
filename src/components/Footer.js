import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navTheme = location.pathname.split('/')[1] || 'home';

  return (
    <header className={`header ${navTheme}`}>
      <div className="container container-grid container-header center-object">
        <Link to="/" className="logo">
          LOGO
        </Link>
      </div>
    </header>
  );
};

export default Footer;
