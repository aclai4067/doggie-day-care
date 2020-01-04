import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllDogs = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/dogs.json`)
    .then((response) => {
      const theDogs = response.data;
      const allDogs = [];
      Object.keys(theDogs).forEach((fbId) => {
        theDogs[fbId].id = fbId;
        allDogs.push(theDogs[fbId]);
      });
      resolve(allDogs);
    }).catch((err) => reject(err));
});

export default { getAllDogs };
