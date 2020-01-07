import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getWalks = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/walks.json`)
    .then((response) => {
      const walks = response.data;
      const allWalks = [];
      if (walks) {
        Object.keys(walks).forEach((fbId) => {
          walks[fbId].id = fbId;
          allWalks.push(walks[fbId]);
        });
      }
      resolve(allWalks);
    }).catch((err) => reject(err));
});

const deleteWalk = (walkId) => axios.delete(`${baseUrl}/walks/${walkId}.json`);

const addWalk = (walkObj) => axios.post(`${baseUrl}/walks.json`, walkObj);

const updateWalk = (walkId, walkObj) => axios.put(`${baseUrl}/walks/${walkId}.json`, walkObj);

export default {
  getWalks,
  deleteWalk,
  addWalk,
  updateWalk,
};
