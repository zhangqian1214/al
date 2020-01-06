<template>
  <div id="app">
      <router-link style="position: fixed;left:0;" to="/">回首页</router-link>
    <!-- <div id="nav">
      <router-link to="/about">About</router-link>|
      <router-link to="/login">登录</router-link>|
      <router-link to="/aboutPag">首页</router-link>|
      <router-link to="/richText">富文本</router-link>|
      <router-link to="/chart">Echarts图表</router-link>|
      <router-link to="/scroll">scroll</router-link>|
    </div> -->
    <router-view class="vie" />
    <br>
    <!-- <child2 v-if="show" class="c2" style="border: 1px solid #000;"></child2> -->
  </div>
</template>

<script>
import bus from '@/bus/index.js'

export default {
  data(){
    return {
      show:true,
    }
  },
  created(){
    this.zhang()
  },
  methods: {
    zhang () {
      bus.$on('yc',(data)=>{
      this.show=data
    })
    }
  }
}
</script>
<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

.router-link-active {
  color: #f00;
}
#nav {
  padding: 30px;
  

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.c2 {
  width: 300px;
  margin: 0 auto;
}
// .vie {
//   height: 100%;
//   border: 1px solid #000;
// }
</style>
