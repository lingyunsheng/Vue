<template>
  <div class="header">
    <h1 class="text">酷狗音乐</h1>
    <router-link tag="div" to="/Mine" class="mine">
        <i class="iconfont icon-caidan"></i>
    </router-link>
    <router-link tag="div" to="/SearchInfo" class="search">
      <i class="iconfont icon-sousuo"></i>
    </router-link>
  </div>
</template>
<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../common/scss/variable";
* {
  margin: 0;
  padding: 0;
}
.header {
  position: relative;
  height: 44px;
  width: 100%;
  text-align: center;
  background: #409EFF;
   font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  .text {
    line-height: 44px;
    font-weight: bold;
    color: #FFFFFF;
  }
  .mine {
    position: absolute;
    top: -1.5px;
    left: 0;
    .iconfont {
      display: block;
      padding: 11px;
      font-size: 22px;
      color:#FFFFFF;
    }
  }
  .search {
    position: absolute;
    top: 0px;
    right: 2px;
    .iconfont {
      display: block;
      padding: 12px;
      font-size: 18px;
      color: #FFFFFF;
    }
  }
}
</style>

  // .header {
  //   width: 100%;
  //   height: 40px;
  //   line-height: 40px;
  //   background: #409EFF;
  // }
  // h1{
  //   color:#FFFFFF;
  //   font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  //   font-size: 36x;
  //   text-align: center;
  // }
  // .mine {
  //   left: 15px;
  //   position: absolute;
  //    top:15px;
  // }
  // .search {
  //    top:15px;
  //   right: 15px;
  //   position: absolute;
  // }
