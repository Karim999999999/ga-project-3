
import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import React from 'react';


import { getUserById } from '../api/auth';

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(async () => {
    if (sessionStorage.getItem('token')) {
      const id = jwtDecode(sessionStorage.getItem('token')).userId;
      const user = await getUserById(id);
      setUser(user);
    }
  }, [user]);
  return (
    <>
      <div>Home</div>
    </>
  );
};

export default Home;
