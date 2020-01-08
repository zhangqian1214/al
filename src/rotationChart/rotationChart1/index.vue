<template>
  <div>
    手写轮播图
    <div ref="imgdom" class="bigBox">
      <ul class="banner" :style="'left:-'+ this.widt+'px'">
        <li class="box" v-for="(item,index) in newimgs" :key="index">
          <a href="#">
            <img :src="item.url" :alt="'轮播图'+index" />
          </a>
        </li>
      </ul>
      <div @click="btnLeft" class="btn btn-left">&lt;</div>
      <div @click="btnRight" class="btn btn-right">&gt;</div>
      <div class="inde">
        <i
          @click="ite(item)"
          :class="{ishow:item.index==inde}"
          v-for="(item,index) in imgs"
          :key="index"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "rotationChart1",
  data() {
    return {
      widt: "0",
      newimgs: [],
      imgs: [
        { index: 1, url: "/images/banner1.jpg" },
        { index: 2, url: "/images/banner2.jpg" },
        { index: 3, url: "/images/banner3.jpg" },
        { index: 4, url: "/images/banner4.jpg" }
      ],
      inde: "1"
    };
  },
  computed: {},
  created() {
    this.imgsData();
  },
  mounted() {
    this.widt = this.$refs.imgdom.offsetWidth;
    // this.widt = this.$refs.imgdom.offsetWidth * this.imgs.length;
    // console.log(this.widt);
  },
  methods: {
    btnLeft() {
      this.inde--;
      this.widt = this.$refs.imgdom.offsetWidth * this.inde;
      if (this.inde < 1) {
        this.inde = 4;
        this.widt = this.$refs.imgdom.offsetWidth * this.inde;
      }
    },
    btnRight() {
      this.inde++;
      this.widt = this.$refs.imgdom.offsetWidth * this.inde;
      if (this.inde > 4) {
        this.inde = 1;
        this.widt = this.$refs.imgdom.offsetWidth;
      }
    },
    ite(item) {
      this.inde = item.index;
      this.widt = this.$refs.imgdom.offsetWidth * this.inde;
    },
    imgsData() {
      this.newimgs = JSON.parse(JSON.stringify(this.imgs));
      this.newimgs.unshift(this.imgs[this.imgs.length - 1]);
      this.newimgs.push(this.imgs[0]);
    }
  }
};
</script>

<style lang="less" scoped>
ul li {
  list-style: none;
}

.bigBox {
  // width: 375px;
  width: 100%;
  height: 233.22px;
  position: relative;
  overflow: hidden;
  .banner {
    width: 100% * 6;
    height: 233.22px;
    position: absolute;
    // left: -375px;
    .box {
      width: 375px;
      height: 233.22px;
      float: left;
      a {
        img {
          width: 100%;
        }
      }
    }
  }
}
/* 左右按钮 */
.bigBox .btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(41, 34, 34, 0.4);
  text-align: center;
  font: bold 20px/10px "宋体";
  padding: 15px 10px;
  // color: #fff;
  display: none;
}
.bigBox .btn-right {
  right: 0;
}
.bigBox:hover .btn {
  display: block;
}
.inde {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 4%;
  display: flex;
  align-items: center;
  // justify-content: center;
  i {
    margin: 5px;
    width: 10px;
    height: 10px;
    border: 1px solid #444;
    border-radius: 50%;
  }
}
.ishow {
  margin: 5px;
  width: 10px;
  height: 10px;
  border: 3px solid #fff;
  border-radius: 50%;
  background-color: #666;
}
</style>
<style>
* {
  font-size: 14px;
  margin: 0;
  padding: 0;
}
</style>
