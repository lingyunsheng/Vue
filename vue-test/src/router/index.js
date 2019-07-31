import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import jspang from '@/components/jspang'
import js1 from '@/components/js1'
import js2 from '@/components/js2'
import params from '../components/params'
// eslint-disable-next-line no-unused-vars
import goback from '../components/goback'
import Error from '../components/Error'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default: HelloWorld,
        left: js1,
        right: js2
      }
    },
    {
      path: '/jspang',
      name: 'jspang',
      components: {
        default: jspang,
        left: js1,
        right: js2
      }
    },
    {
      path: '/params/:newsId(\\d+)/:newsTitle',
      component: params
    },
    {
      path: '/goback',
      redirect: '/'
    },
    {
      path: '/js1',
      component: js1,
      alias: '/jspang'
    },
    {
      path: '*',
      component: Error
    }
  ]
})
