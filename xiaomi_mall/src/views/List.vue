<template>
  <div class="row container">
    <div class="span4">
      <ul>
        <li>
          <img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb1bd61ad71c45a4f67f09b075463944.jpeg?thumb=1&w=293&h=768&f=webp&q=90" alt="" />
        </li>
      </ul>
    </div>
    <div class="span16">
      <ul>
        <li v-for="item in data" :key="item.id">
          <img :src="item.mainImage" />
          <h3>{{ item.name }}</h3>
          <p>{{ item.subtitle }}</p>
          <div>
            <span>
              {{ item.price }}
              <i @click="add(item.id)"></i>
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      data: []
    }
  },
  created() {
    this.getDate()
  },
  methods: {
    async getDate() {
      const data = await axios.get('/api/products', {
        params: {
          categoryId: 100012,
          pageSize: 8
        }
      })

      this.data = data.data.data.list
    },
    async add(s) {
      const { data } = await axios.post('/api/carts', {
        productId: s,
        selected: true
      })

      if (data.status === 0) {
        this.$message({
          message: '添加成功',
          type: 'success'
        })
        this.$Bus.$emit('amountUrl')
      } else {
        this.$message({
          message: '需要登录',
          type: 'error'
        })
      }
      // const { data } = await axios.post('/api/user/register', {
      //   username: '秦源',
      //   password: '123456',
      //   email: '2458578637@qq.com'
      // })
      // console.log(data)
    }
  }
}
</script>

<style scoped lang="less">
.row {
  &.container {
    display: flex;
  }
}
.span4 {
  width: 242px;
  ul {
    height: 614px;
    li {
      width: 242px;
      height: 614px;
      overflow: hidden;
      img {
        width: 242px;
      }
    }
  }
}
.span16 {
  width: 996px;
  min-height: 1px;
  ul {
    display: flex;
    flex-flow: wrap;
  }
  li {
    height: 260px;
    padding: 20px 0;
    width: 224px;
    margin-left: 14px;
    margin-bottom: 14px;
    background: #fff;
    img {
      display: flex;
      justify-content: center;
      margin: 40px auto 20px;
      width: 140px;
      height: 140px;
    }
    h3 {
      white-space: nowrap;
      overflow: hidden;
    }
    div {
      height: 40px;
      line-height: 40px;
      display: flex;
      justify-content: center;
    }
  }
  i {
    display: flex;
    height: 40px;
    width: 40px;
    background: url('https://cdn.jsdelivr.net/gh/mydracula/image@master/20210314/0c5737a2ad3b1f513d8cb7681e9c203e.png') no-repeat 50% 50%;
  }
  span {
    display: flex;
    text-align: center;
  }
}
.span16 li h3,
.span16 li p,
.span16 li div {
  text-align: center;
}
</style>
