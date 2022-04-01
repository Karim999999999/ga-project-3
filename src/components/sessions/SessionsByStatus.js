import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUserById } from '../../api/auth';
import { getSessionsByStatus } from '../../api/manage';
import TableSessions from './TableSessions';

const SessionsByStatus = () => {
  const { status } = useParams();
  console.log(status);

  const [sessions, setSessions] = useState(null);

  useEffect(async () => {
    const userLogged = await getUserById(userId);
    setUser(userLogged);
  }, []);

  useEffect(() => {
    getSessionsByStatus(status).then(sessions => setSessions(sessions));
  }, [status]);

  console.log(sessions);

  return (
    <section className='section'>
      <h1>Sessions with status {status}</h1>
      {!sessions ? <p>Loading...</p> : <TableSessions tableData={sessions} />}
    </section>
  );
};

export default SessionsByStatus;
