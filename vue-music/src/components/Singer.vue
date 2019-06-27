<template>
  <div class="singer-container" id="swiper">
    <dvi class="singer-swiper-wrapper">
      <div class="swiper-slide">slide1</div>
      <div class="swiper-slide">slide2</div>
      <div class="swiper-slide">slide3</div>
    </dvi>
  </div>
</template>
<script>
import Swiper from 'swiper'
export default {
  name: 'swiper',
  data () {
    return {
      msg: 'thank you'
    }
  },
  mounted () {
    new Swiper('.singer-container',{ loop: true })
  }
}
</script>
<style scoped>
.singer-container {
  width: 500px;
  height: 300px;
  margin: 20px auto;
}
</style>
