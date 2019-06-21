// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'  //mvvm
import App from './App' //根组件
import store from './store';//统一管理应用状态
//SPA
new Vue({
  el:'#app',
  store,//只允许一个管理状态
  // app 内部好多组件1 混合到一起 挂载到由 h去handle编译最后到 render这个节点
  render:h=>h(App)
})


