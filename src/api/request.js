import axios from 'axios'
import nprogress from 'nprogress'
 import 'nprogress/nprogress.css'
 import store from '@/store'
const requests =  axios.create({

 baseURL:'/api',
 timeout:5000,

})
// 请求拦截器
requests.interceptors.request.use((config)=>{
  if(store.state.detail.uuid_token){
    config.headers.userTempID = store.state.detail.uuid_token
  }
  if(store.state.login.token){
    config.headers.token = store.state.login.token
  }
  nprogress.start()
  return config;
})
// 相应拦截器
requests.interceptors.response.use((res)=>{
  nprogress.done()
    return res.data
},(error)=>{
    return Promise.reject(new Error('faile'))
})
export default requests