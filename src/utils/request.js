import axios from 'axios'
const request = axios.create({
  // 基础地址
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000
})
export default request
