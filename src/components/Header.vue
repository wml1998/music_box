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
            <input
              class="search_input"
              @input="getsearchsong"
              type="text"
              v-model="song_name"
            />
            <div class="musicisonlist" v-if="showSearchcont == true">
              <div class="search_title">搜"{{ song_name }}"相关用户></div>
              <div v-if="issingle == true" class="single">
                <div class="search_cont_title">单曲</div>
                <div class="search_cont">
                  <div
                    v-for="(item, index) in searchData.songs"
                    :key="index"
                    @click="goSongurl(item)"
                  >
                    {{ item.name }}-<span>{{ item.artists[0].name }}</span>
                  </div>
                </div>
              </div>
              <div v-if="issinger == true" class="singer">
                <div class="search_cont_title">歌手</div>
                <div class="search_cont">
                  <div v-for="(item, index) in searchData.artists" :key="index">
                    {{ item.name }}
                  </div>
                </div>
              </div>
              <div v-if="isalbum == true" class="album">
                <div class="search_cont_title">专辑</div>
                <div class="search_cont">
                  <div v-for="(item, index) in searchData.albums" :key="index">
                    {{ item.name }}
                  </div>
                </div>
              </div>
              <div v-if="issonglist == true" class="songlist">
                <div class="search_cont_title">歌单</div>
                <div class="search_cont"></div>
              </div>
            </div>

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
// import { getsgtSearch } from "@/api/modules/search/search";
// import Searchcont from "@/components/Searchhotslot.vue";
// import {debounce} from "@/utlis/debounce"
import { getsgtSearch } from "@/api/modules/search/search";
@Component({
  components: {},
})
export default class Header extends Vue {
  issingle: boolean = false;
  issinger: boolean = false;
  isalbum: boolean = false;
  issonglist: boolean = false;
  song_name: string = "";
  currentMenu: any = "";
  searchsonglist: any = "";
  searchData: any = "";
  showSearchcont: boolean = false;
  tabbar: Array<any> = [
    { text: "发现音乐", path: "/Home/FindMusic", name: "findMusic" },
    { text: "我的音乐", path: "/Home/myMusic", name: "myMusic" },
    { text: "朋友", path: "/Home/Friend", name: "Frieds" },
    { text: "商城", path: "/Home/mall", name: "mall" },
    { text: "音乐人", path: "/Home/musicer", name: "musicer" },
    { text: "下载客户端", path: "/Home/downLoad", name: "downLoad" },
  ];

  mounted() {}
  handleSelect(key: number) {}
  //监听路由变化
  @Watch("$route")
  changeParams() {
    this.getCurrentMenu();
  }
  @Watch("song_name")
  changesong_name() {}
  getCurrentMenu() {
    this.$route.path = this.currentMenu;
  }
  // @Watch("searchsonglist")
  // changesearchsonglist(){
  //   console.log("emory")
  // }

  getsearchsong() {
    let keywords = this.song_name;
    //用vuex方法获取数据
    if (keywords == "") {
      this.showSearchcont = false;
      return false;
    } else {
      // 不走vuex，直接请求
      //  await getsgtSearch(keywords).then(res=>{
      //     if(res.status==200){
      //       this.searchsonglist=res.data.result.order
      //     }
      //   })

      //走vuex存数据请求数据
      this.$store.dispatch("getSuglist", keywords).then(() => {
        this.searchsonglist = this.$store.state.search.songlistnum;
        this.searchData = this.$store.state.search.songmenulist;
        this.issingle = this.searchsonglist.includes("songs");
        this.issinger = this.searchsonglist.includes("artists");
        this.isalbum = this.searchsonglist.includes("albums");
        this.issonglist = this.searchsonglist.includes("playlists");
        console.log(this.searchData.songs);
        this.showSearchcont = true;
        // console.log(this.searchsonglist,"==this.searchsonglist")
      });
    }
  }
  //点击歌曲去详情页
  goSongurl(item: any) {
    console.log(item, "===item");
    this.$store.dispatch("getSongurl", item.id).then(() => {
      
    });

    this.$router.push({
        path: "/Home/Songdetail",
        query: {
          id: item.id,
        }
      });
  }
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
.rowsearch_box {
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
  .search_input {
    margin-left: 4px;
    font-size: 14px;
  }
  input {
    border: none;
    outline: none;
    width: 70%;
  }
  .musicisonlist {
    background: #fff;
    position: absolute;
    z-index: 99;
    width: 240px;
    top: 40px;
    left: 0;
    border-radius: 4px;
    font-size: 12px;
    .search_title {
      display: flex;
      flex-direction: initial;
      color: #ccc;
      padding: 4px 0 4px 10px;
      border-bottom: 1px solid #ccc;
    }
    .search_cont:nth-child(1) {
      border: none;
      background: #f00;
    }
  }
}
.single,
.singer,
.album,
.songlist {
  display: flex;
  .search_cont_title {
    flex: 2;
    border-right: 1px solid #ccc;
  }
  .search_cont {
    flex: 8;
    border-bottom: 1px solid #ccc;
  }

  // .searchcont1{
  //   border: none;
  // }
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

