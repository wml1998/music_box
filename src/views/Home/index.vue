<template>
  <div class="cont_box">
    <!-- 导航栏的bar -->
    <Header class="headder" />
    <div class="cont_box_box">
      <router-view> </router-view>
    </div>
    
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import HelloWorld from '@/components/HelloWorld.vue';
import Header from "@/components/Header.vue";

// import {getTopSongs} from "@/api/modules/latest/index"
@Component({
  components: {
    Header,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.cont_box {
  width: 100%;
  height: 100%;
  background: rgb(221, 211, 211);
  display: flex;
  flex-direction: column;
  .headder{
    height: 70px;
  }
  .cont_box_box{
   flex: 1;
   
}
}

</style>
