import axios from "axios"
const COOKIE = ''
const http = axios.create({
    baseURL:'http://localhost:3000',
    timeout:3000
})
//拦截器



//响应器
http.interceptors.response.use((response:any) => {
  if (response.status === 200) {
    return response
  }
}, err => {
  return Promise.reject(err)
})
export const getRequest = (url:string,params={})=>{
  return http.get(url,{params:{...params,cookie:COOKIE}})
}