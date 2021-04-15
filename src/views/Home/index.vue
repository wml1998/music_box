<template>
  <div>
    <!-- 导航栏的bar -->
    <Header />
    <router-view>
    </router-view>
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
export default class Home extends Vue {
 
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
