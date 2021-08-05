<template>
    <div>
      推荐
      <Searchhot :serind="123" />
    </div>
</template>
<!-- <script lang="ts">
import Vue from 'vue'
import Searchhot from "@/components/Searchhotslot.vue"
export default Vue.extend({
    components:{
      Searchhot
    }
})
</script> -->
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import Searchhot from "@/components/Searchhotslot.vue"
@Component({
     components:{
      Searchhot
     }
  })
export default class recommend extends Vue{
  serind:string="123"


}

</script>

<style lang="scss">

</style>
