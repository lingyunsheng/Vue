/* eslint-disable no-unused-vars */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Meta from 'vue-meta'
import App from './App'
import router from './router'
// import 'babel-polyfill'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'lib-flexible/flexible.js'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import './assets/css/iconfont.css'
import '@/style/index.scss'
import '@/utils/rem'
import '@/utils/axios'
import store from './store/index'
import global from './utils/global'
import VueLazyLoad from 'vue-lazyload'
Vue.use(ElementUI)
Vue.use(iView)

Vue.use(VueLazyLoad, {
  loading: require('common/images/default.jpg')
})
Vue.config.productionTip = false
Vue.use(Meta)
Vue.use(global)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  render: h => h(App),
  template: '<App/>'
})
