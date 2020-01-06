<template>
  <div @scroll="topwid" style="overflow-y: scroll;" class="box">
    <div>
      在登录页面
     
      <div class="top">想看它顶部的距离</div>
      <div class="center">它是居中的</div>
      <div class="xia">这个盒子100px*100px，字18px</div>
      <div style="height:100px;width:100px;border: 1px solid #000;">行内设100px*100px</div>
      <div
        @click="wid"
        ref="b1"
        style="height:20px;width:25%;border: 1px solid #000;"
      >宽25% {{widt1}}</div>
      <div
        @click="wid"
        ref="b2"
        style="height:20px;width:50%;border: 1px solid #000;"
      >宽50% {{widt2}}</div>
      <div
        @click="wid"
        ref="b3"
        style="height:20px;width:75%;border: 1px solid #000;"
      >宽75% {{widt3}}</div>
      <div class="as"></div>
      <div class="as" style="height:200px;"></div>
    </div>
  </div>
</template>

<script>
// import plugins from './plugins' //引入组件

export default {
  name: "login", // 
  // components:{plugins},// 引入组件，使用组件前注册
  // props:{}, // 自定义组件属性传值方法，props接收传来的值
  data() {
    // 定义的数据
    return {
      widt1: "",
      widt2: "",
      widt3: ""
    };
  },
  created() {},
  mounted() {
    // window.addEventListener('scroll', this.topwid)
    // console.log(document.body.clientWidth);
  },
  methods: {
    topwid() {
      console.log(document.documentElement.scrollTop || document.body.scrollTop
      );
    },
    wid() {
      this.widt1 = this.$refs.b1.offsetWidth;
      this.widt2 = this.$refs.b2.offsetWidth;
      this.widt3 = this.$refs.b3.offsetWidth;
    }
  } // 方法
};
</script>

<style lang="less" scoped>
body {
  height: 100%;
}
.box {
  // overflow-y: scroll;
  height: 400px;
  position: relative;
  border: 1px solid #000;
}
div {
  font-size: 14px;
  border: 1px solid #000;
}
a {
  font-size: 16px !important;
  line-height: 10px;
}
.navbar-toggler {
  padding: none !important;
}
.navbar-toggler {
  width: 20px;
  height: 20px;
}
nav {
  position: none !important;
  padding: none;
  height: 30px;
}
.xia {
  width: 100px;
  height: 100px;
  border: 1px solid #000;
  font-size: 18px;
}
.top {
  position: absolute;
  left: 50%-10%;
  margin-top: 300px;
  border: 1px solid #000;
  width: 100px;
  height: 50px;
}
.center {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border: 1px solid #000;
  width: 50px;
  height: 50px;
}
.as {
  top: 0;
  float: right;
  height: 200px;
  width: 10px;
}
</style>
