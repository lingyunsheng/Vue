## vue项目搭建 入门
# vue两个版本
开发版本：包含完整的警告和调试模式
生产版本：删除了警告，进行了压缩
# 项目结构搭建
- 命令行
启动过程
  vue init webpack vue-music
  cd vue-music
  cnpm install
  cnpm run dev

  src 目录

  api 数据交互
  common 公公字体图片 样式文件 存放字体 图片 js插件 stylus样式
  components 组件文件
  router 路由文件
  store vuex集中管理状态

- 修改eslint

- babel 转es6
cnpm i babel-runtime  babel-polyfill -S
babel-runtime 减少重复代码
babel-polyfill 不转换新的api

- stylus stylus-loader
cnpm i stylus stylus-loader --save-dev

- 配置 webpack.base.confi.js 下的alias

- npm i element-ui -S


git pull origin master --allow-unrelated-histories

## 移动端适配
npm install px2rem-loader  lib-flexible --save

## swiper
npm install swiper --save-dev

基础组件库 状态管理vuex 路由vue-router 服务端通讯axios jsonp  第三方插件
 vue-cli脚手架 自动化构建工具webpack 代码检查工具eslint

 npm install style-loader --save-dev

 ##jsonp

 jsonp 解决 跨域问题  再任何站点，都可以通过jsonp去请求接口 去获取数据
 去渲染页面

 - 原理：
  跨域 确认发送的不是ajax请求  利用动态创建一个script标签，
  script没有同源策略限制  script标签的src指向请求支持服务端地址
  和服务端的地址有何区别？ callback a 包裹方法

## recommend
 npm install jsonp
 url 拼接

## scroll
npm install better-scroll -S

npm install express --save

## axios 跨域
var express \= require('express')
var axios \= require('axios')
var app \= express()
var apiRoutes \= express.Router()
app.use('/api', apiRoutes)
before(apiRoutes) {
      apiRoutes.get('/api/getDiscList', function (req, res) {
        var url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg' // 原api
        axios.get(url, {
          headers: {
            referer: 'https://c.y.qq.com/',
            host: 'c.y.qq.com'
          },
          params: req.query
        }).then((response) => {
          res.json(response.data)
        }).catch((e) => {
          console.log(e)
        })
      })
}
recommend.js
export function getDiscList() {
  const url = '/api/getDiscList'

  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}


# v-if v-show
- v-if
  - v-if:是vue 的一个内部指令，指令用在我们的html中。v-if用来判断是否加载html的DOM，比如我们模拟一个用户登录状态，在用户登录后现实用户名称。
  <text v-if="isLogin">你好</text>
  <text v-else>请登录</text>
  js
    data:{
      isLogin:false
    }
  v-i判断是否加载html的dom元素 vue的data里定义了isLogin的值，当它为true时，网页就会显示：你好：JSPang，如果为false时，就显示请登录后操作。
- v-show
  - v-show 就是控股只html的dom元素是否显示
    用来调整css的display属性 DOM已经生成了 css控制display属性
    没有显示出来
    <text v-show="isLogin">你好</text>
- v-if v-show区别

v-if 是否加载html的dom元素 减轻服务器的压力 在需要的时候加载
v-show 调整 css 的display属性 使客户端更加流畅

# v-for
v-for 循环渲染一组data中的数组 循环渲染列表
v-for 指令 item in items items 是源数据数组 item是数组元素迭代的别名

<li v-for="item in items" key="item"></li>
循环 js定义items数组

- 数组排序
computed: {
  sortItems: function() {
    return this.items.sort(sortNumber);
  }
}
sortNumber: function(a,b) {
  return a-b
}

# v-text & v-html
- v-text
我们已经会在html中输出data中的值了，我们已经用的是,这种情况是有弊端的，就是当我们网速很慢或者javascript出错时，会暴露我们的。Vue给我们提供的v-text,就是解决这个问题的。我们来看代码：
v-html
当 js里有html 标签 v-html v-text输不出来的
双大括号会将数据解释为纯文本，而非HTML。为了输出真正的HTML，你就需要使用v-html 指令。 需要注意的是：在生产环境中动态渲染HTML是非常危险的，因为容易导致XSS攻击。所以只能在可信的内容上使用v-html，永远不要在用户提交和可操作的网页上使用。

# v-on 绑定事件监听器
- v-on 就是监听事件 可以用v-on指令监听DOM事件来触发js代码
使用绑定事件监听器
<button v-on:click="add">add</button>
- @click 代替
- 绑定其他事件
输入框的事件 按回车 输出到屏幕
<input type="text" v-on:keyup.enter="onenter" v-model="secondcount">
onenter: function(count) {
  this.count=this.count+parseInt(secondcount)
}
文本框的输出到屏幕
<input type="text" v-on:keyup.enter="enter" v-model="inputVal">
<p>{{inputValue}}</p>

