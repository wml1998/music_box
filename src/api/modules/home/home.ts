/*
*首页的默认请求数据
*/
import {getRequest} from "@/utlis/request"

export interface HomeDetail{
    id:number,
    name:string,
}

const RequseUrl={
    HomeDetail:'/homepage/block/page'
}

export const getAlbumDetail = ()=>{
    return getRequest(RequseUrl.HomeDetail)
   
}