import axios from 'axios'
import { serverURL} from './Constants'

const api = axios.create({baseURL:serverURL});


export default api