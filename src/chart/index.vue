<template>
  <div>
    <router-link to="/chart/chart1">图表地球</router-link>|
    <router-link to="/chart/chart2">图表</router-link>

    <router-view style="margin-top:20px;"></router-view>
  </div>
</template>
<script>
import bus from "@/bus/index.js";

export default {
  name: "echarts",
  components: {},
  data() {
    return {};
  },
  created() {
    bus.$emit("yc", false);
  },
  methods: {}
};
</script>

<style lang="less">

</style>
