import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllEmployees = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/employees.json`)
    .then((response) => {
      const employees = response.data;
      const allStaff = [];
      Object.keys(employees).forEach((fbId) => {
        employees[fbId].id = fbId;
        allStaff.push(employees[fbId]);
      });
      resolve(allStaff);
    }).catch((err) => reject(err));
});

export default { getAllEmployees };
