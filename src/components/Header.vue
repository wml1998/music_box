<template>
  <div>
    <div class="navbar">
      <div class="nav_cont">
        <h1 class="musicBack"><a hidefocus="true" href="#">网易云音乐</a></h1>
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#242424"
          text-color="#ccc"
          active-text-color="#fff"
        >
          <el-menu-item
            v-for="(item, index) in tabbar"
            :key="index"
            :index="index"
            class="ever_bar"
            >{{ item.text }}
            <sub class="cor"> </sub>
          </el-menu-item>
        </el-menu>
        <div>
          <span>
            <input type="text" />
            <label for=""></label>
          </span>
        </div>
      </div>
      <div v-show="this.signNum == 0" class="find_tabbar"></div>
      <div v-show="this.signNum !== 0" class="m-subnav"></div>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class Header extends Vue {
  signNum: number = 0;
  tabbar: any = [
    { text: "发现音乐" },
    { text: "我的音乐" },
    { text: "朋友" },
    { text: "商城" },
    { text: "音乐人" },
    { text: "下载客户端" },
  ];
  mounted() {}
  handleSelect(key: number, keypath: number) {
    console.log(key);
    this.signNum = key;
    console.log(this.signNum, "====find_tabbar");
  }
}
</script>

<style lang="scss" scoped>
/deep/.el-menu-demo {
  border: none;
}
/deep/.is-active {
  background: #000 !important;
}
.el-menu--horizontal > .el-menu-item {
  border: none;
}
.el-menu-item {
  height: 100%;
}
.navbar {
  width: 100%;
  background: #242424;
}
.listyle {
  list-style: none;
  height: 100%;
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
.nav_cont {
  margin: 0 auto;
  width: 1100px;
  height: 70px;
  display: flex;
  .tabcont {
    background: #242424;
  }
}
.m-subnav {
  //我的音乐，朋友的下划线
  height: 5px;
  width: 100%;
  background: #c20c0c;
}
.find_tabbar {
  //发现音乐下划线
  height: 35px;
  width: 100%;
  background: #c20c0c;
}
.ever_bar {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  .cor {
    position: absolute;
    // background: url(../assets/sprit.png) no-repeat -170px 40px;
    // left: 50%;
    // bottom: 0;
    // width: 60px;
    // height: 30px;
    // overflow: hidden;
  }
}
</style>

