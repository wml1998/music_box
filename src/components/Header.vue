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
        <div>
          <span>
            <input type="text" />
            <label for=""></label>
          </span>
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
@Component({
  components: {},
})
export default class Header extends Vue {
  activeIndex2: number = 0;
  defaultUrl: any = "";
  signNum: number = 0;
  routerPathArr: Array<any> = [];
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
  }
  handleSelect(key: number, keypath: number) {
    this.signNum = key;
  }
  @Watch("$route")
  changeParams(to: any, from: any) {
    this.getCurrentMenu();
  }
  getCurrentMenu() {
    this.$route.path = this.currentMenu;
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
    .cor{
    display: block;
    position: absolute;
    left: 50%;
    top: 64px;
    width: 12px;
    height: 7px;
    margin-left: -6px;
    background:url(../assets/sprit.png) no-repeat -226px 0px;
    display: none;
  }
    &.router-link-active {
      color: #fff;
      background: #000;
      .cor{
           display: block;
      }
    }
  }

  .router_text:hover{
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

