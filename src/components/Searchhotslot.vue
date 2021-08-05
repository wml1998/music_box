<template>
  <div>
    
    <button @click="diand">daid</button>
        <!-- <div v-for="(item,index) in searchsonglist" :key=index>{{item}}</div> -->
  </div>
 
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
// import { getsgtSearch } from "@/api/modules/search/search";
// import Searchcont from "@/components/Searchhotslot.vue";
// import {debounce} from "@/utlis/debounce"
import { getsgtSearch } from "@/api/modules/search/search";
@Component({
  components: {},
})
export default class Header extends Vue {
  issingle: boolean = false;
  mounted() {}
 @Prop()
 serind:any;

  //监听路由变化

  // @Watch("searchsonglist")
  // changesearchsonglist(){
  //   console.log("emory")
  // }
  diand(){
    console.log(this.serind,"====diand")
  }

}
</script>.

<style lang="scss" scoped>
</style>