inputValue: ''
enter: function() {
  this.inputValue: this.inputVal
}

# v-model

绑定数据源。就是把数据绑定在特定的表单元素上，可以很容易的实现双向数据绑定

双向数据绑定

<input type="text" v-model="message">

message: ''

.lazy：取代 imput 监听 change 事件。
.number：输入字符串转为数字。
.trim：输入去掉首尾空格。

- 双向数据绑定 v-model
 <h3>单选按钮绑定</h3>
    <input type="radio" id="one" value="男" v-model="sex" />
    <label for="one">男</label>
    <input type="radio" id="two" value="女" v-model="sex" />
    <label for="one">女</label>
    <p>{{sex}}</p>

# v-bind
处理 html 标签属性
就是一个标签，也是一个标签，我们绑定上的src进行动态赋值。
img 绑定 src属性
<img v-bind:src="imgSrc" width="200px">
v-bind:href="url"
缩写 :href
<a :href="url"></a>

# 其他内部指令(v-pre & v-cloak & v-once) v-pre v-clock v-once

- v-pre 保持原样输出
<div v-pre>{{meassage}}</div>
- v-cloak 渲染完整个dom才进行显示
[v-cloak] {
  display: none;
}
<div v-cloak>
  {{ message }}
</div>
- v-once 第一次渲染dom时 渲染完成 静态 以后跳出渲染

# 上午复习总结
<template>
  <div id="app">
    <p v-if="isLogin">你好</p>
    <p v-else>请登录</p>
    <ul>
      <li v-for="item in items" key="item">{{item}}</li>
    </ul>
    <span v-text="message"></span>
    <span v-html="msg"></span>
    <p>{{count}}</p>
    <button v-on:click="add">加分</button>
    <button @click="add">加分2</button>
    <input type="text" v-on:keyup.enter="onenter" v-model="secondCount" />
    <input type="text" v-on:keyup.enter="Enter" v-model="inputVal" />
    <p>{{inputValue}}</p>
    <input type="text" v-model="message" />
    <p>{{message}}</p>
    第一次渲染:<p v-once>{{message}}</p>

    <h3>多选按钮绑定一个值</h3>
    <input type="checkbox" id="isTrue" v-model="isTrue" />
    <label for="isTrue">{{isTrue}}</label>

    <h3>单选按钮绑定</h3>
    <input type="radio" id="one" value="男" v-model="sex" />
    <label for="one">男</label>
    <input type="radio" id="two" value="女" v-model="sex" />
    <label for="one">女</label>
    <p>{{sex}}</p>

    <img v-bind:src="imgSrc" width="200px">
    <p v-pre>{{message}}</p>


  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isLogin: true,
      items: [20, 19, 38, 90, 32, 89, 47],
      message: "hello,vue",
      msg: "<h1>hello</h1>",
      count: 1,
      inputValue: "",
      message: "",
      isTrue: false,
      sex: '',
      imgSrc:'http://baidu.com/wp-content/uploads/2017/02/vue01-2.jpg'
    };
  },
  computed: {
    sortItems() {
      return this.items.sort(sortNumber);
    }
  },
  methods: {
    sortNumber(a, b) {
      return a - b;
    },
    add: function(count) {
      this.count++;
    },
    onenter: function(count) {
      this.count = this.count + parseInt(this.secondCount);
    },
    Enter: function() {
      this.inputValue = this.inputVal;
    }
  }
};
</script>

<style>
</style>


## 组件的编写

# Vue.directive 指令

- 全局API
常用的
 全局API并不在构造器里 而是先声明全局变量 或者在Vue上定义一些新功能 Vue内置了全局API

 在构造器外部用Vue提供给我们的API函数来定义新的功能

 第一季的指令 # 8个

 自定义指令

 <p v-jspang="color">{{count}}</p>

 Vue.directive('jspang',function(el,binding,vnode) {
   e.style='color:'+bingding.value
 })
 jspang 指令名 v-jspang
 bingding 对象
 data () {
   color: 'red'
 }

 function (el, binding, vnode) {
  console.log(el)
  el.style = 'color:' + binding.value
})
 - 自定义指令 五个生命周期 （钩子函数） 分别是
 bind inserted update componentUpdated,unbind
 bind 绑定时 调用一次
 inserted 被绑定元素插入到父元素调用
 update 更新时调用
 componnetUpdated 完成时调用
 unbind 解绑时调用 销毁 不起效果

 <template>
  <div id="app">
    <p v-jspang="color">{{count}}</p>
    <button @click="add">下一页</button>
  </div>
</template>

