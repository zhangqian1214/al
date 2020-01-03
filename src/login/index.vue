<template>
  <div class="box">
    在登录页面
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <a class="navbar-brand" href="#">用户管理系统</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              首页
              <span class="sr-only">(current)</span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">关于我们</a>
          </li>
        </ul>

        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />

          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>

    <div class="xia">
      这个盒子80px*80px，字18px
    </div>
    <div style="height:20px;width:25%;border: 1px solid #000;">宽25%</div>
    <div style="height:20px;width:50%;border: 1px solid #000;">宽50%</div>
    <div style="height:20px;width:75%;border: 1px solid #000;">宽75%</div>
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
      keyValue: ""
    };
  },
  methods: {} // 方法
};
</script>

<style lang="less" scoped>
.box {
  border: 1px solid #000;
}
nav {
  position: none;
}
.xia {
  width: 80px;
  height: 80px;
  border: 1px solid #000;
  font-size: 18px;
}

</style>
