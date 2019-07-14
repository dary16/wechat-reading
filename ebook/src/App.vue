<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
  }
  document.addEventListener('DOMContentLoaded', () => {
    const html = document.querySelector('html')
    let fontSize = window.innerWidth / 10
    fontSize = fontSize > 50 ? 50 : fontSize //设置最大值
    html.style.fontSize = fontSize + 'px'
  })
</script>

<style lang="scss"  rel="stylesheet/scss" scoped>
  @import "./assets/css/global";
  #app {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  #nav a {
    font-weight: bold;
    color: #2c3e50;
    font-size: px2rem(20);
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
