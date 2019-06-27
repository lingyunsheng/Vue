<template>
  <div class="mine">
    <div class="mine-item">
      <i class="el-icon-headset"></i>
      <span class="mine-item__bd">本地音乐</span>
    </div>
    <div class="mine-item">
      <i class="el-icon-video-play"></i>
      <span class="mine-item__bd">最近播放</span>
    </div>
    <div class="mine-item">
      <i class="el-icon-download"></i>
      <span class="mine-item__bd">下载管理</span>
    </div>
    <div class="mine-item">
      <i class="el-icon-headset"></i>
      <span class="mine-item__bd">我的电台</span>
    </div>
    <div class="mine-item">
      <i class="el-icon-user"></i>
      <span class="mine-item__bd">我的收藏</span>
    </div>
    <div class="single-menu">
      <h2>创建的歌单</h2>
      <div class="love-menu">
        <span class="love">我喜欢的音乐</span>
      </div>
       <div class="love-menu">
        <span class="love">我喜欢的音乐</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.mine{
  height: 100%;
  background: #fff;
  display: inline-block;
  float: left;
}
.mine-item{
  height:50px;
  line-height: 50px;
  margin-top: 2px;
  margin-left: 10px;
}
.mine-item__bd{
  font-size: 18px;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  color: #000;
  margin-left:10px;
}
/* .el-icon-headset{
  width: 40px;
  height: 40px;
}
.el-icon-video-play{
  width: 40px;
  height: 40px;
}
.el-icon-download{
  width: 40px;
  height: 40px;
}
.el-icon-user{
  width: 40px;
  height: 40px;
} */
.single-menu{
  margin-left: 10px;
  /* border-top: 2px solid #666; */
  margin-top: 5px;
}
.love-menu{
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  color: #000;
  margin-left: 18px;
}
</style>
