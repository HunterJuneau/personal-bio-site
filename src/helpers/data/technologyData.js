import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getTechnologies = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/technologies.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const updateTechnology = (techObj, firebaseKey) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbUrl}/technologies/${firebaseKey}.json`, techObj)
    .then(() => resolve(getTechnologies()))
    .catch((error) => reject(error));
});

const createTechnology = (techObj) => new Promise((resolve, reject) => {
  axios
    .post(`${dbUrl}/technologies.json`, techObj)
    .then((response) => {
      resolve(
        updateTechnology(
          { firebaseKey: response.data.name },
          response.data.name,
        ),
      );
    })
    .catch((error) => reject(error));
});

export { getTechnologies, updateTechnology, createTechnology };