<script>
import Vue from "vue";
// 自定义指令 指令名称
Vue.directive("jspang", {
  bind: function(el, binding) {
    //被绑定
    console.log("1 - bind");
    el.style = 'color:'+binding.value
  },
  inserted: function() {
    //绑定到节点
    console.log("2 - inserted");
  },
  update: function() {
    //组件更新
    console.log("3 - update");
  },
  componentUpdated: function() {
    //组件更新完成
    console.log("4 - componentUpdated");
  },
  unbind: function() {
    //解绑
    console.log("5 - bind");
  }
});
export default {
  name: "App",
  data() {
    return {
      count: 1,
      color: "red"
    };
  },
  methods: {
    add: function(count) {
      this.count++;
    }
  }
};
</script>
<style>
</style>


 # Vue.extend 构造器的延伸

 Vue.extend 返回的是扩展实例构造器 生成Vue的实例对象
 和组件一块用

 要挂载到
 还可以通过HTML标签上的id或者class来生成扩展实例构造器，Vue.extend里的代码是一样的，只是在挂载的时候，我们用类似jquery的选择器的方法，来进行挂载就可以了。

 <template>
  <div id="app">
        <h1>vue.extend-扩展实例构造器</h1>
        <div id="author"></div>
  </div>
</template>

<script>
import Vue from 'vue'
var AuthorExtend = Vue.extend({
  template: "<p><a href='authorUrl'>authorName</a></p>",
  data: function () {
    return {
      authorName: 'jspang',
      authorUrl: 'http://www.jspang.com'
    }
  }
})
new AuthorExtend().$mount('#author')
export default {
  name: 'App'
}
</script>
<style>
</style>



# Vue.set 全局操作

Vue.set 在构造器 外部操作 构造器内部的数据 属性 或者方法
为什么要有Vue.set的存在?
由于Javascript的限制，Vue不能自动检测以下变动的数组。

当你利用索引直接设置一个项时，vue不会为我们自动更新。
当你修改数组的长度时，vue不会为我们自动更新。

var outData={
  count:1
}
data: outData
function add(){
       Vue.set(outData,'count',4);
 }


# Vue 生命周期  钩子函数 10个生命周期
beforeCreate 创建之前 初始化之前 读取数据
create 创建完成 渲染数据这个过程
beforeMount 挂载
mounted 被挂载之后
beforeUpdate 数据更新之前
updated 更新之后
actived
deactive
beforeDestory 销毁之前
destory 销毁之后

# template模板 组件
# Component 初识组件
component组件是Vue学习的重点、重点、重点，重要的事情说三遍。所以你必须学好Vue component。其实组件就是制作自定义的标签，这些标签在HTML中是没有的。比如：，那我们就开始学习这种技巧吧。
组件是一切

- 自定义组件 自定义html不存在的标签
  - 全局组件
  <jspang></jspang>

import Vue from 'vue'
Vue.component('jspang',{
  template:`<div>hello</div>`
})

  - 局部组件

  components: {
    "jspang": {
        template:`<div>hello</div>`
    }
  }
components: {
  scroll
}

- 组件注册的是一个标签，而指令注册的是已有标签里的一个属性。在实际开发中我们还是用组件比较多，指令用的比较少。因为指令看起来封装的没那么好，这只是个人观点。
 组件注册的是一个标签  指令封装的没那么方便 没那么好用


 # Component 组件的props属性设置
 props 设置和获取标签上的属性值

 定义属性我们需要用props选项，加上数组形式的属性名称，例如：props:[‘here’]。在组件的模板里读出属性值只需要用插值的形式，例如.

 :name="message"
 components: {
   "jspang": {
     template:`<div>{{name}}</div>`,
     props:['name']
   }

  }

- 属性中带’-‘的处理方式
我们在写属性时经常会加入’-‘来进行分词，比如：，那这时我们在props里如果写成props:[‘form-here’]是错误的，我们必须用小驼峰式写法props:[‘formHere’]。

- 构造器向组件传值
<jspang :name="message"></jspang>
把构造器中data的值传递给组件，我们只要进行绑定就可以了。就是我们第一季学的v-bind:xxx.

我们直接看代码:


# Component 父子组件关系

- 构造器 外部注册 局部组件

先声明父组件 父组件 引用子组件
<template>
  <div id="app">
    <p>{{count}}</p>
    <button @click="add">加分</button>
    <jspang :name="message"></jspang>
  </div>
</template>

<script>
import Vue from "vue";
var city = {
  template: `<div>四川</div>`
};
var jspang = {
  template: `<div>
               Hello,{{name}}
                     <city></city>
               </div>`,
  props: ["name"],
  components: {
    city: city
  }
};
export default {
  name: "App",
  data() {
    return {
      count: 1,
      message: "离凰"
    };
  },
  components: {
    jspang: jspang
  },
  methods: {
    add: function() {
      this.count++;
    }
  }
};
</script>
<style>
</style>

