// import {getsgtSearch} from "../../api/modules/index"

const state:any={
   songmenulist:null,
   com:123
}
//定义一个mutatios的方法
const mutations={
    getSuglist(state:any,payload:any){
        //payload接受识图传的数据
      console.log(payload,"==payload")
    }
}

export default {
    state,
    mutations
}