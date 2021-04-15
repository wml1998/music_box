import {AxiosResponse} from "axios"

interface Banner {
    imageUrl:string;
    [propName:string]:any
}
export const convertBanners = (res:AxiosResponse<any>)=>{
    return res.data.banners.map((banner: Banner) => {
        console.log(banner,"===getBanners()")
        return banner.imageUrl
      })
}