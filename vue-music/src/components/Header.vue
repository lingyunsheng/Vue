<template>
  <div class="header">
    <h1>酷狗音乐</h1>
    <router-link tag="div" to="/Mine" class="mine">
        <el-button type="success">我的</el-button>
    </router-link>
    <router-link tag="div" to="/Search" class="search">
      <el-button icon="el-icon-search" circle></el-button>
    </router-link>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .header {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #409EFF;
  }
  h1{
    color:#FFFFFF;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    font-size: 36x;
    text-align: center;
  }
  .mine {
    left: 15px;
    position: absolute;
     top:15px;
  }
  .search {
     top:15px;
    right: 15px;
    position: absolute;
  }
</style>
