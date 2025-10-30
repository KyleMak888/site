import axios from 'axios'
const ERROR_NETWORK = '您的网络似乎有些问题'
const RESPONSE_CODE_LOGOUT = 401

// before send ajax
axios.interceptors.request.use(
  config => {
    config.headers = {
      'Content-Type': 'application/json'
    }
    if (config.method === 'file') {
      config.method = 'post'
      headers['Content-Type'] = 'multipart/form-data'
    }
    config.headers['Authorization'] = sessionStorage.getItem('token')
      ? `Bearer ${sessionStorage.getItem('token')}`
      : ''
    return config
  },
  err => Promise.reject(err)
)

// response handler
axios.interceptors.response.use(
  res => {
    const { data } = res
    if (data.code === -1 && !data.redirect) {
      if (window.location.hash.substr(1) !== '/login') {
        sessionStorage.setItem('last_url', window.location.hash.substr(1))
      }
      window.location.replace('#/login')
      return
    }
    return data
  },
  err => {
    if (!err.response) {
      let errMsg = err.msg || err.message || err
      if (errMsg === 'Network Error') {
        errMsg = ERROR_NETWORK
      }
      return Promise.reject(errMsg)
    }
    err.status = err.response.status || 500
    // 由接口规则单独处理对应的情况
    if ([404, 402, 400, 429, 423, 403, 406, 428].includes(err.status)) {
      return Promise.resolve(err.response)
    }
    if (err.status === RESPONSE_CODE_LOGOUT) {
      sessionStorage.setItem('last_url', window.location.hash.substr(1))
      window.location.replace('#/login')
    }
    const msg = err.response.data
      ? err.response.data.errmsg || err.response.data.err_msg || err.response.data.error
      : ERROR_NETWORK
    return Promise.reject(msg)
  }
)

export async function postContact(data) {
  return await axios.post(`/api/form`, data)
}
