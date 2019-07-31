<template>
  <div id="app">
    <jspang></jspang>
    <router-link to="/">helloworld</router-link>
    <router-link to="/jspang">技术</router-link>
    <router-link to="/params/1998/jspang">params</router-link>
    <router-link to="/js1">js1</router-link>
    <router-link to="/1234">home  </router-link>
    <div className="haha">
       <button @click='goback'>前进</button>
       <button @click='gohome'>后退</button> 
       <button @click='go'>返回首页</button>             
    </div>
    <p>{{$route.name}}</p>
    <router-link :to="{name: 'js1', params: {username: 'jspang'}}">js1页面</router-link>
    <count></count>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    
    <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
    <router-view name="right" style="float:left;width:50%;background-color:red;height:300px;">></router-view>
  </div>
</template>

<script>
import jspang from "./components/jspang";
import js1 from "./components/js1";
import js2 from "./components/js2";
import count from "./components/count";
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    goback() {
      this.$router.go(1)
    },
    gohome() {
      this.$router.go(-1)
    },
    go() {
      this.$router.push('/')
    }
  },
  components: {
    jspang,
    js1,
    js2,
    count
  }
};
</script>
<style>
.fade-enter {
  opacity: 0;
}
.fade-leave {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-leave-active {
  opacity: 0;
  transition: opacity 0.5s;
}
</style>

