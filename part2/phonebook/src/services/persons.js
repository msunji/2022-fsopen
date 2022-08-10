import axios from 'axios';
const uri = 'http://localhost:3001/persons';

const getEntries = () => {
  const req = axios.get(uri);
  return req.then(res => res.data);
}

const addEntry = (entryObj) => {
  const req = axios.post(uri, entryObj);
  return req.then(res => res.data);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getEntries, addEntry }