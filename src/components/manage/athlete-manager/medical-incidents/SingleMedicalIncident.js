import React from 'react';
// import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getMedicalIncidentByIDPrivate } from '../../../../api/athletes.js';

function SingleMedicalIncident() {
  const [athleteMedicalIncident, setAthleteMedicalIncident] =
    React.useState('');
  const { athleteId, medicalIncidentId } = useParams();
  console.log(athleteId);

  React.useEffect(() => {
    const getData = async () => {
      const athleteMedicalIncident = await getMedicalIncidentByIDPrivate(
        athleteId,
        medicalIncidentId
      );
      setAthleteMedicalIncident(athleteMedicalIncident);
    };
    getData();
  }, []);

  return <h1> {athleteMedicalIncident} </h1>;
}

export default SingleMedicalIncident;
