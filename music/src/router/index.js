import Vue from 'vue'
import Router from 'vue-router'
import Header from '../components/Header'
import Tab from '../components/Tab'
import Recommend from '../components/Recommend'
import Singer from '../components/Singer'
import Rank from '../components/Rank'
import Search from '../components/Search'
import Mine from '../components/Mine'
import SearchInfo from '../components/SearchInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      redirect: '/Recommend',
      path: '/'
    },
    {
      path: '/Header',
      name: 'Header',
      component: Header
    },
    {
      path: '/Tab',
      name: 'Tab',
      component: Tab
    },
    {
      path: '/Recommend',
      name: '推荐',
      component: Recommend
    },
    {
      path: '/Singer',
      name: '歌手',
      component: Singer
    },
    {
      path: '/Rank',
      name: '排行',
      component: Rank
    },
    {
      path: '/Search',
      component: Search
    },
    {
      path: '/Mine',
      component: Mine
    },
    {
      path: '/SearchInfo',
      component: SearchInfo
    }

  ]
})
