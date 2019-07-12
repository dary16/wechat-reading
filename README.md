介绍
- 基于VUE.js开发原生APP,体验企业级Web书城
- 书城、书架、详情、阅读器和听书
- Vue全家桶+epubjs阅读器引擎

技术栈
- Vue.js:vue全家桶，vue-cli3.0,vue调试，vue-i18n，axios
- HTML5:range控件，audio控件，LocalStorage,indexedBD
- CSS:字体图标Web字体，keyframes动画，scss,rem
- Javascript:es6,mock.js,touch，mouse事件
- 阅读器：epubjs,科大讯飞api,reader,book.js
- 发布：git,node.js,阿里云，nginx

ePub标准
- ePub是IDPF制定的电子书标准
- IDPF(international digital publishing forum)国际数字出版论坛，致力于推广电子出版物
- ePub标准主要解决了电子书的分发、管理和加密等问题，ePub的核心是：ZIP+XML+资源文件（HTML+CSS+图片+音频+视频等）

epubjs阅读器引擎介绍
- 基于javascript的ePub引擎：https://github.com/futurepress/epub.js
- 解决了ePub电子书的解析、渲染、定位等技术难题
- 提供了媲美原生app的阅读体验

###技术难点分析
- 阅读器开发:分页算法、全文搜索算法、引入Web字体、主题设计
- 离线存储机制：LocalStorage+IndexedDB
- 实现各种复杂手势+交互动画，如何兼容手势+鼠标操作
- 利用vuex+mixin实现组件解耦+复用，大大精简代码量
- 利用es6优雅的实现数据结构变化
- 科大讯飞Web在线语音合成API开发

### 项目准备
- 字体图标准备
- 项目依赖包下载+项目配置
- 准备Web字体
- viewport配置
- rem设置+自适应布局实现思路
- global.scss和reset.scss
- 引入vuex

### 搭建静态资源服务器
- Nginx安装
- 配置文件
- 常见问题及处理方法