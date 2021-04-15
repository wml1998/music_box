<template>
    <div>
         <div class="find_tabbar">
              
         </div>
         <Banners :banners="this.banners"/>
         <div class="cont_box">
           <div>热门推荐</div>
           <div>用户登录</div>
         </div>
    </div>
</template>


<script lang="ts">
import {Vue,Component} from "vue-property-decorator"
import Banners from "@/components/Banners.vue";
import { getBanners } from "@/api/modules/home/home";
@Component({
     components: {
         Banners
     }
})
export default class FindMusic extends Vue {
     banners: any = [];
     navgitList:Array<string>=[

     ]
  mounted() {
    this.getTabdata();
  }
  /**
   * 获取轮播数据
   */
  getTabdata() {
    getBanners().then((res) => {
      if (res.status == 200) {
        this.banners = res.data.banners;
        console.log(this.banners, "===thisbanners");
      }
    });
  }
}
</script>

<style lang="scss" scoped>
    .find_tabbar {
  //发现音乐下划线
  height: 35px;
  width: 100%;
  background: #c20c0c;
}
.cont_box{
  width: 980px;
  margin: 0 auto;
}

</style>