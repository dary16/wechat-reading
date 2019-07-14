<template>
  <transition name="slide-down">
    <div
      class="title-wrapper"
      v-show="menuVisible"
    >
      <div class="left">
        <span
          class="icon-back icon"
          @click="back()"
        ></span>
      </div>
      <div class="right">
        <div class="icon-wrapper">
          <span class="icon-shelf"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-cart"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-more"></span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import { ebookMixin } from '../../utils/mixin'
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
    created() { },
    // 实时监控data参数数据变化
    computed: {
    },
    // 执行方法
    methods: {
      back() {
        console.log('back');
      }
    },
    // 加载完毕后触发
    mounted() { },
    // 路由退出时候调用
    beforeRouteLeave(to, from, next) { next() }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../assets/css/global";
  .title-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 200;
    display: flex;
    width: 100%;
    height: px2rem(48);
    box-shadow: 0 px2rem(8) px2rem(8) rgba(0, 0, 0, 0.15);
    font-size: px2rem(22);
    background: #fff;
    .left {
      flex: 0 0 px2rem(37);
      @include center;
      margin-left: px2rem(15);
    }
    .right {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      .icon-wrapper {
        flex: 0 0 px2rem(37);
        @include center;
      }
    }
  }
</style>
