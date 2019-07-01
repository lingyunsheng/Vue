## vue项目搭建 入门
- 命令行
启动过程
  vue init webpack vue-music
  cd vue-music
  cnpm install
  cnpm run dev

  src 目录

  api 数据交互
  common 公公字体图片 样式文件 存放字体 图片 js插件 stylus样式
  components 组件文件
  router 路由文件
  store vuex集中管理状态

- 修改eslint

- babel 转es6
cnpm i babel-runtime  babel-polyfill -S
babel-runtime 减少重复代码
babel-polyfill 不转换新的api

- stylus stylus-loader
cnpm i stylus stylus-loader --save-dev

- 配置 webpack.base.confi.js 下的alias

- npm i element-ui -S


git pull origin master --allow-unrelated-histories

## 移动端适配
npm install px2rem-loader  lib-flexible --save

## swiper
npm install swiper --save-dev

基础组件库 状态管理vuex 路由vue-router 服务端通讯axios jsonp  第三方插件
 vue-cli脚手架 自动化构建工具webpack 代码检查工具eslint

 npm install style-loader --save-dev

 ##jsonp

 jsonp 解决 跨域问题  再任何站点，都可以通过jsonp去请求接口 去获取数据
 去渲染页面

 - 原理：
  跨域 确认发送的不是ajax请求  利用动态创建一个script标签，
  script没有同源策略限制  script标签的src指向请求支持服务端地址
  和服务端的地址有何区别？ callback a 包裹方法

## recommend
 npm install jsonp
 url 拼接

## scroll
npm install better-scroll -S

npm install express --save

## axios 跨域
var express \= require('express')
var axios \= require('axios')
var app \= express()
var apiRoutes \= express.Router()
app.use('/api', apiRoutes)
before(apiRoutes) {
      apiRoutes.get('/api/getDiscList', function (req, res) {
        var url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg' // 原api
        axios.get(url, {
          headers: {
            referer: 'https://c.y.qq.com/',
            host: 'c.y.qq.com'
          },
          params: req.query
        }).then((response) => {
          res.json(response.data)
        }).catch((e) => {
          console.log(e)
        })
      })
}
recommend.js
export function getDiscList() {
  const url = '/api/getDiscList'

  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

