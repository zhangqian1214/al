<template>
  <div class="home">
    假设这里是主页
      <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/login">登录</router-link>|
      <router-link to="/aboutPag">首页</router-link>|
      <router-link to="/richText">富文本</router-link>|
      <router-link to="/chart">Echarts图表</router-link>|
      <router-link to="/scroll">scroll</router-link>|
      <router-link to="/rotationChart">轮播图</router-link>|
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
