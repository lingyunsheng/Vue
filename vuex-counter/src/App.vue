<template>
  <div>
    <counter />
    <counter-brother />
  </div>
</template>

<script>
// 两个组件都要用到counter状态 怎么办？ 状态只可以在一处 否则冲突  vue数据管理
import Counter from "./components/counter";
import CounterBrother from "./components/CounterBrother";

export default {
  name: "App",
  methods: {
  },
  components: {
    'counter': Counter,
    'CounterBrother':CounterBrother
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
