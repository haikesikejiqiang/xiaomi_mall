<template>
  <div>
    <div id="reg">
      <div class="container">
        <img src="https://cdn.jsdelivr.net/gh/mydracula/image@master/20210314/611ba8360d63ebf14d3f79afa1469694.png" />
      </div>
      <div class="reg-bg">
        <div class="regBox">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="账号登录" name="first">
              <Login />
            </el-tab-pane>
            <el-tab-pane label="扫码登录" name="second">
              <h2 style="text-align:center">暂时停止注册，请联系管理员</h2>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Login from '../views/Login'
import Footer from './Footer'
export default {
  components: {
    Login,
    Footer
  },
  data() {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style scoped lang="less">
#reg {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.reg-bg {
  position: relative;
  width: 100%;
  background-color: yellow;
  height: 588px;
  background: url(https://cdn.jsdelivr.net/gh/mydracula/image@master/20210314/a954544168147b5a29358aea53186971.jpg) no-repeat 50% 50%;
}

.container {
  height: 80px;
}

.regBox {
  position: absolute;
  height: 400px;
  top: 50%;
  transform: translateY(-50%);
  left: 988px;
  width: 410px;
  background: #fff;
}
/deep/ .el-tabs__nav-scroll {
  padding: 27px 0 24px;
  text-align: center;
  font-size: 24px;
  color: #666;
  display: flex;
  justify-content: center;
}
/deep/ .el-tabs__active-bar {
  display: none;
}

/deep/ .el-tabs__nav.is-top {
  display: flex;
}
/deep/ .el-tabs__nav.is-top div:nth-child(2) {
  border-right: 2px solid #e0e0e0;
}
/deep/ .el-tabs__nav-wrap::after {
  display: none;
}

/deep/ .el-tabs__nav.is-top div {
  font-size: 18px;
}

/deep/ .el-tabs__item:hover {
  color: #ff6700;
  cursor: pointer;
}

/deep/ .el-tabs__item.is-active {
  color: #ff6700;
}
</style>
