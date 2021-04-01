import axios from "axios"
import store from "../store"
import Router from "@/router/index"
import {Message,Loading} from "element-ui"
import { getTokenSourceMapRange } from "typescript"




//创建axios实例
const service = axios.create({
    headers: {
        post: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        }
    },
    baseURL:'http://localhost:3000',
    timeout:5000//请求超时时间
})


//请求拦截器
service.interceptors.request.use(function(config){
      
    return config
},error =>{
    return Promise.reject(error)
})

//响应拦截器
service.interceptors.response.use(response=>{
         //状态码进行判断
         if(response.status == 200){
             return response.data
         }else{

         }

},error=>{
   return Promise.reject(error)
})
// export default service


/**
 * get方法，对应的get请求
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export const get = (url,params) => service.get(url,params)


/**
 * post方法，对应的post请求
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
 export const post = (url,params) => service.post(url,encodeParam(params))