// Axios is HTTP Client which can communicate with the backend
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config() // set .env variables

const api = axios.create({
    // IMPORTANT: baseURL value must be your computer's IP with the port
    baseURL: BASE_URL // EXAMPLE: 'http://192.168.1.118:3333'
})

export default api
