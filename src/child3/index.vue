<template>
  <div>
    <!--根标签-->
    孩子路由3内容
    <button @click="chuang">给2传值</button>
  </div>
</template>

<script>
import bus from '@/bus/index.js'

export default {
  name: 'child3', //
  // components:{plugins},// 引入组件，使用组件前注册
  // props:{}, // 自定义组件属性传值方法，props接收传来的值
  data () {
    // 定义的数据
    return {
      val: '来自孩子3组件的值',
      dat: '在这里定一个数据'
    }
  },
  methods: {
    chuang () {
      bus.$emit('q', this.val)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
