import axios from 'axios';

export const getAllAthletesPrivate = async () => {
  const options = {
    method: 'GET',
    url: '/api/athletes',
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    },
  };

  const { data } = await axios.request(options);

  return data;
};
export const getApprovedAthletesPublic = async () => {
  const options = {
    method: 'GET',
    url: '/api/approved-athletes',
  };

  const { data } = await axios.request(options);

  return data;
};

export const getAthletesByStatusPrivate = async (status) => {
  const options = {
    method: 'GET',
    url: `/api/manage/athletes/status/${status}`,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    },
  };
  const { data } = await axios.request(options);

  return data;
};
export const createNewAthlete = async (formData) => {
  const options = {
    method: 'POST',
    url: '/api/athletes',
    data: formData,
  };
  const { data } = await axios.request(options);

  return data;
};

export const getAthletesByIdPrivate = async (athleteId) => {
  const options = {
    method: 'GET',
    url: `/api/athlete/${athleteId}`,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    },
  };

  const { data } = await axios.request(options);

  return data;
};
export const editAthleteDetailsbyIdPrivate = async (athleteId) => {
  const options = {
    method: 'PUT',
    url: `/api/athlete/${athleteId}`,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    },
  };

  const { data } = await axios.request(options);

  return data;
};

export const getAthletesMedicalIncidentsPrivate = async (athleteId) => {
  const options = {
    method: 'GET',
    url: `/api/athlete/${athleteId}/medical-incidents`,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    },
  };

  const { data } = await axios.request(options);

  return data;
};
export const getAthletesAttendancePrivate = async (athleteId) => {
  const options = {
    method: 'GET',
    url: `/api/athlete/${athleteId}/attendance`,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    },
  };

  const { data } = await axios.request(options);

  return data;
};
export const getMedicalIncidentByIDPrivate = async (
  athleteId,
  medicalIncidentId
) => {
  const options = {
    method: 'GET',
    url: `/api/athlete/${athleteId}/medical-incident/${medicalIncidentId}`,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    },
  };

  const { data } = await axios.request(options);

  return data;
};
export const getApprovedAthletes = async () => {
  const options = {
    method: 'GET',
    url: '/api/approved-atheletes/',
  };

  const { data } = await axios.request(options);

  return data;
};
export const getApprovedAthletesById = async (id) => {
  const options = {
    method: 'GET',
    url: `/api/approved-atheletes/${id}`,
  };

  const { data } = await axios.request(options);

  return data;
};

// getAthletesByStatusPrivate,
// getAthletesByIdPrivate,
// getAthletesByIdPublic,
// deleteAthletePrivate,
// getAthletesAttendancePrivate,
// searchAthleteByNameAllAthletesPrivate
