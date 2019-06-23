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
