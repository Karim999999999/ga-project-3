import React from 'react';
import { useParams } from 'react-router-dom';
import { getApprovedAthletesById } from '../../api/athletes';

import JoinBtn from './JoinBtn';

const SingleAthlete = () => {
  function capetalizeString(string) {
    const wordToCapetalize = string;
    const CapetalizeTheWord =
      wordToCapetalize.charAt(0).toUpperCase() + wordToCapetalize.slice(1);
    return CapetalizeTheWord;
  }
  const { athleteId } = useParams();
  const [athlete, setAthlete] = React.useState([]);
  React.useEffect(() => {
    const getData = async () => {
      const athleteData = await getApprovedAthletesById(athleteId);
      setAthlete(athleteData);
    };

    getData();
  }, []);

  console.log('ATHLETES ARE', athlete);

  return (
    <>
      <div className="section-is-half">
        <div className="is-one-third">
          <div className="content center-object">
            <img
              src="https://via.placeholder.com/300x400"
              alt="athlete image"
            />
          </div>
        </div>
        <div className="is-two-thirds">
          <div className="content">
            <h2>ATHLETE PROFILE:</h2>
            <p>
              <b>First Name:</b> {capetalizeString(`${athlete.firstName}`)}
            </p>
            <p>
              <b>Last Name:</b> {capetalizeString(`${athlete.lastName}`)}
            </p>
            <p>
              <b>Date of Birth:</b> {athlete.dateOfBirth}
            </p>
            <p>
              <b>Phone Number:</b> {athlete.phone}
            </p>
            <p>
              <b>Email:</b> {athlete.email}
            </p>
            <p>
              <b>City:</b> {capetalizeString(`${athlete.city}`)}
            </p>
            <p>
              <b>Gender:</b> ={capetalizeString(`${athlete.gender}`)}
            </p>
            <p>
              <b>Height:</b> {athlete.height}{' '}
            </p>
            <p>
              <b>Weight:</b> {athlete.weight}{' '}
            </p>
            <p>
              <b>Marital Status:</b> {athlete.maritalStatus}{' '}
            </p>
            <p>
              <b>Employment Status:</b> {athlete.employmentStatus}{' '}
            </p>
            <p>
              <b>Year Started Cycling:</b> {athlete.yearStartedCycling}{' '}
            </p>
            <p>
              <b>Previous Sporting Experience:</b>{' '}
              {capetalizeString(`${athlete.previousSportingExpirience}`)}
            </p>
            <p>
              <b>Injury:</b> {capetalizeString(`${athlete.injury}`)}
            </p>
            <p>
              <b>Biography:</b> {capetalizeString(`${athlete.biography}`)}
            </p>
          </div>
        </div>
      </div>

      <div className="center">
        <JoinBtn />
      </div>
    </>
  );
};

export default SingleAthlete;
