/*
*首页的默认请求数据
*/
import {getRequest} from "@/utlis/request"

import {convertBanners} from "./translate"

export interface HomeDetail{
    id:number,
    name:string,
}

const RequseUrl={
    HomeDetail:'/homepage/block/page',
    bannerList:'/banner'
}
/***
 * 获取的是首页的全部信息，数据有点大,拿出来单独处理吧
 */
// export const getAlbumDetail = ()=>{
//     // console.log(getRequest(RequseUrl.HomeDetail).then())
//     // return getRequest(RequseUrl.HomeDetail)
//     getRequest(RequseUrl.HomeDetail).then(res=>{
//         console.log(res.data.data.blocks,"======res")
//     })
// }
export const getBanners = () => {
    // console.log(123123123)
    return getRequest(RequseUrl.bannerList)
  }