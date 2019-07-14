<template>
  <div class="page-reader">
    <div id="read">
    </div>
  </div>
</template>

<script type="text/javascript">
  import { ebookMixin } from '../../utils/mixin'
  import Epub from 'epubjs'

  global.ePub = Epub
  export default {
    mixins: [ebookMixin],
    // 接收父级传递的参数
    props: [],
    // 监听数据变化
    watch: {},
    // 页面数据集合
    data() {
      return {

      }
    },
    // 模板组件
    components: {

    },
    // 实例化之前触发事件
    beforeCreate() {

    },
    // 实例化之后触发事件
    created() {
      const fileName = this.$route.params.fileName.split('|').join('/');
      this.$store.dispatch('setFileName', fileName).then(() => { this.initEpub() });
    },
    // 实时监控data参数数据变化
    computed: {

    },
    // 执行方法
    methods: {
      prevPage() {
        if(this.rendition) {
          this.rendition.prev();
          this.hideTitleAndMenu();
        }
      },
      nextPage() {
        if(this.rendition) {
          this.rendition.next();
          this.hideTitleAndMenu();
        }
      },
      toggleTitleAndMenu() {
        this.setMenuVisible(!this.menuVisible);
      },
      hideTitleAndMenu() {
        this.setMenuVisible(false);
      },
      initEpub() {
        const url = 'http://192.168.2.155:8888/epub/' + this.fileName + '.epub';
        console.log(url);
        this.book = new Epub(url);
        this.rendition = this.book.renderTo('read', {
          width: window.innerWidth,
          height: window.innerHeight,
          method: 'default'
        });
        this.rendition.display();
        console.log(this.rendition);
        this.rendition.on('touchstart', event => {
          this.touchStartX = event.changedTouches[0].clientX;
          this.touchStartTime = event.timeStamp;
        });
        this.rendition.on('touchend', event => {
          const offsetX = event.changedTouches[0].clientX - this.touchStartX;
          const time = event.timeStamp - this.touchStartTime;
          console.log(offsetX, time);
          if(time < 500 && offsetX > 40) {
            this.prevPage();
          } else if(time < 500 && offsetX < -40) {
            this.nextPage();
          } else {
            this.toggleTitleAndMenu();
          }
          event.preventDefault();
          event.stopPropagation();
        })
        console.log(this.rendition);
      }
    },
    // 加载完毕后触发
    mounted() {

    },
    // 路由退出时候调用
    beforeRouteLeave(to, from, next) { next() }
  }
</script>

<style  rel="stylesheet/scss" scoped lang="scss">
  .page-reader {
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
  }
</style>
