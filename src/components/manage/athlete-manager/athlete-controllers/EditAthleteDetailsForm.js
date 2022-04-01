import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  editAthleteDetailsbyIdPrivate,
  getAthletesByIdPrivate,
} from '../../../../api/athletes.js';
import { useParams } from 'react-router-dom';

function EditAthleteForm() {
  function setSelected(optionValue, athleteData) {
    if (optionValue === athleteData) {
      return true;
    }
    // get the innerHtml of the option that the function has been envoked on.
    // compare the innerHtml=athlete.propertyValue
    // if they are equal, then return selected
    // else // if innerHtml='pick an option, then return selected.
  }
  const [athlete, setAthlete] = React.useState('');
  const { athleteId } = useParams();

  React.useEffect(() => {
    const getData = async () => {
      const athlete = await getAthletesByIdPrivate(athleteId);
      setAthlete(athlete);
    };
    getData();
  }, []);

  const [form, setForm] = React.useState({
    firstName: athlete.firstName,
    lastName: athlete.lastName,
    dateOfBirth: athlete.dateOfBirth,
    phone: athlete.phone,
    email: athlete.email,
    city: athlete.city,
    gender: athlete.gender,
    height: athlete.height,
    weight: athlete.weight,
    yearStartedCycling: athlete.yearStartedCycling,
    previousSportingExperience: athlete.previousSportingExperience,
    injury: athlete.injury,
    biography: athlete.biography,
    maritalStatus: athlete.maritalStatus,
    employmentStatus: athlete.employmentStatus,
    applicationStatus: athlete.applicationStatus,
  });

  const handleChange = (event) => {
    console.log(form);
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log(form);
    const getData = async () => {
      try {
        await editAthleteDetailsbyIdPrivate(form, athleteId);
        // navigate('/');
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }
  const fiftyYearsAgo = new Date().getFullYear() - 50;
  function generateYearsBetween(
    startYear = parseFloat(fiftyYearsAgo),
    endYear
  ) {
    const endDate = endYear || new Date().getFullYear();
    const years = [];
    for (var i = startYear; i <= endDate; i++) {
      years.push(startYear);
      startYear++;
    }
    return years;
  }

  const yearsArray = generateYearsBetween();
  return (
    <div>
      <section className="section">
        <div className="container container-main">
          <form onSubmit={handleSubmit} className="form">
            <h1>EDIT ATHLETE FORM</h1>
            <div className="formfield">
              <label htmlFor="firstName">First Name</label>
              <input
                name="firstName"
                type="text"
                onChange={handleChange}
                onLoad={handleChange}
                placeholder="John"
                defaultValue={athlete.firstName}
              />
            </div>
            <div className="formfield">
              <label htmlFor="lastName">Last Name</label>
              <input
                name="lastName"
                type="lastName"
                onChange={handleChange}
                onLoad={handleChange}
                placeholder="Smith"
                defaultValue={athlete.lastName}
              />
            </div>
            <div className="formfield">
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <input
                name="dateOfBirth"
                type="date"
                onChange={handleChange}
                onLoad={handleChange}
                defaultValue={athlete.dateOfBirth}
              />
            </div>
            <div className="formfield">
              <label htmlFor="phone">Phone Number</label>
              <input
                name="phone"
                type="number"
                onChange={handleChange}
                onLoad={handleChange}
                placeholder="0097250XXXXXXX"
                defaultValue={athlete.phone}
              />
            </div>
            <div className="formfield">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                onChange={handleChange}
                onLoad={handleChange}
                placeholder="user@usermail.com"
                defaultValue={athlete.email}
              />
            </div>
            <div className="formfield">
              <label htmlFor="city">City</label>
              <select
                name="city"
                onChange={handleChange}
                onLoad={handleChange}
                defaultValue={athlete.city}
              >
                <option></option>
                <option
                  value="New York"
                  selected={setSelected('New York', athlete.city)}
                >
                  New York
                </option>
                <option
                  value="Georgia"
                  selected={setSelected('Georgia', athlete.city)}
                >
                  Georgia
                </option>
                <option
                  value="London"
                  selected={setSelected('London', athlete.city)}
                >
                  London
                </option>
                <option
                  value="jordan"
                  selected={setSelected('jordan', athlete.city)}
                >
                  jordan
                </option>
              </select>
            </div>
            <div className="formfield">
              <label htmlFor="maritalStatus">Marital Status</label>
              <select
                name="maritalStatus"
                onChange={handleChange}
                onLoad={handleChange}
                defaultValue={athlete.maritalStatus}
              >
                <option></option>
                <option
                  value="Married"
                  selected={setSelected('Married', athlete.maritalStatus)}
                >
                  Married
                </option>
                <option
                  value="Single"
                  selected={setSelected('Married', athlete.maritalStatus)}
                >
                  Single
                </option>
              </select>
            </div>
            <div className="formfield">
              <label htmlFor="employmentStatus">Employment Status</label>
              <select
                name="employmentStatus"
                onChange={handleChange}
                onLoad={handleChange}
                defaultValue={athlete.employmentStatus}
              >
                <option></option>
                <option
                  selected={setSelected('Unemployed', athlete.employmentStatus)}
                  value="Unemployed"
                ></option>
                <option
                  selected={setSelected(
                    'Part Time Employment',
                    athlete.employmentStatus
                  )}
                  value="Part Time Employment"
                >
                  Part Time Employment
                </option>
                <option
                  selected={setSelected(
                    'Full Time Employment',
                    athlete.employmentStatus
                  )}
                  value="Full Time Employment"
                >
                  Full Time Employment
                </option>
                <option
                  selected={setSelected(
                    'Gig Economy',
                    athlete.employmentStatus
                  )}
                  value="Gig Economy"
                >
                  Gig Economy
                </option>
              </select>
            </div>
            <div className="formfield">
              <label htmlFor="gender">Gender</label>
              <select
                name="gender"
                onChange={handleChange}
                onLoad={handleChange}
                defaultValue={athlete.gender}
              >
                <option></option>
                <option
                  selected={setSelected('Male', athlete.gender)}
                  value="Male"
                >
                  Male
                </option>
                <option
                  selected={setSelected('Female', athlete.gender)}
                  value="Female"
                >
                  Female
                </option>
              </select>
            </div>
            <div className="formfield">
              <label htmlFor="height">Height (cm)</label>
              <input
                name="height"
                type="number"
                onChange={handleChange}
                onLoad={handleChange}
                placeholder="170"
                defaultValue={athlete.height}
              />
            </div>
            <div className="formfield">
              <label htmlFor="weight">Weight (kgs)</label>
              <input
                name="weight"
                type="number"
                onChange={handleChange}
                onLoad={handleChange}
                placeholder="80"
                defaultValue={athlete.weight}
              />
            </div>
            <div className="formfield">
              <label htmlFor="yearStartedCycling">title</label>
              <select
                name="yearStartedCycling"
                onChange={handleChange}
                onLoad={handleChange}
                defaultValue={athlete.yearStartedCycling}
              >
                <option></option>
                {yearsArray.map((year) => (
                  <option
                    selected={setSelected(year, athlete.yearStartedCycling)}
                    value={year}
                    key={year}
                  >
                    {' '}
                    {year}{' '}
                  </option>
                ))}
              </select>
            </div>
            <div className="formfield">
              <label htmlFor="previousSportingExperience">
                Previous Sporting Expirience
              </label>
              <textarea
                name="previousSportingExperience"
                cols="40"
                rows="10"
                onChange={handleChange}
                onLoad={handleChange}
                defaultValue={athlete.previousSportingExperience}
              ></textarea>
            </div>
            <div className="formfield">
              <label htmlFor="injury">Injury Details</label>
              <textarea
                name="injury"
                cols="40"
                rows="10"
                onChange={handleChange}
                onLoad={handleChange}
                defaultValue={athlete.injury}
              ></textarea>
            </div>
            <div className="formfield">
              <label htmlFor="biography">Short Biography (500 words max)</label>
              <textarea
                name="biography"
                cols="40"
                rows="10"
                onChange={handleChange}
                onLoad={handleChange}
                defaultValue={athlete.biography}
              ></textarea>
            </div>
            <div>
              <button type="submit" className="button" onSubmit={handleSubmit}>
                SAVE CHANGES
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default EditAthleteForm;
