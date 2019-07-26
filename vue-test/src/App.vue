<template>
  <div id="app">
    <p>{{count}}</p>
    <button @click="add(4)">add</button>
    <btn @click.native="add(4)"></btn>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      count: 1
    }
  },
  methods: {
    // 传值
    add: function (num) {
      if (num != '') {
        this.count += num
      } else {
        this.count++
      }
    }
  },
  components: {
    "btn": {
      template: `<button>添加</button>`
    }
  }
}
</script>
<style>
</style>
