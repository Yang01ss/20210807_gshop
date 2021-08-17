## 1.项目开发的准备工作：

    项目描述：
        这是一个前后端分离的spa应用，
        包括了商家，商品，购物车，用户中心等多个子模块
        采用模块化，组件化，工程化的模式开发
    技术选型：
        这是一个前后台分类项目，前台应用的数据展现和交互，使用的是vue全家桶，包括vue,，vue-router，vuex，mint-ui，vue-lazyload；组件化。
        前后台交互：
            发ajax请求，使用axios发请求。ajax请求的编码方式，除了promise还可以使用async，await ES7的内容
            模拟数据mockjs，
            使用axios+promise来进行封装ajax请求函数
            目的是为了：通过promise直接得到数据而不是response.data
            学习了怎样进一步封装了接口请求函数，每一个接口对应一个请求函数， 请求后台接口，调用对应的请求函数
        模块化：
            使用的是ES6的模块化编码，babel
        项目构建/工程化:
            项目构建使用的是webpack
            创建工程化的项目使用vue-cli脚手架
            项目代码的检查使用的是eslint
        css预编译器：less
    API接口：
        四个方面的信息：
            url，请求方式，请求参数的格式 ，响应数据的格式
        有现成的接口文档，
            测试接口通不通，是不是跟文档一致
    从项目中可以学到什么？
        熟悉一个项目的开发流程：
        可以学到组件化，模块化，工程化的开发模式
        掌握使用vue-cli脚手架初始化vue.js项目
        学会模拟json后台数据，实现前后端分类开发
        学会ES6+eslint的开发方法
        会涉及到一些插件，库：
        学会使用vue-router开发单页面应用
        学会使用axios和vue的proxy代理与后端进行数据交互
        学会使用vuex管理应用组件状态
        学会使用better—scroll实现页面滚动效果
        学会使用mint-ui 组件库构建界面
        学会使用 vue-lazyload 实现图片惰加载
        学会使用mockjs 模拟后台数据接口
        在样式布局上面：
        学会使用vue.js的过渡编写交互动画
        学会使用图标字体，
        解决1px边框问题
        学会使用flex弹性布局

## 2.开启项目的开发：

    使用脚手架创建项目
    安装所有依赖
    在开发环境下运行，
    在生产环境下打包与发布

## 3.搭建项目的整体结构：

    less的mix混合，结构化，函数
            gshop
        |-- build : webpack 相关的配置文件夹(基本不需要修改)
        |-- config: webpack 相关的配置文件夹(基本不需要修改)
        |-- index.js: 指定的后台服务的端口号和静态资源文件夹
        |-- node_modules
        |-- src : 源码文件夹
        |-- main.js: 应用入口 js
        |-- static: 静态资源文件夹
        |-- .babelrc: babel 的配置文件
        |-- .editorconfig: 通过编辑器的编码/格式进行一定的配置
        |-- .eslintignore: eslint 检查忽略的配置
        |-- .eslintrc.js: eslint 检查的配置
        |-- .gitignore: git 版本管制忽略的配置
        |-- index.html: 主页面文件
        |-- package.json: 应用包配置文件
        |-- README.md: 应用描述说明的 readme 文件
