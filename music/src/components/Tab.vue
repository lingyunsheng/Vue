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
      <span class="tab-link">视频</span>
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
   height: 90px;
  line-height: 90px;
  width: 100%;
  background: #409eff;
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
