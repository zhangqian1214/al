<template>
  <div>
    <div class="chart" ref="chart" style="width: 600px;height:400px;"></div>
  </div>
</template>
<script>
import bus from "@/bus/index.js";
import echarts from "echarts";

import "./js/echarts.min.js";
import "./js/echarts-gl.min.js";
import "./js/world.js";

export default {
  name: "chart1",
  components: {},title:{
        text: '图表标题',
      },
  data() {
    return {};
  },
  created() {
    bus.$emit("yc", false);
  },
  mounted() {
    const dom = this.$refs.chart;
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(dom);

    // 指定图表的配置项和数据
    const option = {
      // title: {
      //   text: "地球",
      // },
      backgroundColor: "#000",
      globe: {
        baseTexture: 'world.jpg',
        heightTexture: 'world.jpg',
        displacementScale: 0.04,
        environment: 'starfield.jpg',
        shading: "realistic",
        realisticMaterial: {
          roughness: 0.9
        },
        postEffect: {
          enable: true
        },
        light: {
          main: {
            intensity: 5,
            shadow: true
          },
          ambientCubemap: {
            texture: 'img/pisa.hdr',
            diffuseIntensity: 0.2
          }
        }
      }
    };
    myChart.setOption(option); // 使用刚指定的配置项和数据显示图表。
  },
  methods: {}
};
</script>

<style lang="less">
.chart {
  margin: 0 auto;
}
</style>