# Component 标签
Component 动态绑定我们的组件，根据组件的不同更换不同的组件
componnets: {
  Scroll,
  Slider
}


### 今日难点 Vue.set Component标签


# propsData Option 全局扩展的数据传递
propsData 不是和属性有关 再全局扩展时进行传递数据

全局扩展的方式自定义标签 propsData用在扩展

var header_a = Vue.extend({
  tempalate:`<div>{{message}}--{{a}}`,
  data: function() {
    return: {
      message: 'hi',
    }
  },
  props: ['a']
})
new header_a({propsData:{a: 1}}).$mount('header')

扩展标签已经做好了，这时我们要在挂载时传递一个数字过去，我们就用到了propsData。 我们用propsData三步解决传值： 1.在全局扩展里加入props进行接收。propsData:{a:1} 2.传递时用propsData进行传递。props:[‘a’] 3.用插值的形式写入模板。 完整代码：
总结：propsData在实际开发中我们使用的并不多，我们在后边会学到Vuex的应用，他的作用就是在单页应用中保持状态和数据的。

# computed 计算
  - computed 对源数据进行改造输出 格式编辑 大小写转换 顺序重排 添加符号
  <div id="app">
    {{newPrice}}
    {{reverseNewList}}
  </div>

  computed: {
    newPrice: function() {
      return (this.price = "￥" + this.price + "元");
    },
    reverseNewList: function () {
      return this.newsList.reverse()
    }
  }
</script>
<style>
</style>

# methods 方法
在以前的学习中，已经大量的使用了构造器里的methods选项，但是并没有仔细和系统的讲解过，这节课我们用点时间把methods这个选项涉及的东西都讲一讲。 methods 的方法 函数功能的实现

使用方法和正常的javascript传递参数的方法一样，分为两部：

在methods的方法中进行声明，比如我们给add方法加上一个num参数，就要写出add:function(num){}.
调用方法时直接传递，比如我们要传递2这个参数，我们在button上就直接可以写。<button @click=”add(2)”></button>.
现在知道了加参数的方法，看一段完整的代码，代码中给add添加了num参数，并在按钮上调用传递了。

- event
- 组件 多个组件共用一个方法
传递的$event参数都是关于你点击鼠标的一些事件和属性。我们先看看传递的方法。
- 需要修饰符 native
    <btn @click.native="add(4)"></btn>
    声明组件
  - 作用域外部调用构造器里的方法
# watch 监听
数据变化的监控经常使用，我们可以先来看一个简单的数据变化监控的例子。例如天气预报的穿衣指数，它主要是根据温度来进行提示的，当然还有其它的，咱们就不考虑了。

有些时候我们会用实例属性的形式来写watch监控。也就是把我们watch卸载构造器的外部，这样的好处就是降低我们程序的耦合度，使程序变的灵活。
# Mixins 混入选项
在你已经写好了构造器后，需要增加方法或者临时的活动时使用的方法，这时用混入会减少源代码的污染。
很多地方都会用到的公用方法，用混入的方法可以减少代码量，实现代码重用。
# extends 扩展选项
通过外部增加对象的形式，对构造器进行扩展。它和我们上节课讲的混入非常的类似。


### Vue 实力入门 实例属性 内置组件
# Vue和jQuery一起使用
- 下载jquery并引入挂载到钩子函数
mounted: function () {
  $('#appp').html('jquery')
}

在DOM操作 修改里边的内容

# 实例调用自定义方法
和昨天一样
在构造器methods里写 add方法
methods:{
    add:function(){
        console.log("调用了Add方法");
    }
}
实例调用
app.add()
我们有可能把app.add()的括号忘记或省略，这时候我们得到的就是方法的字符串，但是并没有执行，所以必须要加上括号。

# 实例方法

- $mount方法
var jspang = Vue.extend({
  template:`<div>he</div>`,
  data: function () {
    return {
      message: 'hell
    }
  }
})

new jspang().$mount('#app')

- $destory() 卸载方法
function destroy(){
   vm.$destroy();
}

用$destory()进行卸载

- $forceUpdate() 更新方法
vm.$forceUpdate()
- $nextTick() 修改数据方法
当Vue构造器里的data值被修改完成后会调用这个方法，也相当于一个钩子函数吧，和构造器里的updated生命周期很像。

function tick () {
  vm.message='hi'
  vm.$nexTick(function() {
    console.log('更新完成')
  })
}

# 实例事件

实例事件就是在 外部构造器 写一个调用构造器内部的方法 在构造器外部 调用构造器内部的数据
- $on 在构造器外部添加事件
app.$on('reduce',function(){
    console.log('执行了reduce()');
    this.num--;
});
$on接收两个参数，第一个参数是调用时的事件名称，第二个参数是一个匿名方法。

