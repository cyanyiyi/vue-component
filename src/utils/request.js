import axios from 'axios'
import qs from 'qs'

// 创建axios实例
const $http = axios.create({
  baseURL: '',
  timeout: 10000
})
const CancelToken = $http.CancelToken
let cancel
let requestUrl = {}
// 请求拦截器
$http.interceptors.request.use(config => {
  const token = localStorage.getItem('TOKEN')
  if (
    config.method === 'post' ||
    config.method === 'put' ||
    config.method === 'delete'
  ) {
    // 序列化
    config.data = qs.stringify(config.data)
  }
  if (token) {
    config.headers.Authorization = `${token}`
  }
  // 发起请求时，取消掉当前正在进行的相同请求
  if (requestUrl[config.url]) {
    requestUrl[config.url]('操作取消')
    requestUrl[config.url] = cancel
  } else {
    requestUrl[config.url] = cancel
  }

  return config
}, error => {
  return Promise.reject(error)
})
// 响应拦截器
$http.interceptors.response.use(response => {
  return response
}, error => {
  if (error && error.response) {
    const res = error.reponse
    const {status} = res
    switch (status) {
      case '404':
    }
    return Promise.reject(status)
  }
})

export default {
  get (url, params) {
    $http({
      method: 'get',
      url,
      params,
      cancelToken: new CancelToken(c => {
        cancel = c
      })
    }).then(res => {
      Promise.resolve(res)
    })
  },
  post (url, data) {
    $http({
      method: 'post',
      url,
      data,
      cancelToken: new CancelToken(c => {
        cancel = c
      })
    })
  }
}
