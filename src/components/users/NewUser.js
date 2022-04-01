/* eslint-disable no-unused-vars */

import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../api/user';

const NewUserForm = () => {
  const navigate = useNavigate();

  const [form, setForm] = React.useState({});

  const handleChange = (event) => {
    console.log(handleChange);
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  function handleSubmit(event) {
    event.preventDefault();

    const getData = async () => {
      try {
        await createUser(form);
        navigate('manage/users');
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }

  return (
    <section className='section'>
      <div className='container container-main'>
        <div>
          <h1>NEW USER</h1>
        </div>
        <div>
          <form action='form' className='form'>
            <div>
              <label htmlFor='first-name'>FIRST NAME</label>
              <input type='text' name='first-name' id='first-name' />
            </div>
            <div>
              <label htmlFor="'last-name">LAST NAME</label>
              <input type='text' name='last-name' id='last-name' />
            </div>
            <div>
              <label htmlFor='email'>EMAIL ADDRESS</label>
              <input type='email' name='email' id='email' />
            </div>
            <div>
              <label htmlFor='phone-number'>PHONE NUMBER</label>
              <input
                type='tel'
                name='phone'
                id='phone'
                pattern='[0-9]{5}-[0-9]{3}-[0-9]{3}'
              />
            </div>
            <div>
              <label htmlFor='password'>PASSWORD</label>
              <input type='password' name='password' id='password' />
            </div>
            <div>
              <label htmlFor='password'>CONFIRM PASSWORD</label>
              <input type='password' name='confirm-password' />
            </div>
            <div>
              <label htmlFor='checkbox'>PRIVILEGES</label>
            </div>
            <div>
              <input type='checkbox' name='admin' id='admin' />
              <label htmlFor='admin'>ADMIN</label>
            </div>
            <div>
              <input type='checkbox' name='writer' id='writer' />
              <label htmlFor='writer'>WRITER</label>
            </div>
            <div>
              <input type='checkbox' name='editor' id='editor' />
              <label htmlFor='editor'>EDITOR</label>
            </div>
            <div>
              <input type='checkbox' name='coach' id='coach' />
              <label htmlFor='coach'>COACH</label>
            </div>
            <div>
              <input type='checkbox' name='athlete' id='athlete' />
              <label htmlFor='athlete'>ATHLETE</label>
            </div>
            <Link className='btn' to='/status'>
              CREATE USER
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewUserForm;
