## vue 最难的是数据管理 mvvm
- 1.0时代， 组件在我们眼里是最大的，
    data() 私有状态， 自给自足的状态
    不足以成为一个应用
- 2.0 时代， 很多的组件，
  组件的层次及关系， 兄弟组件， 兄弟组件要共享数据的时候 找到共同的负组件
  管理这个状态 通过 prop+emit 方式  登录
- 3.0 时代 vuex 简单项目不要用它，
  管理应用层状态 2.0 太麻烦
  跨组件， 跨层级， 轻松共享应用状态，
  很多组件， 多个路由 要共享太多的状态时 ，它太有用了


# vuex-counter

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install


vue -g @vue-cli
vue  init webpack vuex-counter
cd vuex-counter
npm run start


