<template>
  <div class="find_box">
    <div class="findmusic_box">
       <router-link tag="span" class="findmusic_box_cont" v-for="(item,key) in routerList" :key="key" :to="item.roupath">
          {{item.name}}
       </router-link>
    </div>
    <div>
      <router-view>

      </router-view>
    </div>
     
  </div>
</template>


<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Banners from "@/components/Banners.vue";
import { getBanners } from "@/api/modules/home/home";
import {Searchcont} from "@/api/modules/search/search"
@Component({
  components: {
    Banners,
  },
})
export default class FindMusic extends Vue {
  banners: any = [];
  navgitList: Array<string> = [];
  song_name: String = "";
  routerList:any = [
{
  name:'推荐',
  roupath:'/Home/FindMusic/recommend'
},
{
name:'排行榜',
roupath:'/Home/FindMusic/rankList'
},
{
  name:'歌单',
roupath:'/Home/FindMusic/rankList'
},
{
  name
}

  ];
  mounted() {
    // this.getTabdata();
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
  searchSong(){
  let keywords=this.song_name
  console.log(keywords,"===keywords")
  console.log(Searchcont("keywords","2",3,4))
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
.find_box {
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  justify-content: space-around;
  background: rgb(221, 211, 211);
}
.findmusic_box{
  background: #c20c0c;
  width: 100%;
  height: 35px;
  .findmusic_box_cont{
  cursor:pointer;
  color: #fff;
}
.router-link-active{
  background: #9B0909;
}
}

</style>