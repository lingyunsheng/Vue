<template>
  <div class="recommend" ref="recommend">
    <scroll class="recommend-content" :data="radioLists" ref="scroll">
      <div>
        <div v-if="recommends.length" class="slider-wrapper" ref="sliderWrapper">
          <slider>
            <div v-for="(item,index) in recommends" :key="index">
              <a :href="item.linkUrl">
                <img @load="loadImg" :src="item.picUrl" />
              </a>
            </div>
          </slider>
        </div>
        <div class="recommend-list">
          <h1 class="list-title radioL">热门电台</h1>
          <ul>
            <li v-for="(item,index) in radioLists" :key="index" class="item">
              <div class="icon">
                <img @load="loadImg" v-lazy="item.picUrl" width="170" height="193" />
              </div>
              <div class="text">
                <h2 class="name" v-html="item.Ftitle"></h2>
              </div>
            </li>
          </ul>
        </div>
        <div class="recommend-list songlist">
          <h1 class="list-title songL">热门歌单推荐</h1>
          <ul class="items">
            <li v-for="(item,index) in discList" class="item" :key="index">
              <div class="icon">
                <img @load="loadImg" v-lazy="item.picUrl" width="170" height="193" />
              </div>
              <div class="text">
                <h2 class="name" v-html="item.songListAuthor"></h2>
                <p class="desc" v-html="item.songListDesc"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="loading-container" v-show="!radioLists.length">
        <loading></loading>
      </div>
    </scroll>
    <router-view> </router-view>
  </div>
</template>
<script>
import { getRecommend, getRadioList, getDiscList } from 'api/recommend'
import { ERR_OK } from 'api/config'
import Slider from 'base/slider/slider'
import Scroll from 'base/scroll/scroll'
import Loading from 'base/loading/loading'
export default {
  data() {
    return {
      recommends: [],
      discList: [],
      songLists: [],
      radioLists: []
    }
  },
  // 钩子函数
  created() {
    setTimeout(() => {
      this._getRecommend()
    }, 2000)
    // 调用方法
    setTimeout(() => {
      this._getRadioList()
    }, 2000)

    this._getDiscList()
  },
  methods: {
    _getRecommend() {
      getRecommend().then(res => {
        if (res.code === ERR_OK) {
          console.log(res.data.slider)
          this.recommends = res.data.slider
        }
      })
    },
    _getRadioList() {
      getRadioList().then(res => {
        if (res.code === ERR_OK) {
          console.log(res.data.radioList)
          this.radioLists = res.data.radioList
        }
      })
    },
    _getDiscList() {
      getDiscList().then(res => {
        if (res.code === ERR_OK) {
          console.log(res.data.songList)
          this.discList = res.data.songList
        }
      })
    },
    loadImg() {
      if (!this.checkLoaded) {
        this.$refs.scroll.refresh()
        this.checkLoaded = true
      }
    }
  },
  components: {
    Slider,
    Scroll,
    Loading
  }
}
</script>
<style lang="scss" scoped>
@import "../common/scss/variable";
.recommend {
  position: fixed;
  width: 100%;
  top: 89px;
  bottom: 0;
  background: #ccc;
  .recommend-content {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .slider-wrapper {
      position: relative;
      width: 100%;
      overflow: hidden;
      margin: 0 auto;
      top: 0;
    }
    .recommend-list {
      .radioL {
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 22px;
        color: #409eff;
        margin-top: 10px;
      }
      .item {
        display: inline-block;
        // float: left;脱离文档流，滑动无效
        // display: flex;
        // flex-direction: row;
        // justify-content: space-between;
        width: 50%;
        padding: 0 1%;
        box-sizing: border-box;
        align-items: center;
        margin-top: 10px;
        .text {
          .name {
            font-size: 16px;
            color:#000;
          }
        }
      }
      .songL {
        padding-top: 10px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 22px;
        color: #409eff;
      }
      .items {
        margin-top: 10px;
        .text {
          .name {
            font-size: 16px;
            color:#000;
          }
          .desc {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: 14px;
          }
        }
      }
    }
    .loading-container {
      position: absolute;
      width: 100%;
      top: 30%;
      transform: translateY(-50%);
    }
  }
}
</style>
