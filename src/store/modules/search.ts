import {getsgtSearch} from "@/api/modules/search/search"

const state:any={
   songmenulist:null,
   com:123
}
//定义一个mutatios的方法
const mutations={
    Suglist(state:any,payload:any){
        //payload接受识图传的数据
      console.log(payload,"==payload")
    }
}
const actions = {
    getSuglist({commit}:any,payload:any){
       console.log(payload,"===getSuglist")
       getsgtSearch(payload).then(res=>{
           console.log(res)
       })
    }
}
export default {
    state,
    mutations,
    actions
}