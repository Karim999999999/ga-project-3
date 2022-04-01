import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getAthletesByStatusPrivate } from '../../../api/athletes.js';
function AthleteTable() {
  const [tableData, setTableData] = React.useState([]);
  const { status } = useParams();
  console.log(status);
  React.useEffect(() => {
    const getData = async () => {
      const athletes = await getAthletesByStatusPrivate(status);
      setTableData(athletes);
    };

    getData();
  }, [status]);

  console.log('ATHLETES ARE', tableData);

  function capetalizeString(string) {
    const wordToCapetalize = string;
    const CapetalizeTheWord =
      wordToCapetalize.charAt(0).toUpperCase() + wordToCapetalize.slice(1);
    return CapetalizeTheWord;
  }
  const pageLocation = location.pathname;
  console.log(location.pathname);
  function handleForm(athleteId) {
    if (pageLocation === '/manage/athletes/stat/approved') {
      return `/manage/athlete/${athleteId}`;
    }
    if (pageLocation === '/manage/athletes/stat/unreviewed') {
      return `/manage/athlete/${athleteId}`;
    }
    if (pageLocation === '/manage/athletes/stat/reserve') {
      return `/manage/athlete/${athleteId}`;
    }
    if (pageLocation === '/manage/athletes/stat/rejected') {
      return `/manage/athlete/${athleteId}`;
    }
  }

  return (
    <div className="table-and-controller">
      <div className="table-controller">
        <Link className="button" to="/manage/athletes/stat/approved">
          APPROVED
        </Link>
        <Link className="button" to="/manage/athletes/stat/unreviewed">
          NEW APPLICATION
        </Link>
        <Link className="button" to="/manage/athletes/stat/reserve">
          RESERVE
        </Link>
        <Link className="button" to="/manage/athletes/stat/rejected">
          REJECTED
        </Link>
      </div>
      <h1 className="table-title"> {status.toUpperCase()} ATHLETES </h1>

      {!tableData ? (
        <h1>...Loading</h1>
      ) : (
        <div className="table">
          {tableData.map((athlete) => (
            <div className="table-card" key={athlete.firstName}>
              <div className="table-combined-items" id="tableitem1">
                <h1>{capetalizeString(athlete.firstName)}</h1>
                <h1>{capetalizeString(athlete.lastName)}</h1>
              </div>
              <div className="table-combined-items" id="tableitem2">
                <p>{capetalizeString(athlete.applicationStatus)}</p>
              </div>
              <div className="table-item" id="tableitem3">
                <Link className="table-button" to={handleForm(athlete._id)}>
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AthleteTable;
