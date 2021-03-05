import axios from 'axios';

const KEY = 'AIzaSyAGsgEWNnr3QI7T7hv5qZCruszjzGIdN20'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});