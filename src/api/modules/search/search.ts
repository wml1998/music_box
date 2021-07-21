/** 
 * 搜索的接口
 */

import {getRequestdata} from "@/utlis/request"
import { SEARCH_TYPE } from '@/utlis/constant'


const SearchUrl ={
    cloudsearch:"/cloudsearch",
    hotSearch:"/search/hot/detail",
    sgtSearch:"/search/suggest",
    playsongurl:"/song/url"

    //根据关键词搜索，
}
//
export const Searchcont = (keywords:string,type:number,limit:number)=>{
//  return getRequestdata(SearchUrl.cloudsearch,{keywords,type,limit,currentPage }).then(res=>{
 return getRequestdata(SearchUrl.cloudsearch,{keywords,type,limit})
}
//热门搜索列表，
export const getHotSearchDetail = ()=>{
    return getRequestdata(SearchUrl.hotSearch)
}
//右上角的联想搜索，可以拿到搜索的各种信息，肥肠好用
export const getsgtSearch = (keywords:string)=>{
    return getRequestdata(SearchUrl.sgtSearch,{keywords})
}
//获取歌曲播放连接
export const getplaysong = (keywords:string)=>{
    return getRequestdata(SearchUrl.playsongurl,{keywords})
}
// export const getSearchInfo = (keywords: string, type: string, currentPage: number) => {
//     return getRequest(REQUEST_URL.cloudsearch, { keywords, type: SEARCH_TYPE[type].type, limit: SEARCH_TYPE[type].limit, offset: (currentPage - 1) * SEARCH_TYPE[type].limit }).then((res: AxiosResponse<any>) => convertSearchInfo(res, type))
//   }
  