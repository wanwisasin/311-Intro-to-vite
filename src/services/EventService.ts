import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/wanwisasin/311-Lab02-Intro-to-vite',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  get() {
    return apiClient.get('/events')
  }
}
