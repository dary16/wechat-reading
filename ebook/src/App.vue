<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$store.dispatch('setTest', 80).then(() => {
        console.log(this.$store.state.test);
      })
    }
  }
  document.addEventListener('DOMContentLoaded', () => {
    const html = document.querySelector('html')
    let fontSize = window.innerWidth / 10
    fontSize = fontSize > 50 ? 50 : fontSize //设置最大值
    html.style.fontSize = fontSize + 'px'
  })
</script>

<style lang="scss" scoped>
  @import "./assets/css/global.scss";

  #nav a {
    font-weight: bold;
    color: #2c3e50;
    font-size: px2rem(20);
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
