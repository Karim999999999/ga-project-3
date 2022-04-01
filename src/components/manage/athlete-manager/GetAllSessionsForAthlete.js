import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getAthletesAttendancePrivate } from '../../../api/athletes';

function GetAllSessionsForAthlete() {
  const { athleteId } = useParams();
  const [tableData, setTableData] = React.useState([]);
  console.log(athleteId);
  React.useEffect(() => {
    const getData = async () => {
      const attendance = await getAthletesAttendancePrivate(athleteId);
      setTableData(attendance);
    };

    getData();
  }, [athleteId]);
  return (
    <div className="table-and-controller">
      <h1> ATHLETES ATTENDANCE RECORD </h1>
      {!tableData ? (
        <h1>...Loading</h1>
      ) : (
        <div className="table">
          {tableData.map((session) => (
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
        </div>
      )}
    </div>
  );
}

export default GetAllSessionsForAthlete;
