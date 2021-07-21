<template>
  <div>
    <button @click="dian">dian</button>
        <!-- <div v-for="(item,index) in searchsonglist" :key=index>{{item}}</div> -->
  </div>
 
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
export default class Searchhot extends Vue {
 
    //  @Prop() searchsonglist!:any
 
     dian(){
      //  console.log(this.searchsonglist,"=======searchsonglist")
     }
 

}
</script>
<style lang="scss" scoped>
</style>