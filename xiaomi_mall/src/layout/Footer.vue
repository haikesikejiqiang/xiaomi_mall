<template>
  <div id="footer">
    <ul>
      <li v-for="item in items" :key="item.name">
        <a href="javascript:void(0)">{{ item.name }}</a
        >{{ item.flag }}
      </li>
    </ul>
    <p class="nf-intro">
      小米公司版权所有-京ICP备10046444-<a class="beian-record-link"
        ><span><img src="https://account.xiaomi.com/static/res/9204d06/account-static/respassport/acc-2014/img/ghs.png"/></span>京公网安备11010802020134号</a
      >-京ICP证110507号
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: '简体',
          flag: '|'
        },
        {
          name: '繁体',
          flag: '|'
        },
        {
          name: 'English',
          flag: '|'
        },
        {
          name: '常见问题',
          flag: '|'
        },
        {
          name: '隐私政策'
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
ul {
  display: flex;
  justify-content: center;
}
ul li a {
  color: #757575;
  display: inline-block;
  padding: 0 10px;
}
ul li:last-child {
  width: 68px;
  overflow: hidden;
}
.nf-intro {
  align-items: baseline;
  padding: 10px;
  display: flex;
  justify-content: center;
  color: #757575;
}
.nf-intro a {
  color: #757575;
}
#footer {
  padding-top: 100px;
  height: 80px;
}
</style>
