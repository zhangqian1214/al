<template>
  <div>
    <!--根标签-->
    孩子路由1内容
    <button @click="zhang">吧数据传出去</button>
  </div>
</template>

<script>
import bus from '@/bus/index.js'
// import { log } from 'util'

export default {
  name: 'child1', //
  // components:{plugins},// 引入组件，使用组件前注册
  // props:{}, // 自定义组件属性传值方法，props接收传来的值
  data () {
    // 定义的数据
    return {
      value: '来自孩子1组件的数据'
    }
  },
  methods: {
    zhang () {
      bus.$emit('qian', this.value)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
