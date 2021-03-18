<template>
  <div>
    <div class="ad container">
      <ul class="mask">
        <li v-for="item in items" :key="item.name">
          <div>
            {{ item.name }}
            <i></i>
          </div>
        </li>
      </ul>
      <el-carousel class="container">
        <el-carousel-item v-for="item in imgs" :key="item.src">
          <img :src="item.src" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="final container">
      <ul>
        <li v-for="item in yjdx" :key="item.src">
          <img :src="item.src" />
        </li>
      </ul>
    </div>
    <div class="banner container">
      <img src="https://cdn.jsdelivr.net/gh/mydracula/image@master/20210315/6bc458a7e4b56d05f79760e6fca5e802.png" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { name: '手机 电话卡' },
        { name: '电视 盒子' },
        { name: '笔记本 显示器' },
        { name: '家电 插线板' },
        { name: '出行 穿戴' },
        { name: '电源 配件' },
        { name: '健康 儿童' },
        { name: '耳机 音箱' },
        { name: '生活 箱包' }
      ],
      imgs: [
        {
          src: 'https://cdn.jsdelivr.net/gh/mydracula/image@master/20210315/43be8b449470b0bc6723456ac5a943c1.jpg'
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/mydracula/image@master/20210315/929fca038e928e11872901ce69c631f9.jpg'
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/mydracula/image@master/20210315/097ea9b713f0873298b9d4f6bc5402d5.jpg'
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/mydracula/image@master/20210315/f659b17233f8b02130887908b6e9ef44.jpg'
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/mydracula/image@master/20210315/4ca50c05bb383e29dd66c88dcf2925b0.jpg'
        }
      ],
      yjdx: [
        {
          src: 'https://cdn.jsdelivr.net/gh/mydracula/image@master/20210315/75b640a14fd2329d80daf122008eca1d.png'
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/mydracula/image@master/20210315/940777a6f54ea48480d871064598db28.jpg'
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/mydracula/image@master/20210315/5dfacc245747aa46743906b4db877c63.png'
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/mydracula/image@master/20210315/a2b0df35dbe1cc6d63719ad967ee9b72.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
/deep/ .el-carousel__container {
  width: 100%;
}
.mask {
  box-sizing: border-box;
  padding: 20px 0;
  width: 234px;
  height: 420px;
  border: 0;
  color: #fff;
  background: rgba(105, 101, 101, 0.6);
}
.mask li {
  font-size: 14px;
  padding-left: 30px;
  height: 42px;
  line-height: 42px;
}
.mask li {
  display: flex;
}
.mask li div {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
/deep/ .el-carousel__container {
  height: 100%;
}
.mask li i {
  transform: rotate(270deg);
  margin-right: 20px;
  display: flex;
  height: 40px;
  width: 40px;
  color: #fff;
  background: url(https://cdn.jsdelivr.net/gh/mydracula/image@master/20210315/ec0dfc5e2e1581cd0a8393a45c583372.png) no-repeat 50% 50%;
}
/deep/ .el-carousel__item img {
  height: 420px;
}
.final {
  margin-top: 14px;
}
.final ul {
  display: flex;
}
.final li {
  margin-left: 15px;
}
.final li img {
  width: 100%;
  height: 100%;
}
.final li:first-child {
  margin-left: 0;
}
.banner {
  margin-top: 14px;
  margin-bottom: 14px;
}
.banner img {
  height: 100%;
  width: 100%;
}
</style>
