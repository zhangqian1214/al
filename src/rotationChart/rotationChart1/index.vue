<template>
  <div>
    手写轮播图
    <div ref="imgdom" class="bigBox">
      <ul class="banner">
        <li class="box" v-for="(item,index) in imgs" :key="index">
          <a href="#">
            <img :src="item" :alt="'轮播图'+index" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "rotationChart1",
  data() {
    return {
      widt: "",
      imgs: [
        "/images/banner4.jpg",
        "/images/banner1.jpg",
        "/images/banner2.jpg",
        "/images/banner3.jpg",
        "/images/banner4.jpg",
        "/images/banner1.jpg"
      ],
      imgurl:
        "https://github.com/zhangqian1214/xcx/blob/master/images/banner4.jpg?raw=true"
    };
  },
  computed: {
    // widt () {
    //   var _this = this
    //   return {
    //     _this.$refs.imgdom.offsetWidth
    //   }
    // }
  },
  created() {},
  mounted() {
    this.widt = this.$refs.imgdom.offsetWidth * this.imgs.length;
    console.log(this.widt);
  },
  methods: {}
};
</script>

<style lang="less" scoped>
ul li {
  list-style: none;
}

.bigBox {
  width: 375px;
  height: 233.22px;
  position: relative;
  // overflow: hidden;
  .banner {
    width: 375px * 6;
    height: 233.22px;
    position: absolute;
    .box {
      // width: 375px;
      // height: 233.22px;
      float: left;
      a {
        img {
          width: 375px;
          height: 233.22px;
        }
      }
    }
  }
}
</style>
<style>
* {
  font-size: 16px;
  margin: 0;
  padding: 0;
}
</style>
