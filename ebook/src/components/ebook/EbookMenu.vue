<template>
  <div
    class="menu-bar"
    v-show="menuVisible"
  >
    <transition name="slide-up">
      <div class="menu-wrapper">
        <div class="icon-wrapper">
          <span class="icon-menu"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-progress"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-bright"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-A"></span>
        </div>
      </div>
    </transition>
    <!-- <transition name="slide-up">
      <content-view></content-view>
    </transition> -->
  </div>
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
    },
    // 加载完毕后触发
    mounted() { },
    // 路由退出时候调用
    beforeRouteLeave(to, from, next) { next() }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped >
  @import "../../assets/css/global";
  .menu-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 200;
    display: flex;
    width: 100%;
    height: px2rem(48);
    box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15);
    font-size: px2rem(22);
    &.hide-box-shadow {
      box-shadow: none;
    }
    .icon-wrapper {
      flex: 1;
      @include center;
      .icon-progress {
        font-size: px2rem(24);
      }
      .icon-A {
        font-size: px2rem(20);
      }
    }
  }
</style>
