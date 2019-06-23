<template>
  <div id="app">
    <Header></Header>
    <Tab></Tab>
    <router-view/>
  </div>
</template>

<script>
import Header from 'components/Header'
import Tab from 'components/Tab'
export default {
  components: {
    Header,
    Tab
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  padding: 0;
}
</style>