如果按钮在作用域外部，可以利用$emit来执行。
- $emit
function reduce() {
  app.$emit('reduce')
}
- $ once 自醒一次的事件
- $off 关闭事件
app.$once('reduceOnce',function(){
    console.log('只执行一次的方法');
    this.num--;

});
# slot插槽
标签的内容扩展
用slot可以在 自定义组件 时 传递组件内容 组件接收内容并输出
我们现在就可以用slot功能让组件接收传递过来的值，并在模板中接收显示。
    <p>博客地址 <slot name="blogUrl"></slot> {{jspangData.blogUrl}}</p>
    <p>网名 <slot name="netName"></slot></p>
    <p>技术类型 <slot name="skill"></slot></p>

插槽


### vue-cli vue官方出品的脚手架
webpack npm node.js babel
npm i vue-cli -g
vue init webpack vue-test

vue init <template-name> <project-name>

template 五个模板
- webpack 一个全面的 webpack+vue-loader的模板 包括热加载 预定义 css
- webpack-simple 简单快速搭建vue开发环境
- browserify 一个全面的browsify+vueify 包括热加载
- browsify-simple
- simple 简单的单页应用模板
vue init webpack vuecliTest

cd test
npm run dev  开发模式下运行我们的程序。给我们自动构建了开发用的服务器环境和在浏览器中打开，并实时监视我们的代码更改，即时呈现给我们。 开发者模式下运行我们的程序 给我们构建了开发用的服务器 在浏览器打开 并实时监视代码更改

# Vue-cli 项目结构
vue-cli 为我们搭建开发用的环境
.
|-- build                            // 项目构建(webpack)相关代码
|   |-- build.js                     // 生产环境构建代码
|   |-- check-version.js             // 检查node、npm等版本
|   |-- dev-client.js                // 热重载相关
|   |-- dev-server.js                // 构建本地服务器
|   |-- utils.js                     // 构建工具相关
|   |-- webpack.base.conf.js         // webpack基础配置
|   |-- webpack.dev.conf.js          // webpack开发环境配置
|   |-- webpack.prod.conf.js         // webpack生产环境配置
|-- config                           // 项目开发环境配置
|   |-- dev.env.js                   // 开发环境变量
|   |-- index.js                     // 项目一些配置变量
|   |-- prod.env.js                  // 生产环境变量
|   |-- test.env.js                  // 测试环境变量
|-- src                              // 源码目录
|   |-- components                     // vue公共组件
|   |-- store                          // vuex的状态管理
|   |-- App.vue                        // 页面入口文件
|   |-- main.js                        // 程序入口文件，加载各种公共组件
|-- static                           // 静态文件，比如一些图片，json数据等
|   |-- data                           // 群聊分析得到的数据用于数据可视化
|-- .babelrc                         // ES6语法编译配置
|-- .editorconfig                    // 定义代码格式
|-- .gitignore                       // git上传需要忽略的文件格式
|-- README.md                        // 项目说明
|-- favicon.ico
|-- index.html                       // 入口页面
|-- package.json                     // 项目基本信息
.

package.json 文件根目录下的一个文件 定义项目开发所需要的项目依赖 各种模块 项目配置信息
package.json 里的scripts字段，这个字段定义了你可以用npm运行的命令。在开发环境下，在命令行工具中运行npm run dev 就相当于执行 node build/dev-server.js .也就是开启了一个node写的开发行建议服务器。由此可以看出script字段是用来指定npm相关命令的缩写。

 "scripts": {
    "dev": "node build/dev-server.js",
    "build": "node build/build.js"
  },
dependencies字段和devDependencies字段

dependencies字段指项目运行时所依赖的模块；
devDependencies字段指定了项目开发时所依赖的模块；
在命令行中运行npm install命令，会自动安装dependencies和devDempendencies字段中的模块。package.json还有很多相关配置，如果你想全面了解，可以专门去百度学习一下。

# webpack配置相关

webpack.base.config.js 项目配置 alias css
.babelrc 解释器的配置文件 转码器 项目需要用它把ES6转换成ES5

npm run build 打包上线
执行完 npm run build 生成dist目录
这个文件夹的内容就是我们上传到服务器的文件
dist文件夹下目录包括：

index.html主页文件:因为我们开发的是单页web应用，所以说一般只有一个html文件。
static 静态资源文件夹：里边js、CSS和一些图片。
# main.js文件解读 整个项目的入口文件

引进App组件和模板
import App from './App'

App.vue

app.vue文件我们可以分成三部分解读，

