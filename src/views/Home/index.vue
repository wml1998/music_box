<template>
    <div>
        <!-- 导航栏的bar -->
       <Header/>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue';
import Header from "@/components/Header.vue"
import {getAlbumDetail} from "@/api/modules/home"
import {getTopSongs} from "@/api/modules/latest/index"
@Component({
    components:{
Header
    }
})
export default class Home extends Vue{
mounted() {
  this.getTabdata()    
}
getTabdata(){
      getTopSongs()
}

}
</script>

<style lang="scss">
   *{margin: 0;
     padding:0;
     box-sizing: border-box;
   }



</style>
