import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getWalks = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/walks.json`)
    .then((response) => {
      const walks = response.data;
      const allWalks = [];
      Object.keys(walks).forEach((fbId) => {
        walks[fbId].id = fbId;
        allWalks.push(walks[fbId]);
      });
      resolve(allWalks);
    }).catch((err) => reject(err));
});

export default { getWalks };