<template></template>标签包裹的内容：这是模板的HTMLDom结构，里边引入了一张图片和<router-view></router-view>标签，<router-view>标签说明使用了路由机制。我们会在以后专门拿出一篇文章讲Vue-router。
<script></script>标签包括的js内容：你可以在这里些一些页面的动态效果和Vue的逻辑代码。
<style></style>标签包裹的css内容：这里就是你平时写的CSS样式，对页面样子进行装饰用的，需要特别说明的是你可以用<style scoped></style>来声明这些css样式只在本模板中起作用。

引文在app.vue中我们看到了路由文件，虽然router的内容比较多，但是我们先简单的看一下。下篇文章我们就开始讲Vue-router。


### vue-router
由于Vue在开发时对路由支持的不足，后来官方补充了vue-router插件，它在Vue的生态环境中非常重要，在实际开发中只要编写一个页面就会操作vue-router。要学习vue-router就要先知道这里的路由是什么？这里的路由并不是指我们平时所说的硬件路由器，这里的路由就是SPA（单页应用）的路径管理器。再通俗的说，vue-router就是我们WebApp的链接路径管理系统

vue-router 单页应用spa的路径管理器 vue-router时webapp的链接路径管理系统

-  npm i vue-router --save-dev
- 引入组件
import jspang from '@/components/jspang'

- 增加路由配置
{
  path:'/' //配置路由 链接路径
  name: 'helloworld' //路由名称
  component: helloworld //组件名称 对应的模板
}
{
  path:'/jspang' //配置路由 链接路径
  name: 'jspang' //路由名称
  component: jspang //组件名称 对应的模板
}

- router-link 制作路由导航

<router-link to='/jspang'>jspang</router-link>
to: 导航路径 router/index.js下配置的
显示字段：导航的名称
   <router-link to="/">首页</router-link>
   <router-link to="/hi">Hi页面</router-link>
### vue-router 配置子路由
上节 vue-router 基本跳转方式

子路由

{
  path:'/jspang' //配置路由 链接路径
  name: 'jspang' //路由名称
  component: jspang //组件名称 对应的模板,
  children: [
    {
        path: '/',
        component: jspang
    },
    {
        path: '/js1',
        component: js1
    },
    {
        path: '/js2',
        component: js2
    }
  ]
}

- router-view 标签
jspang 时一个通用模板 js1和js2 都是子页面
把Hi.vue改成一个通用的模板，加入<router-view>标签，给子模板提供插入位置。“Hi页面1” 和 “Hi页面2” 都相当于“Hi页面”的子页面，有点想继承关系。我们在“Hi页面”里加入<router-view>标签。

子路由
children:[
{path:'/',component:xxx},
{path:'xx',component:xxx},
]

### vue-router 参数传递
开发中，参数的传递是个最基本的业务需求。通过URL地址来传递参数是一个形式，这节课我们就看看vue-router为我们提供了那些传递参数的功能。我们先想象一个基本需求，就是在我们点击导航菜单时，跳转页面上能显示出当前页面的路径，来告诉用户你想在所看的页面位置（类似于面包屑导航）。

参数传递 url

- name 传递
配置 router 下的routes name
App.vue
{{$route.name}}
- 通过<router-link> 标签中的to传参 **
<router-link to=>

也许你也会觉的上边的传参很不正规，也不方便，其实我们多数传参是不用name进行传参的，我们用<router-link>标签中的to属性进行传参，需要您注意的是这里的to要进行一个绑定，写成:to。先来看一下这种传参方法的基本语法：

<router-link :to="{name:xxx,params:{key:value}}">valueString</router-link>
这里的to前边是带冒号的，然后后边跟的是一个对象形势的字符串.

name：就是我们在路由配置文件中起的name值。
params：就是我们要传的参数，它也是对象形势，在对象里可以传递多个值。
了解基本的语法后，我们改造一下我们的src/App.vue里的<router-link>标签,我们把hi1页面的<router-link>进行修改。

 <router-link :to="{name:'hi1',params:{username:'jspang'}}">Hi页面1</router-link>

 把src/reouter/index.js文件里给hi1配置的路由起个name,就叫hi1.

{path:'/hi1',name:'hi1',component:Hi1},

h1.vue

{{$route.params.username}}

### 单页面多路由区域操作

在一个页面里我们有2个以上<router-view>区域，我们通过配置路由的js文件，来操作这些区域的内容。例如我们在src/App.vue里加上两个<router-view>标签。我们用vue-cli建立了新的项目，并打开了src目录下的App.vue文件，在<router-view>下面新写了两行<router-view>标签,并加入了些CSS样式。

<router-view ></router-view>
 <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
 <router-view name="right" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view>
<router-link to="/">首页</router-link> |
<router-link to="/hi">Hi页面</router-link> |

### vue-router利用url传递参数

前后端没有分开时 用url传递参数 实际开发 url传值 比如在 点击不同的标题或者列表 传递不一样的内容

