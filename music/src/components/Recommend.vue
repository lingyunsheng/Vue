<template>
  <div class="recommend">
    <div class="recommend-content">
      <div v-if="recommends.length" class="slider-wrap">
        <slider>
          <div v-for="(item,index) in recommends" :key="index">
            <a :href="item.linkUrl">
              <img :src="item.picUrl">
            </a>
          </div>
        </slider>
      </div>
      <div class="recommend-list">
        <h1 class="list-title">热门歌单推荐</h1>
        <ul>
          <li v-for="(item,index) in discList" class="item" :key="index">
            <div class="icon">
              <img src="item.imgUrl" width="60" height="60">
            </div>
            <div class="text">
              <h2 class="name" v-html="item.creator.name"></h2>
              <p class="desc" v-html="item.dissname"></p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import {getRecommend, getDiscList} from 'api/recommend'
import {ERR_OK} from 'api/config'
import Slider from 'base/slider/slider'
export default {
  data() {
    return {
      recommends: [],
      discList: []
    }
  },
  // 钩子函数
  created() {
    // 调用方法
    this._getRecommend()
    this._getDiscList()
  },
  methods: {
    _getRecommend() {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          console.log(res.data.slider)
          this.recommends = res.data.slider
        }
      })
    },
    _getDiscList() {
      getDiscList().then((res) => {
        if (res.code === ERR_OK) {
          this.discList = res.data.discList
        }
      })
    }
  },
  components: {
    Slider
  }
}
</script>
<style lang="scss" scoped>
@import "../common/scss/variable";
.recommend {
  position: fixed;
  width: 100%;
  top:130px;
  bottom: 0;
  .recommend-content {
    height: 100%;
    overflow: hidden;
    .slider-wrap {
      position: relative;
      width: 100%;
      overflow: hidden;
    }
    .recommend-list {
      h1 {
        height: 65px;
        text-align: center;
        font-size: 22px;
        color: #409eff;
      }
    }
  }
}
</style>
