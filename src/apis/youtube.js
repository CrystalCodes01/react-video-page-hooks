import axios from 'axios';

const KEY = 'AIzaSyCbgXDuj7NBc-wOMcTOX9Ut6qe1dxa5mz0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
