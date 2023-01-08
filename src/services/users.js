import axios from 'axios'
const baseUrl = 'http://localhost:3001/users';

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data);  // HUOM! tässä oli aiemmin "return axios.get(baseUrl)", ÄLÄ tee niin, jätät promisen käyttämättä. Korjattu myös alla oleviin.
  }
  
const create = (userObject) => {
    const request = axios.post(baseUrl, userObject)
    return request.then(response => response.data)
}

export default { getAll, create }