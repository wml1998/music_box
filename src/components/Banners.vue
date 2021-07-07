<template>
  <div class="banner_box">
    <!-- <div v-for="(item,index) in banners" :key="index">1</div> -->
    <!-- 用elemnetui的走马灯轮播 -->
    <div>
      <el-carousel :autoplay="false" arrow="always" trigger="click">
        <el-carousel-item v-for="(item, index) in banners" :key="index">
          <div class="img_box">
            <div
              class="backDim"
              :style="{
                background: 'url(' + item.imageUrl + ')',
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                filter: ' blur(' + 80 + 'px' + ')',
              }"
            ></div>
            <a class="goImg">
              <img
                class="banner_img"
                @click="targetAlbum(item.encodeId)"
                :src="item.imageUrl"
                alt=""
              />
            </a>
            <div class="download_box">
                <a @click="downloadPage" class="dwonloadbox_box" to="">下载</a>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- <div class="img_box" ref="img_box">
      <div class="swiper-container" :options='swiperOptions' >
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, key) in banners" :key="key">
            <img :src="item.imageUrl" alt="" />
          </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div> -->

    <!-- 这个是swiper的轮播 -->
    <!-- <Swiper :options="swiperOption">
      <Swiper-slide v-for="(item,index) in banners" :key="index">
        <img :src="item.imageUrl" alt="">
      </Swiper-slide>
    </Swiper>
    <div class="swiper-scrollbar"></div> 
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div> -->
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
// import { Swiper, directive } from "vue-awesome-swiper";
// import "swiper/css/swiper.css";
import "swiper/css/swiper.css";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { getAlbumDetail } from "@/api/modules/album/album";
@Component({
  components: {
    // Swiper
    Swiper,
    SwiperSlide,
  },
})
export default class Banners extends Vue {
  Banners: Array<any> = [];
  // swiperOptions: any = {
  //   loop: true,
  // };
  //    @Prop(Array)! banners:any
  // swiper轮播的属性
  swiperOption: Object = {
    interval:3000,
    speed: 0,
    autoplay:true,
    loop: true,
    initialSlide: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };
  @Prop() banners: any;
  beforeMount() {}

  mounted() {}
  targetAlbum(id: any) {
    getAlbumDetail(id).then((res) => {
      console.log(res, "获取专辑的id");
    });
    // console.log("target========",id)
  }
  downloadPage(){
    this.$router.push({
      path:'/Home/Download'
    })
  }
}
</script>
<style lang="scss" scoped>
/deep/.el-carousel__arrow--left {
  left: 20%;
}
/deep/.el-carousel__arrow--right {
  right: 20%;
}
/deep/.el-carousel__button {
  width: 7px;
  height: 7px;
  cursor: pointer;
  border-radius: 50%;
}
/deep/.el-carousel__indicators--horizontal {
  bottom: 16px;
}
.swiper-button-prev,
.swiper-button-next {
  outline: none;
}
.swiper-slide {
  width: 1920px;
  display: flex;
  justify-content: center;
}
.el-carousel__item {
  height: 285px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 285px;
  margin: 0;
}

.img_box {
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
}
.download_box{
  width: 254px;
  z-index: 99;
 background: url(../assets/downicon.png) no-repeat 0 0;
}
.dwonloadbox_box{
  background: url(../assets/downicon.png) no-repeat 0 0;
  cursor:pointer;
  display: block;
    width: 215px;
    height: 56px;
    margin: 186px 0 0 19px;
    background-position: 0 9999px;
    text-indent: -9999px;
}
.dwonloadbox_box:hover {
    background: url(../assets/downicon.png) no-repeat 0px -290px;
    display: block;
    width: 215px;
    height: 56px;
    margin: 186px 0 0 19px;
    text-indent: -9999px;
  }
.swipe_img {
  width: 730px;
}
.banner_img {
  height: 285px;
}
.backDim {
  width: 100%;
  height: 285px;
  position: absolute;
  left: 0;
  right: 0;
}
.goImg {
  z-index: 99;
}
</style>