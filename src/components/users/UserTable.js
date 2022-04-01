import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getAllUsers } from '../../api/user';

const UserTable = () => {
  const [users, setUsers] = React.useState(null);

  const { status } = useParams();
  console.log(status);
  React.useEffect(() => {
    const getData = async () => {
      const users = await getAllUsers();
      console.log(users);
      setUsers(users);
    };

    getData();
  }, []);
  console.log('USERS ARE', users);

  function handleChange(event) {
    event.preventDefault();
  }

  return (
    <div>
      <h1>USER TABLE</h1>
      {/* <div className='search'>
        <label htmlFor='search'>SEARCH USER</label>
        <input
          type='search'
          id='search'
          onChange={handleChange}
          value={search}
          placeholder='Search users...'
        /> */}
      {/* </div> */}
      {!users ? (
        <h1>...Loading</h1>
      ) : (
        <div className='table'>
          {users.map((user) => (
            <div className='table-card' key={user._id}>
              <div className='table-item' id='title'>
                <h1>{user._id}</h1>
              </div>
              <div className='table-item' id='viewbutton'>
                <Link className='button' to='#'>
                  view
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserTable;
