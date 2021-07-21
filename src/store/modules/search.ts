import { getsgtSearch } from "@/api/modules/search/search"

const state: any = {
    songmenulist: null,
    songlistnum: null,
    
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
    }
    
    // getSuglist({ commit }: any, payload: any) {
    //     console.log("2")
    //     getsgtSearch(payload).then(res => {
    //         // commit("Suglist", res)
    //         if (res.data) {
    //             if (res.data.code == 200) {
    //                 console.log("4")
    //                 console.log(res.data.result)
    //                 state.songlistnum =res.data.result.order
    //             }
    //         } else {
    //             console.log("没有服务")
    //         }
    //     })
    // },

    
}
export default {
    state,
    mutations,
    actions
}