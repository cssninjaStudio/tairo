import axios from 'axios'

export const backendBaseURL = 'http://127.0.0.1:8000/api'

const BackendAxios = axios.create({
  baseURL: backendBaseURL,
})

export default BackendAxios
