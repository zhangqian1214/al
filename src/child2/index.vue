<template>
  <div>
    <!--根标签-->
    孩子路由2内容 {{data2}}
    <br/>
    {{data3}}
  </div>
</template>

<script>
import bus from '@/bus/index.js'

export default {
  name: 'child2', //
  // components:{plugins},// 引入组件，使用组件前注册
  // props:{}, // 自定义组件属性传值方法，props接收传来的值
  data () {
    // 定义的数据
    return {
      data2: '默认',
      data3: ''
    }
  },
  created () {
    this.zhang1()
  },
  methods: {
    zhang1 () {
      bus.$on('qian', (data) => {
        this.data2 = data
      })
      bus.$on('q', (data) => {
        this.data3 = data
      })
    }
  }
}
</script>

<style lang="less" scoped>
</style>