- 冒号的形式传递参数  在路由配置文件 以 冒号的形式传递设置参数
新建params.vue
在router下 建立 index下配置 要传递的参数
{
  path:'/params/:newsId/:newsTitle',
  component:Params
}

params.vue

<p>新闻ID:{{$route.params.newsId}}</p>
<p>新闻标题:{{$route.params.newsTitle}}</p>

App.vue
<router-link to='/params/1998/wo'>params</router-link>
我们已经实现了以url方式进行传值，这在实际开发中经常使用，必须完全了解。我希望你看完视频后或者学完文章后能多练习两边，并在实际项目中充分使用。

- 正则
### vue-router的重定向redirect
开发中有时候我们虽然设置的路径不一致，但是我们希望跳转到同一个页面，或者说是打开同一个组件。这时候我们就用到了路由的重新定向redirect参数。
调到同一个页面

这里我们设置了goback路由，但是它并没有配置任何component（组件），而是直接redirect到path:’/’下了，这就是一个简单的重新定向。

** 重定向时传递参数**
export default new Router({
  routes: [
    {
      path: '/',
      component: Hello
    },{
      path:'/params/:newsId(\\d+)/:newsTitle',
      component:Params
    },{
      path:'/goback',
      redirect:'/'
    }

  ]
})
我们已经学会了通过url来传递参数，那我们重定向时如果也需要传递参数怎么办？其实vue也已经为我们设置好了，我们只需要在ridirect后边的参数里复制重定向路径的path参数就可以了。可能你看的有点晕，我们来看一段代码：

{
  path:'/params/:newsId(\\d+)/:newsTitle',
  component:Params
},{
  path:'/goParams/:newsId(\\d+)/:newsTitle',
  redirect:'/params/:newsId(\\d+)/:newsTitle'
}
已经有了一个params路由配置，我们在设置一个goParams的路由重定向，并传递了参数。这时候我们的路由参数就可以传递给params.vue组件了。参数接收方法和正常的路由接收方法一样。

重定向 页面最新调到的一个页面
{
  path: '/goback',
  redirect: '/'
}
# 第7节：alias别名的使用

### alias别名的使用
使用alias别名的形式，我们也可以实现类似重定向的效果。
** redirect和alias的区别 **

redirect：仔细观察URL，redirect是直接改变了url的值，把url变成了真实的path路径。
alias：URL路径没有别改变，这种情况更友好，让用户知道自己访问的路径，只是改变了<router-view>中的内容。

### 路由的过度动画
可以在页面切换时我们加入一些动画效果，提升我们程序的动效设计。这节课我们就学习一下路由的过渡动画效果制作。
页面切换时加入动画过渡效果
<transition name="fade">
  <router-view></router-view>
</transition>
- fade-enter 进入过渡的开始状态 元素被插入时生效 只应用一帧就立刻删除
- fade-enter-active 进入过渡的结束状态 元素被插入生效 在过渡完成时立刻移除
- fade-leave 离开过渡的开始状态 元素被删除时触发 只应用一帧后立刻删除
- fade-leave-active 离开过都结束状态 元素被删除时触发 离开过渡完成后被删除
从上面四个类名可以看出，fade-enter-active和fade-leave-active在整个进入或离开过程中都有效，所以CSS的transition属性在这两个类下进行设置。

.fade-enter {
  opacity:0
}
.fade-leave{
  opacity:1
}
.fade-enter-active {
  transition: opacity .5s
}
.fade-leave-active {
  opacity: 0
  transition: opacity .5s
}

上边的代码设置了改变透明度的动画过渡效果，但是默认的mode模式in-out模式，这并不是我们想要的。下面我们学一下mode模式。

过渡模式mode：

in-out:新元素先进入过渡，完成之后当前元素过渡离开。
out-in:当前元素先进行过渡离开，离开完成后新元素过渡进入。

in-out：新元素进入过渡 完成国度后 元素过渡离开
out-in 新元素进行过渡离开 离开后新元素进入
### mode的设置和404处理

路由属性 mode
- mode两个值
1. history
使用 history 模式时 url正常 http://jspang.com
<stong>没有#</strong>
2. hash 默认hash 无意义的字符排列
http://localhost:8080/#/jspang

** 404页面的设置： **

文件资源未存
在用户会经常输错页面，当用户输错页面时，我们希望给他一个友好的提示，为此美工都会设计一个漂亮的页面，这个页面就是我们常说的404页面。vue-router也为我们提供了这样的机制.
配置路由:

{
  path: '*',
  component: Error
}
### 路由的钩子
路由中 组件进入销毁 很多钩子函数 设置钩子函数
- beforeRouterEnter 在路由进入前的钩子函数。
- beforeRouterLeave 在路由离开前的钩子函数。
我们在params路由里配置了bdforeEnter得钩子函数，函数我们采用了ES6的箭头函数，需要传递三个参数。我们并在箭头函数中打印了to和from函数。具体打印内容可以在控制台查看object。

