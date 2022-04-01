import React from 'react';

const AthleteCard = ({ firstName, lastName, dateOfBirth }) => {
  function getAge(dateOfBirth) {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    const age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  return (
    <div className="card card-athlete">
      <img src="https://via.placeholder.com/300x400" alt="" />
      <p>
        {firstName} {lastName}, {getAge(dateOfBirth)}
      </p>
    </div>
  );
};

export default AthleteCard;
