import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/projects.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const updateProject = (projectObj) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbUrl}/projects/${projectObj.firebaseKey}.json`, projectObj)
    .then(() => getProjects.then(resolve))
    .catch((error) => reject(error));
});

const createProject = (projectObj) => new Promise((resolve, reject) => {
  axios
    .post(`${dbUrl}/projects.json`, projectObj)
    .then((response) => {
      updateProject({ firebaseKey: response.data.name }).then(resolve);
    })
    .catch((error) => reject(error));
});

export { getProjects, updateProject, createProject };
