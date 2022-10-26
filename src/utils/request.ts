import axios from 'axios'
// import { ElMessage } from 'element-plus'
// import storage from 'store'
// import { mrcBaseUrl } from '@/config'
// import store from '@/store'

const vtServer = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  // baseURL: 'http://192.168.9.118:8086//fftai-mrc',
  timeout: 1000 * 30,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})
/**
 * 请求拦截
 */
vtServer.interceptors.request.use(
  (config) => {
    // const token = storage.get('token')
    // if (token && config.headers) {
    //   config.headers['token'] = token // 请求头带上token
    // }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

/**
 * 响应拦截
 */

vtServer.interceptors.response.use(
  (response) => {
    if (response.data.code === undefined) {
      return response
    }
    if (response.data.code !== 0) {
      if (response.data.code === 401) {
      //  store.dispatch('user/logout', { request: false })
      }

      return Promise.reject(response)
    }
    return response
  },
  (error: any) => {
    // ElMessage.error(error?.message || '服务端异常')
    return Promise.reject(error)
  }
)

export default vtServer
