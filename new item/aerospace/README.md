# aerospace

> A Vue.js project

## Project file Structrue 项目文件结构 

├── build/ # 项目打包配置文件 vue-cli 初始化的文件
├── node_modules/ #模块文件
├── config/ #配置文件 vue-cli 初始化的配置
├── dist/  #打包后的文件存放目录
├── src/ #项目入口目录
    ├── assets/   #前端资源目录
        ├── img/  # 静态图片存放
    ├── components/   # vue组件目录/.vue文件存放目录
        ├── choose.vue  # 首页下部推荐组件
        ├── fenye.vue # 搜索信息分页组件
        ├── footer.vue  # 网站底栏组件
        ├── header.vue  # 网站头部组件
        ├── rank.vue # 列表页排名功能组件
        ├── recommend.vue  # 列表页推荐组件
        ├── search.vue # 搜索框组件
        ├── swiper.vue  # 轮播图组件
    ├── page/   # vue页面目录
        ├── choosepage  # 首页下侧推荐静态页面  
        ├── recommemdpage # 列表页左侧推荐静态页面
        ├── abstract.vue  # 摘要页
        ├── homepage.vue # 首页
        ├── list.vue  # 列表页
        ├── login.vue  # 登录页
        ├── mobile.vue # 手机下载页
        ├── pay.vue  # 支付页
        ├── precise_recommend.vue # 精准推荐页面
        ├── ranklist.vue  # 热点分析页面
        ├── register.vue  # 注册页面
    ├── router/  # vue路由管理目录 
        ├── index.js # 路由主文件
    ├── App.vue # 项目根组件
    ├── main.js # 项目入口文件
├── static/ #静态文件存放目录
    ├── font-awesome-4.7.0/   # 字体图标资源
    ├── jquery3dlb  # jquery插件资源 
    ├── pdf.js-gh-pages  # pdf插件资源
├── .babelrc
├── .editorconfig
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── .postcsssrc.js
├── .aerospace - project dependency.txt npm下载资源记录
├── index.html
├── package.json #包文件信息
├── README.md 使用前阅读


## Build Setup 运行

``` bash
# install dependencies 下载项目依赖
npm install

# serve with hot reload at localhost:8080 运行开发环境 localhost:8080
npm run dev

# build for production with minification 打包生产环境,目标目录dist
npm run build

# build for production and view the bundle analyzer report 分析打包详情
npm run build --report
```

## Main Technology 主要技术

vue:前端js框架
element-ui:跟vue搭配的前端ui框架
axios:调用后端接口的ajax工具
vuex:全局状态管理工具
vue-router:路由工具
sass:css预处理
jquery:简便轻型的JavaScript库

## Browser support 支持浏览器

Modern browsers and IE 10+.

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
