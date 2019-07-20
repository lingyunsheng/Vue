博客
SEO 对搜索引擎友好 NUXT ssr框架
SPA #root 挂载点 其他的 都是 .vue=> js
index.html html的内容输出 SEO极差

约定即规则

"dev": "nuxt"
yarn add nuxt
npm run dev

yarn add cross-env express cors

- .vue pages/ 页面
    mvc 传统的   controller层 => model => controller
    html=> http response  .vue 放到后端来编译 
    对于后端 文本  .vue(html模板) => nuxt => html 代码
    生命周期 异步数据 页面运行 server side rendering  服务器端渲染  在服务端 服务器这边
    mvvm webpack => .js =>render=> root (JS: DOM)
    加载过程
    asyncData
