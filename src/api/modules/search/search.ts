/** 
 * 搜索的接口
 */

import {getRequestdata} from "@/utlis/request"
import { SEARCH_TYPE } from '@/utlis/constant'


const SearchUrl ={
    cloudsearch:"/cloudsearch",
    //根据关键词搜索，
}

export const Searchcont = (keywords:string,type:string,limit:number,currentPage:number)=>{
 return getRequestdata(SearchUrl.cloudsearch,{keywords,type,limit,currentPage }).then(res=>{
     console.log(res,"请求里res")
 })
}
// export const getSearchInfo = (keywords: string, type: string, currentPage: number) => {
//     return getRequest(REQUEST_URL.cloudsearch, { keywords, type: SEARCH_TYPE[type].type, limit: SEARCH_TYPE[type].limit, offset: (currentPage - 1) * SEARCH_TYPE[type].limit }).then((res: AxiosResponse<any>) => convertSearchInfo(res, type))
//   }
  