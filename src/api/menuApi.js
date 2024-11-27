import axios from 'axios';

const menuApi = () => {
  const data  = axios.get('https://smartqdemo.firebaseio.com/events-data.json')
    .then((res) => res)
    .catch((err) => console.error(err))
  return data
}

export default menuApi;