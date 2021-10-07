// Axios is HTTP Client which can communicate with the backend
import axios from 'axios'

// Creates an api with axios
const api = axios.create({
    // IMPORTANT: baseURL value must be your computer's IP with the port
    baseURL: '192.168.1.118:3333' // EXAMPLE: 'http://192.168.1.116:3333'
})

// Exports api
export default api
