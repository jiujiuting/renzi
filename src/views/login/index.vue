<template>
  <div class="login-container">
    <div class="login-box">
      <img
        src="http://ihrm.itheima.net/static/img/login-logo.758b34e9.png"
        alt=""
      />
      <el-form :model="loginForm" :rules="rules" ref="loginFormRef">
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile">
            <template #prefix>
              &nbsp;&nbsp;<SvgIcon name="user"></SvgIcon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            :type="isPassword ? 'password' : ''"
            @keyup.enter.native="login"
          >
            <!-- 回车即登录 -->
            <template #prefix>
              &nbsp;&nbsp;<SvgIcon name="password"></SvgIcon>
            </template>
            <template #suffix
              ><SvgIcon
                :name="isPassword ? 'eye' : 'eye-open'"
                @click.native="isPassword = !isPassword"
              ></SvgIcon>
              &nbsp;
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { validateMobile } from '@/utils/validate'
export default {
  created () { },
  data () {
    const validateMobileFn = (rule, value, callback) => {
      if (validateMobile(value)) {
        // 校验通过
        callback()
      } else {
        // 校验不通过
        callback(new Error('手机号格式不正确'))
      }
    }
    return {
      // 密码框小眼睛
      isPassword: true,
      loginForm: {
        mobile: '13800000002',
        password: '123456'
      },
      rules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          // 自定义校验规则
          { validator: validateMobileFn, trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '密码长度在6~16位之间', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    async login () {
      // 二次校验
      try {
        await this.$refs.loginFormRef.validate()
        console.log('校验成功')
        // 发送请求-vuex
        this.$store.dispatch('user/login', this.loginForm)
      } catch (err) {
        this.$message.error('校验失败')
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='scss'>
.login-container {
  width: 100vw;
  height: 100vh;
  background: url("@/assets/0 (4).jpg") no-repeat center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-box {
    width: 450px;
    height: 400px;
    text-align: center;
    img {
      width: 450px;
      margin-bottom: 20px;
    }
    .el-input {
      :deep(input) {
        width: 450px;
        height: 50px;
      }
    }
    .el-button {
      width: 450px;
      height: 64px;
      font-size: 20px;
    }
  }
}
// 校验规则样式
:deep(.el-form-item__error) {
  color: #fff;
}
:deep(.el-form-item.is-error .el-input__inner) {
  border: none;
}
.icon {
  margin-top: 18px;
}
</style>
