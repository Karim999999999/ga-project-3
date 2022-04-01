import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {
  getAthletesAttendancePrivate,
  getAthletesByIdPrivate,
  getAthletesMedicalIncidentsPrivate,
} from '../../../api/athletes';
function AthleteManager() {
  function capetalizeString(string) {
    const wordToCapetalize = string;
    const CapetalizeTheWord =
      wordToCapetalize.charAt(0).toUpperCase() + wordToCapetalize.slice(1);
    return CapetalizeTheWord;
  }
  const [athlete, setAthlete] = React.useState('');
  const { athleteId } = useParams();
  console.log(athleteId);

  React.useEffect(() => {
    const getData = async () => {
      const athlete = await getAthletesByIdPrivate(athleteId);
      setAthlete(athlete);
    };
    getData();
  }, []);

  const [tableData, setTableData] = React.useState([]);
  console.log(athleteId);
  React.useEffect(() => {
    const getData = async () => {
      const medicalIncidents = await getAthletesMedicalIncidentsPrivate(
        athleteId
      );
      setTableData(medicalIncidents);
    };

    getData();
  }, [athleteId]);

  const [tableData2, setTableData2] = React.useState([]);
  console.log(athleteId);
  React.useEffect(() => {
    const getData = async () => {
      const athleteSessions = await getAthletesAttendancePrivate(athleteId);
      setTableData2(athleteSessions);
    };

    getData();
  }, [athleteId]);
  console.log('ATHLETES Medical INCIDENTS ARE', tableData);
  console.log('ATHLETES SESSIONS ARE', tableData2);

  return (
    <div className="athlete-profile-page">
      <div className="athleteProfile">
        <div className="profile-header">
          <div className="athlete-controller">
            <Link className="button" to={`/manage/athlete/${athlete._id}/edit`}>
              EDIT DETAILS
            </Link>
            <Link
              className="button"
              to={`/manage/athlete/${athlete._id}/editstatus`}
            >
              CHANGE STATUS
            </Link>
          </div>
          <div className="full-name center-object">
            <h1>
              {capetalizeString(`${athlete.firstName}`)}{' '}
              {capetalizeString(`${athlete.lastName}`)}
            </h1>
            <p id="applicationStatus">{athlete.applicationStatus}</p>
          </div>
        </div>
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
      </div>
      <div className="section-is-half">
        <div className="is-half">
          <div className="table-and-controller">
            <h1> Session Attendance </h1>
            {!tableData ? (
              <h1>...Loading</h1>
            ) : (
              <div className="table">
                {tableData.slice(0, 4).map((session) => (
                  <div className="table-card" key={session._id}>
                    <div className="table-item" id="title">
                      {/* <h1>{athlete.firstName}</h1> */}
                    </div>
                    <div className="table-item" id="date"></div>
                    {/* <p>{athlete.applicationStatus}</p> */}
                    <div className="table-item" id="viewbutton">
                      <Link
                        className="button"
                        to={`/api/athlete/${athleteId}/medical-incident/${session._id}`}
                      >
                        view
                      </Link>
                    </div>
                  </div>
                ))}
                <Link
                  className="button"
                  to={`/manage/athlete/${athleteId}/sessions`}
                >
                  + VIEW ALL SESSIONS
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="is-half">
          <div className="table-and-controller">
            <h1> Medical Incidents </h1>
            {!tableData2 ? (
              <h1>...Loading</h1>
            ) : (
              <div className="table">
                {tableData2.slice(0, 4).map((medicalIncident) => (
                  <div className="table-card" key={medicalIncident._id}>
                    <div className="table-item" id="title">
                      {/* <h1>{athlete.firstName}</h1> */}
                    </div>
                    <div className="table-item" id="date"></div>
                    {/* <p>{athlete.applicationStatus}</p> */}
                    <div className="table-item" id="viewbutton">
                      <Link
                        className="button"
                        to={`/api/athlete/${athleteId}/medical-incident/${medicalIncident._id}`}
                      >
                        view
                      </Link>
                    </div>
                  </div>
                ))}
                <Link
                  className="button"
                  to={`/manage/athlete/${athleteId}/medical-incidents`}
                >
                  + VIEW ALL MEDICAL INCIDENTS
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AthleteManager;
