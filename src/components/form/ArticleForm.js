/* eslint-disable no-unreachable */
import React from 'react';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ArticleForm = () => {
  const navigate = useNavigate();
  const categories = ['Cycling 101', 'Life in the city'];

  const [form, setForm] = React.useState({
    title: '',
    body: '',
  });

  const handleChange = (event) => {
    console.log(handleChange);
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  function handleSubmit(event) {
    event.preventDefault();

    const getData = async () => {
      try {
        const forms = await navigate('/');
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }

  return (
    <div>
      <h1>CREATE NEW FORM</h1>

      <div>
        <label htmlFor='form-title'>FORM TITLE</label>
      </div>
      <div>
        <input name='title' type='text' onChange={handleChange} />
      </div>
      <div>
        <label htmlFor='form-body'>FORM BODY</label>
      </div>
      <div>
        <textarea
          name='form-body'
          id='form-body'
          cols='40'
          rows='10'
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <label htmlFor='categories'>CATEGORIES</label>
      </div>
      <div>
        <select name='categories' id='categories' onChange={handleChange}>
          {categories.map((category) => (
            <option key={category}> {category} </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor='action-buttons'>ACTION BUTTON SPACE</label>
      </div>
      <div>
        <button type='submit' className='action1' onClick={handleSubmit}>
          Action 1
        </button>
        <button type='submit' className='action2'>
          Action 2
        </button>
      </div>
    </div>
  );
};

export default ArticleForm;
