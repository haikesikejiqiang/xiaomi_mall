<template>
  <div id="topbar">
    <div class="topbar">
      <div class="topbar-nav">
        <ul class="nav-wrap">
          <li v-for="item in nav" :key="item.id" class="item">
            <a :href="item.url">{{ item.name }}</a>
            <span class="separate">|</span>
          </li>
        </ul>
      </div>
      <div class="right">
        <div class="topbar-info">
          <ul class="info-wrap">
            <li v-for="item in infoNav" :key="item.id" class="item">
              <a @click="show" :href="item.url">{{ item.name }}</a>
              <span class="separate">|</span>
            </li>
          </ul>
        </div>
        <div class="topbar-cart">
          <div class="cart" @click="cartGo">
            <img src="../assets/imgs/icon-cart.png" />购物车
            <span>( {{ carCount }} )</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { getLogin } from '../until/login'
export default {
  data() {
    return {
      nav: [
        { name: '小米商城', url: 'javascript:;' },
        { name: 'MIUI', url: 'javascript:;' },
        { name: '云服务', url: 'javascript:;' },
        { name: '协议规则', url: 'javascript:;' }
      ],
      infoNav: [
        { name: '登录', url: 'javascript:;' },
        { name: '注册', url: 'javascript:;' },
        { name: '消息通知', url: 'javascript:;' }
      ],
      carCount: 0,
      statu: -1
    }
  },
  created() {
    this.getDate()
    this.$Bus.$on('amountUrl', () => {
      this.getDate()
    })
  },
  methods: {
    cartGo() {
      if (this.statu === 0) {
        this.$router.push('cars')
      } else if (this.statu === 10) {
        this.$router.push('car404')
      }
    },
    async getDate() {
      const data = await getLogin()
      console.log(data, 111)
      this.statu = data.status
      if (data.status === 0) {
        this.infoNav[0].name = data.data.username
        this.infoNav[1].name = '退出'
        this.infoNav[2].name = '我的订单'
        this.carSum()
      }
    },
    async show(e) {
      if (!this.statu && e.target.innerHTML === '退出') {
        const { data } = await axios.post('/api/user/logout')
        if (data.status === 0) {
          this.$message({
            message: '退出成功',
            type: 'success'
          })
          localStorage.removeItem('token')
          location.reload()
        }
      } else if (this.statu && e.target.innerHTML === '登录') {
        this.$router.push({ path: '/reg' })
      }
    },
    async carSum() {
      const { data } = await axios.get('/api/carts/products/sum')
      this.carCount = data.data
    },
    sum(e) {
      console.log(e.target.innerHTML === '退出')
      // if(!this.statu && e.target.innerHTML === '退出')
    }
  }
}
</script>

<style scoped lang="less">
.topbar {
  width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  height: 40px;
  font-size: 12px;
  color: #b0b0b0;
  background: #333;
}
.topbar-nav {
  height: 40px;
  line-height: 40px;
}
.nav-wrap {
  display: flex;
}
.nav-wrap a {
  color: #b0b0b0;
}
.nav-wrap .separate {
  margin: 0 10px;
  color: #424242;
}
.right {
  display: flex;
}
.info-wrap {
  display: flex;
}
.info-wrap li {
  line-height: 40px;
}
.info-wrap li a {
  color: #b0b0b0;
  text-align: center;
  padding: 0 5px;
}
.cart {
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #b0b0b0;
  background: #424242;
}
.cart img {
  vertical-align: middle;
  height: 15px;
  margin-right: 4px;
}
.topbar-cart {
  width: 120px;
  height: 40px;
  margin-left: 15px;
  font-size: 12px;
}
.info-wrap .separate {
  color: #424242;
}
.cart {
  cursor: pointer;
}
.item:hover a {
  color: #fff;
}
</style>
