<template>
  <div id="car">
    <div class="car-mid">
      <div class="container">
        <table class="table">
          <thead>
            <tr>
              <th class="checkcol">
                <input type="checkbox" v-model="checked" @click="fun" />
                全选
              </th>
              <th class="namecol">
                商品名称
              </th>
              <th class="pricecol">单价</th>
              <th class="numcol">数量</th>
              <th class="totalcol">小计</th>
              <th class="caoz">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(val, i) in data" :key="val.productId">
              <td class="col-check">
                <input type="checkbox" v-model="val.productSelected" />
              </td>
              <td class="col-img">
                <img :src="val.productMainImage" />
                <a href="javascript:;"> {{ val.productName }} </a>
              </td>
              <td class="col-price">{{ val.productPrice }}</td>
              <td class="col-num">
                <div>
                  <button @click="val.quantity--" :disabled="val.quantity <= 1">-</button>
                  <span> {{ val.quantity }}</span>
                  <button @click="val.quantity++">+</button>
                </div>
              </td>
              <td class="col-total">{{ val.productPrice * val.quantity + '元' }}</td>
              <td>
                <a href="javascript:;" @click="del(i, val.productId)">删除</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="container toalshop">
        <h3>
          共 <span class="red">{{ orderNum }}</span> 件商品，已选择 <span class="red">{{ currentNum }}</span
          >件
        </h3>
        <div class="right">
          <div class="red">
            合计 <span class="big">{{ sum }}</span>
          </div>
          <div class="btn">去结算</div>
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
      checked: false,
      statu: '',
      data: [],
      currentNum: 0
    }
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      const data = await getLogin()
      this.statu = data.status
      if (this.statu === 0) {
        const { data } = await axios.get('/api/carts')
        this.data = data.data.cartProductVoList
      }
    },

    fun() {
      this.data.forEach((val) => {
        if (!this.checked) {
          val.productSelected = true
        } else {
          val.productSelected = false
        }
      })
    },
    async del(s, d) {
      this.data.splice(s, 1)
      const data = await axios.delete('/api/carts/' + d)
      console.log(data)
      if (this.data.length === 0) {
        this.checked = false
      }
    }
  },
  computed: {
    sum: function() {
      let num = 0
      this.data.forEach((val) => {
        if (val.productSelected) {
          num += val.quantity * val.productPrice
        }
      })
      return num.toFixed(2)
    },
    orderNum() {
      let num = 0
      this.data.forEach((val) => {
        if (val.productSelected) {
          num += val.quantity
        }
      })
      return num
    }
  },
  watch: {
    data: {
      handler(e) {
        function get(obj) {
          return obj.productSelected === true
        }
        this.currentNum = this.data.filter(get).length
        if (e.every(get)) {
          this.checked = true
        } else {
          this.checked = false
        }
      },
      deep: true
    },
    checked: {
      handler(e) {
        if (this.data.length === 0) {
          this.checked = false
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.car-mid {
  padding: 38px 0;
  background: #f5f5f5;
  .container {
    background: #fff;
  }
}
table {
  width: 100%;
  tr {
    display: flex;
    align-items: center;
  }
  thead {
    height: 70px;
    line-height: 70px;
    padding-right: 26px;
    color: #424242;
  }
  img {
    height: 80px;
    width: 80px;
  }
}
.col-check {
  width: 110px;
  input {
    margin-left: 24px;
  }
}
.col-img {
  display: inline-flex;
  width: 500px;
  img {
    padding-right: 40px;
  }
  a {
    height: 80px;
    vertical-align: middle;
    line-height: 80px;
    color: #424242;
    font-size: 20px;
  }
}
.col-price {
  width: 140px;
  padding-right: 18px;
  text-align: center;
  color: #424242;
  font-size: 16px;
}
.col-num {
  width: 150px;
  display: flex;
  justify-content: center;
  div {
    display: flex;
    width: 148px;
    height: 38px;
    border: 1px solid #e0e0e0;
    text-align: center;
    background-color: #fff;
    span {
      width: 72px;
      line-height: 38px;
      color: #424242;
      font-size: 16px;
    }
  }
  button {
    cursor: pointer;
    justify-content: center;
    display: flex;
    flex: 1;
    border: 0;
    outline: 0;
    width: 38px;
    height: 38px;
    line-height: 38px;
    color: #757575;
    font-size: 20px;
    background-color: rgba(0, 0, 0, 0);
  }
}
.col-total {
  color: #ff6700;
  font-size: 16px;
  width: 120px;
  padding-right: 81px;
  text-align: right;
}
th {
  color: #424242;
  font-size: 16px;
  font-weight: 400;
}
.checkcol {
  margin-left: 24px;
  color: #424242;
  input {
    margin-right: 15px;
  }
}
.namecol {
  margin-left: 142px;
  width: 380px;
  text-align: left;
}
.pricecol {
  width: 140px;
  padding-right: 18px;
  text-align: center;
}
.numcol {
  width: 150px;
  text-align: center;
}
.totalcol {
  padding-left: 75px;
  padding-right: 65px;
}
.caoz {
  width: 80px;
  text-align: center;
}
.container {
  &.toalshop {
    justify-content: space-between;
    display: flex;
    margin-top: 20px;
    height: 50px;
    line-height: 50px;
    h3 {
      font-weight: 400;
    }
    .right {
      display: flex;
      align-items: center;
    }
  }
}
tr {
  td {
    a {
      overflow: hidden;
    }
  }
}
.red {
  color: #ff6700;
}
.big {
  font-size: 16px;
}
.btn {
  color: #fff;
  background: #ff6700;
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
</style>
