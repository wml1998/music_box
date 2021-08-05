import { getsgtSearch,getplaysong } from "@/api/modules/search/search"

const state: any = {
    songmenulist: null,
    songlistnum: null,
    playSonUrl:""
    
}
//定义一个mutatios的方法
const mutations = {
    Suglist(state: any, payload: any) {
        //payload接受识图传的数据
        if (payload.data) {
            // 判断payload中是否存在数据
            if (payload.data.code == 200) {
                state.songmenulist=payload.data.result
                state.songlistnum = payload.data.result.order
            
            }
        } else {
           
        }

    },
    //播放音乐连接
    setSongurl(state:any,payload:any){
        //   console.log(,"=====payload")
    
          if(payload.data){
              if(payload.data.code==200){
                  state.playSonUrl= payload.data.data[0].url
              }else{
                  console.log("没有成功啊")
              }
          }else{
              console.log("没有服务")
          }
    }
}
//定义一个actions方法
const actions = {
    //搜索框输入时提示的内容
    // 用async和await来有一个请求的同步效果
    async getSuglist({commit}:any,payload:any){
        // console.log(payload,"====payload")
        let res= await getsgtSearch(payload)
        commit('Suglist',res)
    },
    //请求获取音乐url
    async getSongurl({commit}:any,payload:any){
        let res = await getplaysong(payload)
        commit('setSongurl',res)
        // console.log(res,"=====rerere")
    }
    
}
export default {
    state,
    mutations,
    actions
}