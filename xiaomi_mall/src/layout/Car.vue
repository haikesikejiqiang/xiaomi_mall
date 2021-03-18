<template>
  <div>
    <div class="car-top">
      <div class="container">
        <div class="max-header">
          <div class="mini-header">
            <div class="logo"></div>
            <div class="header-title">
              <h2>
                我的购物车
              </h2>
              <p>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</p>
            </div>
          </div>
          <span class="name" @click="goLogin"> {{ msg }} </span>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import { getLogin } from '../until/login'
import Footer from '../layout/Footer'
export default {
  components: {
    Footer
  },
  data() {
    return {
      msg: '登录'
    }
  },
  created() {
    this.judgment()
  },
  methods: {
    goLogin(e) {
      if (this.statu !== 0) {
        this.$router.push('reg')
      }
    },
    async judgment() {
      const data = await getLogin()
      this.statu = data.status
      if (this.statu === 0) {
        this.msg = data.data.username
      }
    }
  }
}
</script>

<style scoped lang="less">
.logo {
  background: url(//s02.mifile.cn/assets/static/image/mi-logo.png) no-repeat 50% 50%;
  opacity: 1;
  background-color: #ff6700;
  height: 48px;
  width: 48px;
  margin-right: 45px;
  margin-top: 26px;
}
.mini-header {
  display: flex;
}
.header-title {
  display: flex;
  height: 48px;
  margin-top: 26px;
}
.header-title h2 {
  font-weight: 400;
  line-height: 48px;
  margin-bottom: 0;
  font-size: 28px;
}
.header-title p {
  height: 20px;
  line-height: 20px;
  margin-top: 20px;
  margin-left: 15px;
  color: #757575;
}
.max-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.name {
  display: flex;
  align-items: flex-end;
  width: auto;
  max-width: 75px;
  text-overflow: ellipsis;
  vertical-align: text-bottom;
  overflow: hidden;
  color: #757575;
  margin-bottom: 11px;
}

.car-top {
  height: 100px;
  border-bottom: 2px solid #ff6700;
}
</style>
