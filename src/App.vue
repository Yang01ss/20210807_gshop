<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import FooterGuide from "./components/FooterGuide/FooterGuide.vue";
export default {
  name: "App",
  components: { FooterGuide },
  mounted() {
    this.getAddress();
    this.getFoodTypes();
    this.getShops();
    this.getUserInfo();
    
  },
  methods: {
    ...mapActions(["getAddress", "getFoodTypes", "getShops", "getUserInfo"]),
  },
};
</script>
<style lang="less">
#app {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  touch-action: none;
}
</style>
