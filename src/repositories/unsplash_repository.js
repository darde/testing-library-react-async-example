import axios from 'axios';

const baseUrl = 'https://api.unsplash.com/search/photos';

export default async (term = 'beaches', page = 1) => {
  const response = await axios.get(baseUrl, {
    params: {
      client_id: process.env.REACT_APP_ACCESS_KEY,
      query: term,
    }
  });
  
  return response.data.results;
}