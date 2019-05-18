import axios from 'axios';

const api_key ="Gi3N0PItb1km0JpCIphGjlzLTfgoVBvb";

const baseUrl = 'http://api.giphy.com/v1/gifs';
const limit = 20;

const getTrending = () => {
  return axios({
    method: 'get',
    url: `${baseUrl}/trending`,
    params: {
      api_key,
      limit,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

const getImageByKeyWord = (q) => {
  return axios({
    method: 'get',
    url: `${baseUrl}/keyword`,
    params: {
      api_key,
      limit,
      q    
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export {
  getTrending,
  getImageByKeyWord,
}