<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
    <el-form-item prop="account">
      <el-input v-model="ruleForm.account"></el-input>
    </el-form-item>
    <el-form-item prop="pass">
      <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    var checkAcc = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('账号不能为空'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    return {
      ruleForm: {
        account: '',
        pass: ''
      },
      rules: {
        account: [{ validator: checkAcc, trigger: 'blur' }],
        pass: [{ validator: validatePass, trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const { data } = await axios.post('/api/user/login', {
            username: this.ruleForm.account,
            password: this.ruleForm.pass
          })
          console.log(data)
          if (data.status === 0) {
            localStorage.setItem('token', 1)
            this.$message({
              message: data.msg,
              type: 'success'
            })
            this.$router.push('/')
          } else {
            this.$message({
              message: data.msg,
              type: 'error'
            })
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped lang="less">
/deep/ input {
  border-radius: 0;
  box-sizing: content-box;
  height: 22px;
  line-height: 22px;
  padding: 13px 16px 13px 14px;
}
/deep/ button {
  padding: 0;
  border-radius: 0;
  outline: 0;
  border: 0;
  background-color: #ff6700;
  width: 100%;
  height: 50px;
  line-height: 50px;
  margin-bottom: 14px;
  text-align: center;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
}
/deep/ button:hover {
  background-color: #ff6700;
}
.el-form {
  margin: 0 auto;
  width: 316px !important;
}
/deep/ .el-input__inner {
  width: 286px !important;
}
/deep/ .el-button--primary.is-active,
.el-button--primary:active {
  background-color: #ff6700;
}
/deep/ .el-button--primary:focus,
.el-button--primary:hover {
  background-color: #ff6700;
}
</style>
