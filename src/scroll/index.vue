<template>
  <div class="box">
    <!-- 卷曲头部相关 -->
    <!-- <div style="height:100px;width:100px;border: 1px solid #000;">行内设100px*100px</div> -->
    <ul ref="fa" @scroll="topwid">
      <li>内容</li>
      <li>内容</li>
      <li @click="gotop" class="tp" ref="l3" style="border: 1px solid #000;">内容3</li>
      <li>内容</li>
      <li>内容</li>
      <li>内容</li>
      <li>内容</li>
      <li>内容8</li>
      <li>内容</li>
      <li>内容</li>
    </ul>
  </div>
</template>

<script>
import bus from "@/bus/index.js";

export default {
  name: "scroll", //

  data() {
    // 定义的数据
    return {};
  },
  methods: {
    topwid() {
      let dom1 = this.$refs.fa;
      let dom2 = this.$refs.l3;
      let clic
      clearTimeout(clic)
      clic = setTimeout(function() {
        console.log("内容3到顶部距离", dom1.scrollTop - dom2.offsetTop);
      }, 1000);
    },
    gotop() {
      let dom1 = this.$refs.fa;
      // dom1.scrollTop  = 0;
      document.body.scrollTop  = 0;
      document.documentElement.scrollTop  = 0;
      // console.log("12");
    }
  }
};
</script>

<style lang="less" scoped>
.box {
  border: 1px solid #000;
}
ul {
  overflow-y: scroll;
  height: 1500px;
}
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  height: 300px;
}
.tp {
  scroll-margin-top: 0px;
}
</style>
