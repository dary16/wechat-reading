### Vue cli 3.0环境搭建

安装新版本：npm install -g @vue/cli
原型开发：npm install -g @vue/cli-service-global
创建项目：vue create hello-world
使用图形化界面：vue ui

###创建项目
- vue create 项目名//用git版本的命令行报错，用以管理员权限的npm运行OK
- 下来根据所需进行选择
- 安装完成
- cd 项目名
- npm run serve
- 在浏览器输入地址访问

创建成功有public和src文件，如果要进行相对应的配置，新建文件vue.config.js

安装epubjs :cnpm install --save epubjs

关闭eslint规则：
在vue.config.js里添加lintOnSave:false

### vue ui
vue ui可以对项目进行图像化管理，使用指令：vue ui可以运行，导入所要管理的项目

在iconfont上下载svg图标，然后打开iconmoon添加到组然后再下载下来使用，将图片所需资料放到assets下

下载依赖，sass:cnpm i --save-dev node-sass sass-loader

css3可以使用web字体，下载下来即可
引用方法：

- index.html通过引用需要的css文件
- main.js里引用

配置meta标签：maximum-scale=1.0,minimum-scale=1.0,user-scalable=no

###配置rem
给app.vue里加script标签
```javascript
document.addEventListener('DOMContentLoaded', () => {
    const html = document.querySelector('html')
    let fontSize = window.innerWidth / 10
	fontSize = fontSize > 50 ? 50 : fontSize
    html.style.fontSize = fontSize + 'px'
  })
```

创建公共的样式global.scss,在main.js里面引用
创建reset.css,同上

vuex

vue-dev-tools
vue-remote-devtools
一般国内无法访问google网址，提供了下面方法：
- 安装：cnpm install -g @vue/devtools
- 运行：vue-devtools
- 会弹出提示让添加script标签到对应页面（注意：上线时要删除，不能在线上时用）
