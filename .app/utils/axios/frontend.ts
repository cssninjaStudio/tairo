import axios from 'axios'

export const frontendBaseURL = '/api'

const FrontendAxios = axios.create({
  baseURL: frontendBaseURL,
})

export default FrontendAxios
