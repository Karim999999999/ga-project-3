/* eslint-disable no-unreachable */
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  editAthleteDetailsbyIdPrivate,
  getAthletesByIdPrivate,
} from '../../../../api/athletes';

const ChangeApplicationStatusForm = () => {
  const navigate = useNavigate();
  function setSelected(optionValue, athleteData) {
    if (optionValue === athleteData) {
      return true;
    }
  }
  const [athlete, setAthlete] = React.useState('');
  const { athleteId } = useParams();

  React.useEffect(() => {
    const getData = async () => {
      const athlete = await getAthletesByIdPrivate(athleteId);
      setAthlete(athlete);
    };
    getData();
    console.log(athlete);
  }, []);

  const [form, setForm] = React.useState({});
  const handleChange = (event) => {
    console.log(handleChange);
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log(form);
    console.log(athleteId);
    const getData = async () => {
      try {
        console.log(form);
        await editAthleteDetailsbyIdPrivate(athleteId, form);
        console.log('SUCCESS');
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }

  return (
    <div>
      <section className="section">
        <div className="container container-main">
          <form onSubmit={() => handleSubmit} className="form">
            <h1>EDIT APPLICATION STATUS</h1>
            <div>
              <label htmlFor="applicationStatus">Application Status</label>
              <select
                name="applicationStatus"
                onChange={handleChange}
                defaultValue={athlete.applicationStatus}
                value={form.applicationStatus}
              >
                <option></option>
                <option
                  value="approved"
                  selected={setSelected('approved', athlete.applicationStatus)}
                >
                  APPROVED
                </option>
                <option
                  value="unreviewed"
                  selected={setSelected(
                    'unreviewed',
                    athlete.applicationStatus
                  )}
                >
                  UNREVIEWED
                </option>
                <option
                  value="rejected"
                  selected={setSelected('rejected', athlete.applicationStatus)}
                >
                  REJECTED
                </option>
                <option
                  value="reserve"
                  selected={setSelected('reserve', athlete.applicationStatus)}
                >
                  RESERVE
                </option>
              </select>
            </div>
            <div className="formfield">
              <button type="submit" className="button" onClick={handleSubmit}>
                CHANGE APPLICATION STATUS
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ChangeApplicationStatusForm;
