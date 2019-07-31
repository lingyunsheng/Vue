<template>
  <div>
    {{msg}}
    {{$store.state.count}}
    <button @click="add">添加</button>
    <button @click="reduce">减少</button>
  </div>
</template>

<script>
import store from '@/vuex/store'
import {mapState, mapMutations} from 'vuex'
export default {
  data() {
    return {
      msg: 'hello'
    }
  },
  // computed: {
  //   count() {
  //     return this.$store.state.count
  //   }
  // },
  store,
  // 第二种
  // computed: mapState({
  //   count:state=>state.count
  // })
  computed:mapState(["count"]),
  methods:mapMutations([
    'add','reduce'
  ])

}
</script>

<style>

</style>
