<template>
  <div>
    {{$store.state.count}} times,
    <button @click="increment">+</button>
  </div>
</template>
<script>
export default {
  // 组件数据通信
  // props:['count'],
  methods: {
    increment(){
      // 由 store
      // this.$emit('increment')
    }
  },
}
</script>
<style>

</style>
