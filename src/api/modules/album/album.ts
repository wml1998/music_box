/**
 * 专辑的请求接口
 * 
 */
import {getRequest,getRequestdata} from "@/utlis/request"


export interface AlbumDeatil{
    

}

const RequseUrl = {
    //  调用此接口 , 传入专辑 id, 可获得专辑内容
   AlbumDeatil:"/album"
}


export const getAlbumDetail = (id:number) =>{
   return getRequestdata(RequseUrl.AlbumDeatil,{id})
}

