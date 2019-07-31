<template>
  <div id="app">
    我今年要脱单
    <!-- <js1></js1>
    <js2></js2>-->
    <router-link to="/jspang/js1">技术下的1</router-link>
    <router-link to="/jspang/js2">技术下2</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
import js1 from "./js1";
import js2 from "./js2";
export default {
  name: "App",
  data() {
    return {};
  },
  beforeRouteEnter: (to, from, next)=> {
    console.log('准备进入')
    next()
  },
  beforeRouteLeave (to, from, next) {
    // ...
    console.log('准备离开')
    next()
  },
  components: {
    js1,
    js2
  }
};
</script>
<style>
</style>
