<template>
  <div>
    <!--根标签-->
    假设这里是首页，这里有二级路由
    <router-link to="/child1">孩子路由1</router-link> |
    <router-link to="/child2">孩子路由2</router-link> |
    <router-link to="/child3">孩子路由3</router-link> |
    <router-link to="/richText2">富文本2</router-link> 
  <router-view></router-view>
  </div>
</template>

<script>
// import plugins from './plugins' //引入组件

export default {
  name: 'zhang',
  // components:{plugins},// 引入组件，使用组件前注册
  // props:{}, // 自定义组件属性传值方法，props接收传来的值
  data () {
    // 定义的数据
    return {}
  },
  methods: {} // 方法
}
</script>

<style lang="less" scoped>

</style>