三个参数：

to:路由将要跳转的路径信息，信息是包含在对像里边的。
from:路径跳转前的路径信息，也是一个对象的形式。
next:路由的控制参数，常用的有next(true)和next(false)。

beforEnter: (to, from, next)=> {
  console.log('params')
  console.log(to) //跳转当前页面的路径
  console.log(from) //从哪里调转过来的
  next() //可以往下跳转  true false 或者对象 next({path:'/'}) 是否开关是否跳转
}
只有一个是 beforeEnter
两个如上 模板写

### 编程式导航

<router-link>

业务逻辑代码 跳转页面 =》 编程式导航 在业务逻辑代码中实现导航

- this.$router.go(-1) 后退
- this.$router.go(1) 前进
功能跟我们浏览器上的后退和前进按钮一样，这在业务逻辑中经常用到。比如条件不满足时，我们需要后退。
    goback() {
      this.$router.go(1)
    },
    gohome() {
      this.$router.go(-1)
    },
    go() {
      this.$router.push('/')
    }
这个编程式导航都作用就是跳转，比如我们判断用户名和密码正确时，需要跳转到用户中心页面或者首页，都用到这个编程的方法来操作路由。


# Vuex
vuex是一个专门为vue.js设计的集中式状态管理架构。状态？我把它理解为在data中的属性需要共享给其他vue组件使用的部分，就叫做状态。简单的说就是data中需要共用的属性。比如：我们有几个页面要显示用户名称和用户等级，或者显示用户的地理位置。如果我们不把这些属性设置为状态，那每个页面遇到后，都会到服务器进行查找计算，返回后再显示。在中大型项目中会有很多共用的数据，所以尤大神给我们提供了vuex。

npm n install vuex --save 利用包管理工具npm 安装vuex

- vuex store.js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state= {
  count: 1
}
<!-- 封装代码 -->
export default new Vuex.Store({
  state
})
- 新建模板
count.vue
{{$store.state.count}}
import Store from '@/vuex/store'
<!-- 添加两个方法 改变state -->
<!-- mutations -->
const mutations = {
  <!-- 传入state -->
  add(state) {

  }
  reduce(state) {

  }
}

### state访问状态对象

state 就是访问状态对象 spa 单页应用的 共享值
状态对象赋值给内部对象，也就是把stroe.js中的值，赋值给我们模板里data中的值。我们有三种赋值方式
- computed 通过computed的计算属性直接赋值**
computed属性可以在输出前，对data中的值进行改变，我们就利用这种特性把store.js中的state值赋值给我们模板中的data值。
computed:{
    count(){
        return this.$store.state.count;
    }
}
这里需要注意的是return this.$store.state.count这一句，一定要写this，要不你会找不到$store的。这种写法很好理解，但是写起来是比较麻烦的，那我们来看看第二种写法。
- mappState 通过mapState的对象来赋值
- mutations
我们首先要用import引入mapState。

import {mapState} from 'vuex';
然后还在computed计算属性里写如下代码：

computed:mapState({
        count:state=>state.count
 })
这里我们使用ES6的箭头函数来给count赋值。

** 三、通过mapState的数组来赋值 **

 computed:mapState(["count"])
这个算是最简单的写法了，在实际项目开发当中也经常这样使用。

这就是三种赋值方式，是不是很简单，虽然简单，但是在实际项目中经常使用，一定要自己动手练习两遍啊。

# 第3节：Mutations修改状态
这只是一个最简单的修改状态的操作，在实际项目中我们常常需要在修改状态时传值。比如上边的例子，是我们每次只加1，而现在我们要通过所传的值进行相加。其实我们只需要在Mutations里再加上一个参数，并在commit的时候传递就就可以了。我们来看具体代码：

现在store.js文件里给add方法加上一个参数n。添加的地方我已经标黄了。

const mutations={
    add(state,n){
        state.count+=n;
    },
    reduce(state){
        state.count--;
    }
}
在Count.vue里修改按钮的commit( )方法传递的参数，我们传递10，意思就是每次加10.

<p>
   <button @click="$store.commit('add',10)">+</button>
   <button @click="$store.commit('reduce')">-</button>
</p>
这样两个简单的修改我们就完成了传值，我们可以在浏览器中实验一下了。

** 模板获取Mutations方法 **

实际开发中我们也不喜欢看到$store.commit( )这样的方法出现，我们希望跟调用模板里的方法一样调用。

import {mapState, mapMutation} from 'vuex'
computed:mapState(["count"])
methods:mapMutation({
  <!-- 传入的方法 -->
  'add','reduce'
})
<!-- <button @click="reduce">-</button> -->
