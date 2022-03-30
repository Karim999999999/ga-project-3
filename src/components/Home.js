import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

import { getUserById } from '../api/auth';

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(async () => {
    if (localStorage.getItem('token')) {
      const id = jwtDecode(localStorage.getItem('token')).userId;
      const user = await getUserById(id);
      setUser(user);
    }
  }, [user]);

  return <>{user ? <h1>Hello {user.firstName}</h1> : <div>Home</div>}</>;
};

export default Home;
