<template>
  <div>
    <div class="navbar">
      <div class="nav_cont">
        <h1 class="musicBack"><a hidefocus="true" href="#">网易云音乐</a></h1>
        <div class="nav_box">
          <router-link
            v-for="(item, index) in tabbar"
            :key="index"
            tag="span"
            :to="item.path"
            class="router_text"
          >
            <span class="cor"></span>
            {{ item.text }}
          </router-link>
        </div>
        <div class="rowsearch_box">
          <div class="search_box">
            <span class="iconfont icon-fangdajing"></span>
            <input class="search_input" @input="getsearchsong"  type="text" v-model="song_name" />
            <Searchcont/>
           
            <!-- <button @click="getsearchsong">搜索</button> -->
          </div>
        </div>
      </div>
    </div>
    <!-- <div>
      <router-view></router-view>
    </div> -->
  </div>
</template>
<script lang="ts">

import { Component, Vue, Watch } from "vue-property-decorator";
import { getsgtSearch } from "@/api/modules/search/search";
import Searchcont  from "@/components/Searchhotslot.vue";
 
@Component({
  components: {
    Searchcont
  }
})

export default class Header extends Vue {
  activeIndex2: number = 0;
  defaultUrl: any = "";
  signNum: number = 0;
  routerPathArr: Array<any> = [];
  song_name: string = "";
  currentMenu: any = "";
  tabbar: Array<any> = [
    { text: "发现音乐", path: "/Home/FindMusic", name: "findMusic" },
    { text: "我的音乐", path: "/Home/myMusic", name: "myMusic" },
    { text: "朋友", path: "/Home/Friend", name: "Frieds" },
    { text: "商城", path: "/Home/mall", name: "mall" },
    { text: "音乐人", path: "/Home/musicer", name: "musicer" },
    { text: "下载客户端", path: "/Home/downLoad", name: "downLoad" },
  ];

  mounted() {
    let arrpath = this.$route.path.split("/");
    this.routerPathArr = arrpath;
    this.defaultUrl = this.routerPathArr.join("/");
    this.$store.commit("getSuglist",1)
    
  }
  handleSelect(key: number) {
    this.signNum = key;
  }
  @Watch("$route")
  changeParams() {
    this.getCurrentMenu();
  }
  @Watch("song_name")
  changesong_name() {
     
  }
  getCurrentMenu() {
    this.$route.path = this.currentMenu;
  }
  getsearchsong() {
    let keywords = this.song_name;
    // Searchcont(keywords,type,limit).then(res=>{
    //   if(res.status==200){
    //     console.log(res.data)
    //   }
    // });
    getsgtSearch(keywords).then((res) => {
      if (res.status == 200) {
        console.log(res.data.result);
          
      }else{

      }
    });
   
    
  }

  // jumpTabPage(item: any) {
  //   //  console.log(item,"=====item")
  //   let currentPath = this.$route;
  //   if (currentPath.path == item.path) {
  //     return;
  //   } else {
  //     this.$router.push({
  //       path: item.path,
  //     });
  //   }
  // }
}
</script>

<style lang="scss" scoped>
router-link {
  text-decoration: none;
}
.navbar {
  width: 100%;
  background: #242424;
}
a {
  color: #fff;
}
.musicBack {
  background-position: 0 0;
  width: 176px;
  height: 69px;
  height: 100%;
  background: url(../assets/sprit.png) no-repeat 0 0;

  a {
    float: left;
    padding-right: 20px;
    font-size: 16px;
    width: 157px;
    text-indent: -9999px;
  }
}
.rowsearch_box{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.search_box {
  padding: 0 0 0 5px;
  position: absolute;
  background: #fff;
  display: flex;
  height: 32px;
  border-radius: 32px;
  text-align: center;
  align-items: center;
  // .icon-fangdajing {
  //   color: #000;
  //   display: inline-block;
  //   width: 25px;
  //   height: 25px;
  // }
  .search_input{
    margin-left: 4px;
    font-size: 14px;
  }
  input {
    border: none;
    outline: none;
    width: 70%;
  }
}
.nav_box {
  display: flex;
  width: 780px;

  .router_text {
    position: relative;
    flex: 1;
    display: flex;
    cursor: pointer;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    color: #ccc;
    .cor {
      display: block;
      position: absolute;
      left: 50%;
      top: 64px;
      width: 12px;
      height: 7px;
      margin-left: -6px;
      background: url(../assets/sprit.png) no-repeat -226px 0px;
      display: none;
    }
    &.router-link-active {
      color: #fff;
      background: #000;
      .cor {
        display: block;
      }
    }
  }

  .router_text:hover {
    background: #000;
  }
}
.nav_cont {
  margin: 0 auto;
  width: 1100px;
  height: 70px;
  display: flex;
  .tabcont {
    background: #242424;
  }
}
</style>

