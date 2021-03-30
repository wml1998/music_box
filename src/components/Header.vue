<template>
  <div>
    <div class="navbar">
      <div class="nav_cont">
        <h1 class="musicBack"><a hidefocus="true" href="#">网易云音乐</a></h1>
        <ul>
          <li v-for="(item, key) in tabbar" :key="key" class="listyle">
            {{ item.text }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class Header extends Vue {
  tabbar: any = [
    { text: "发现音乐" },
    { text: "我的音乐" },
    { text: "朋友" },
    { text: "商城" },
    { text: "音乐人" },
    { text: "下载客户端" }
  ];
}
</script>

<style lang="scss">

.navbar {
  width: 100%;
  background: #242424;
}
.listyle {
  list-style: none;
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
}
</style>

