import { fetchAllData } from '../actions/fetchAllData';
const PORT = 4444;

const getAllData = dispatch  => {
  fetch(`http://localhost:${PORT}/test`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    },
  ).then(response => {
    response.json().then(json => {
      dispatch(fetchAllData(json))
    }).catch(error => console.log(error))
  });
};

export default getAllData;