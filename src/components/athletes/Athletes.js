import React from 'react';
import { Link } from 'react-router-dom';

import AthleteCard from './AthleteCard';
import { getApprovedAthletesPublic } from '../../api/athletes';
import JoinBtn from './JoinBtn';

const Athletes = () => {
  const [athletes, setAthletes] = React.useState([]);
  React.useEffect(() => {
    const getData = async () => {
      const athletes = await getApprovedAthletesPublic();
      setAthletes(athletes);
    };

    getData();
  }, []);

  console.log('ATHLETES ARE', athletes);

  // function capetalizeString(string) {
  //   const wordToCapetalize = string;
  //   const CapetalizeTheWord =
  //     wordToCapetalize.charAt(0).toUpperCase() + wordToCapetalize.slice(1);
  //   return CapetalizeTheWord;
  // }

  return (
    <>
      <section className="section section-main section-athletes">
        <h1>Our Athletes</h1>
        <div className="container container-main container-grid container-athletes">
          {athletes.map((athlete) => (
            <Link key={athlete._id} to={`/approved-athletes/${athlete._id}`}>
              <AthleteCard {...athlete} />
            </Link>
          ))}
        </div>
        <JoinBtn />
      </section>
    </>
  );
};

export default Athletes;
