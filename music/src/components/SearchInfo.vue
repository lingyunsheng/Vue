<template>
  <div class="search-container">
    杨幂
    <scroll class="scroll" ref="scroll" :data="hotkeyList">
      <div>
        <div class="search-content">
          <el-autocomplete
            v-model="state"
            :fetch-suggestions="querySearchAsync"
            placeholder="搜索歌曲、歌单、专辑"
            @select="handleSelect"
            clearable
            class="el-autocomplete"
            icon="iconfont icon-sousuo"
          ></el-autocomplete>
          <div class="search-hot">
            <h2 class="name">热门搜索</h2>
            <ul>
              <li class="search-hotkeyList" v-for="(item,index) in hotkeyList" :key="index">
                <p class="hotkey-k" v-html="item.k"></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>
<script>
import { ERR_OK } from 'api/config'
import { getHotKey } from 'api/search.js'
import Scroll from 'base/scroll/scroll'
export default {
  data() {
    return {
      state: '',
      input: '',
      hotkeyList: []
    }
  },
  created() {
    this._getHotKey()
  },
  methods: {
    _getHotKey() {
      getHotKey().then(res => {
        if (res.code === ERR_OK) {
          console.log(res.data.hotkey)
          this.hotkeyList = res.data.hotkey
        }
      })
    },
    loadAll() {
      return [
        { value: 'ym', address: 'ym' }
      ]
    }
  },
  components: {
    Scroll
  }
}
</script>
<style lang="scss" scope>
@import "../common/scss/variable";
.search-container {
  position: fixed;
  width: 100%;
  // height: 100%;
  .scroll {
    height: 100%;
    overflow: hidden;
    .search-content {
      width: 100%;
      margin-top: 20px;
      background: #fff;
      .el-autocomplete {
        width: 90%;
      }
      .search-hot {
        margin-top: 10px;
        margin-left: 17px;
        .name {
          text-align: left;
          font-size: 18px;
          color: rgba(0, 0, 0, 0.6);
          height: 25px;
          line-height: 25px;
        }
        .search-hotkeyList {
          margin-top: 20px;
          list-style: none;
          display: inline-block;
          border: 1px solid #666;
          border-radius: 99px;
          margin-right: 10px;
          .hotkey-k {
            font-size: 16px;
            color: #212121;
            text-align: center;
            height: 40px;
            line-height: 40px;
            padding: 0 10px;
            white-space: nowrap;
          }
        }
      }
    }
  }
}
</style>
