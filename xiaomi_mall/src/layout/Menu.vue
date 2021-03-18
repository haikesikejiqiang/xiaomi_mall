<template>
  <div id="top-header" @mouseleave="num = -10">
    <div class="container">
      <div class="header-logo"></div>
      <div class="header-right">
        <ul class="nav-list">
          <li v-for="(item, index) in navItems" :key="item.id" class="item" @mouseover="tab(index)">
            <a href="javascript: void(0);">{{ item.name }}</a>
          </li>
        </ul>
        <div class="serchBox">
          <input type="text" />
          <i></i>
        </div>
      </div>
      <div class="moreMenu" :class="num === 0 ? 'current' : null">
        <div class="container">
          <ul v-for="item in subNav" :key="item.id" v-show="0 == num">
            <li class="item">
              <img :src="item.mainImage" />
              <div class="title">{{ item.name }}</div>
              <p class="price">{{ item.price }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      num: -8,
      navItems: [
        { name: '小米手机', type: 'xiaomi' },
        { name: '红米', type: 'redmi' },
        { name: '平板·笔记本', type: 'mipad' },
        { name: '电视', type: 'mitv' },
        { name: '盒子·影音', type: 'mibox' },
        { name: '路由器', type: 'mirouter' },
        { name: '智能硬件', type: 'mihardware' },
        { name: '服务', type: '' },
        { name: '社区', type: '' }
      ],
      subNav: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    tab(index) {
      this.num = index
    },
    async getData() {
      const { data } = await axios.get('/api/products', {
        params: {
          categoryId: 100012,
          pageSize: 6
        }
      })
      this.subNav = data.data.list
    }
  }
}
</script>

<style scoped lang="less">
.header-right {
  display: flex;
  justify-content: space-between;
  flex: 1;
}
.header-logo {
  width: 62px;
  margin-top: 22px;
}
.header-logo {
  width: 55px;
  height: 55px;
  background: url(https://s02.mifile.cn/assets/static/image/mi-logo.png) no-repeat 50% 50%;
  opacity: 1;
  background-color: #ff6700;
}
.nav-list {
  display: flex;
  height: 88px;
  margin: 0;
  padding: 12px 0 0 30px;
  font-size: 16px;
}
.nav-list li a {
  display: block;
  padding: 26px 10px 38px;
  color: #333;
}
.serchBox {
  display: flex;
  align-items: center;
}
.serchBox input {
  border: 1px solid #e0e0e0;
  outline: 0;
  height: 48px;
  width: 223px;

  padding: 0 10px;
  font-size: 14px;
  line-height: 48px;
}
.serchBox i {
  display: flex;
  width: 50px;
  height: 48px;
  background: url(https://cdn.jsdelivr.net/gh/mydracula/image@master/20210314/96866a3c2356424e069af8c8351c79db.png) no-repeat 50% 50%;
  background-size: 18px;
  border: 1px solid #e0e0e0;
  border-left: none;
}
.top-header {
  position: relative;
}
.moreMenu {
  position: relative;
  z-index: 999;
  background: #fff;
  position: absolute;
  top: 140px;
  left: 0;
  width: 100%;
  height: 100px;
  overflow: hidden;
  transition: height 0.3s;
}

.moreMenu {
  height: 0;
}
.moreMenu ul {
  display: flex;
}
.item img {
  width: 160px;
  height: 110px;
}
.item .title {
  color: #333;
}
.item .price {
  margin: 0;
  line-height: 20px;
  color: #ff6700;
}

.moreMenu .item {
  width: 180px;
  padding: 35px 12px 0;
  text-align: center;
}
.current {
  border-top: 1px solid #e0e0e0;
  height: 229px;
}
</style>
