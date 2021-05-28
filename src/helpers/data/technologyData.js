import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getTechnologies = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/technologies.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const updateTechnology = (techObj) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbUrl}/technologies/${techObj.firebaseKey}.json`, techObj)
    .then(() => getTechnologies().then(resolve))
    .catch((error) => reject(error));
});

const createTechnology = (techObj) => new Promise((resolve, reject) => {
  axios
    .post(`${dbUrl}/technologies.json`, techObj)
    .then((response) => {
      updateTechnology(
        { firebaseKey: response.data.name },
        response.data.name,
      ).then(resolve);
    })
    .catch((error) => reject(error));
});

const deleteTechnology = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbUrl}/technologies/${firebaseKey}.json`)
    .then(() => getTechnologies().then(resolve))
    .catch((error) => reject(error));
});

export {
  getTechnologies, updateTechnology, createTechnology, deleteTechnology
};
