import axios from '../axios';

const addSchedule = async (vaccinationDate, name, birthDate) => {
  let response;
  await axios.post('/scheduling', {
    vaccinationDate,
    name,
    birthDate,
  }).then((res) => { response = res.data; })
    .catch((err) => { response = err.response.data; });

  return response;
};

const getAllSchedules = async () => {
  try {
    return axios.get('/scheduling');
  } catch (error) {
    return error;
  }
};

export { addSchedule, getAllSchedules };
