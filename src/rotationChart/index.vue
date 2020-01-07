<template>
  <div>
    <router-link to="/rotationChart/rotationChart1">轮播图1</router-link> |
    <router-link to="/rotationChart/rotationChart2">轮播图2</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "rotationChart", 
  data() {
    // 定义的数据
    return {};
  },
  methods: {
   
  }
}
</script>

<style lang="less" scoped>

</style>
