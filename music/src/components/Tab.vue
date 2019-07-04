<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/Recommend" >
      <span class="tab-link">推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/Singer">
      <span class="tab-link">歌手</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/Rank">
      <span class="tab-link">排行</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/Search">
      <span class="tab-link">搜索</span>
    </router-link>
  </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.tab {
  display: flex;
   height: 45px;
  line-height: 45px;
  width: 100%;
  background: #409eff;
  margin: 0 auto;
}
.tab-item {
  flex:1;
  text-align: center;
}
.tab-link {
  font-size: 18px;
  color: #ffffff;
}
.router-link-active{
  font-weight: bold;
  color:#ffffff;
}
</style>
