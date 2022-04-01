import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getAthletesMedicalIncidentsPrivate } from '../../../../api/athletes';

function AllMedicalIncidentsforAthlete() {
  const { athleteId } = useParams();
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
  return (
    <div className="table-and-controller">
      <h1> MEDICAL INCIDENTS HISTORY </h1>
      {!tableData ? (
        <h1>...Loading</h1>
      ) : (
        <div className="table">
          {tableData.map((medicalIncident) => (
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
        </div>
      )}
    </div>
  );
}

export default AllMedicalIncidentsforAthlete;
