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

@Component({
    components:{
Header
    }
})
export default class Home extends Vue{


}
</script>

<style lang="scss">
   *{margin: 0;
     padding:0;
     box-sizing: border-box;
   }



</style>
