<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/recommend">
      <span class="tab-link">推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/sigle">
      <span class="tab-link">歌手</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/rank">
      <span class="tab-link">排行</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/search">
      <span class="tab-link">搜索</span>
    </router-link>
    <input class="search" type="text" placeholder="搜索">
  </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.tab {
  margin-top: 10px;
  background: #409eff;
}
.tab-item {
  display: inline-block;
  margin: 20px 20px;
  height: 90px;
  line-height: 90px;
}
.tab-link {
  font-size: 18px;
  color: #ffffff;
}
.search {
  width: 90%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  margin-bottom: 20px;
  border-radius: 50% solid #fff;
}
</style>
