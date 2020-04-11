<template>
  <div id="signin">
    <div class="user_logo">
      <svg t="1586509846079" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1143" width="128" height="128">
        <path d="M515.478588 14.230588c-274.025412 0-496.941176 222.945882-496.941176 496.941176 0 274.010353 222.915765 496.926118 496.941176 496.926118 273.980235 0 496.926118-222.915765 496.926118-496.926118C1012.404706 237.176471 789.473882 14.230588 515.478588 14.230588zM801.942588 878.742588c-14.652235-145.182118-137.532235-258.846118-286.479059-258.846118-148.946824 0-271.826824 113.679059-286.464 258.846118C119.627294 793.313882 49.136941 660.374588 49.136941 511.171765c0-257.144471 209.212235-466.386824 466.356706-466.386824 257.129412 0 466.341647 209.242353 466.341647 466.386824C981.820235 660.374588 911.329882 793.344 801.942588 878.742588z" p-id="1144" fill="#1296db"></path>
        <path d="M511.713882 241.829647c-89.765647 0-162.816 73.065412-162.816 162.816s73.065412 162.800941 162.816 162.800941c89.720471 0 162.785882-73.035294 162.785882-162.800941S601.434353 241.829647 511.713882 241.829647z" p-id="1145" fill="#1296db"></path>
      </svg>
    </div>
    <h1 class="signin_title">系统登录</h1>
    <el-form
      ref="signin_form"
      :model="signin_form"
      :rules="signinRules"
    >
      <el-form-item prop="userName">
        <el-input
          v-model="signin_form.userName"
          placeholder="请输入用户名"
        >
          <i
            slot="prefix"
            class="el-input__icon el-icon-user-solid"
          />
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="signin_form.password"
          show-password
          placeholder="请输入密码"
        >
          <i
            slot="prefix"
            class="el-input__icon el-icon-lock"
          />
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          class="signin_btn"
          @click="signin('signin_form')"
        >登 录</el-button>
      </el-form-item>
    </el-form>
    <div class="tip">
      <p>管理员：admin 密码：123456</p>
      <p>超级管理员：superadmin 密码：123456</p>
    </div>
  </div>
</template>

<script>
import { signinRules } from '@/rules'

const roleArr = [
  { role: '管理员', userName: 'admin', password: '123456' },
  { role: '超级管理员', userName: 'superadmin', password: '123456' }
]

export default {
  name: 'signin',
  data: () => ({
    signinRules,
    signin_form: {
      userName: 'admin',
      password: '123456'
    }
  }),
  methods: {
    signin (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const currentRole = this.validateRole(this.signin_form)

          if (currentRole) {
            this.$message.success(`登录成功，欢迎您，${currentRole.role}`)
            this.$store.dispatch('signin', {
              currentRole,
              redirect: () => {
                setTimeout(() => {
                  this.$router.push('/')
                }, 2000)
              }
            })
          } else {
            this.$message.error('用户名或密码错误，请重新输入！')
          }
        } else {
          this.$message.error('输入信息格式不对，请重新输入！')
        }
      })
    },

    validateRole (roleObj) {
      const currentRole = roleArr.find(role => roleObj.userName === role.userName && roleObj.password === role.password)

      return currentRole
    }
  }
}
</script>

<style scoped>
#signin {
  color: #fff;
}

.user_logo,
.signin_title {
  text-align: center;
}

.user_logo svg {
  width: 100px;
  height: 100px;
}

.signin_title {
  margin: 20px;
  color: #fff;
}
.el-icon-user-solid,
.el-icon-lock {
  margin-top: 6px;
  font-size: 30px;
}
.showPwd_icon {
  margin-top: 4px;
  cursor: pointer;
}
.signin_btn {
  width: 100%;
  height: 50px;
  font-size: 24px;
}
</style>

<style>
#signin .el-form-item__content {
  line-height: 50px;
}

#signin .el-input__inner {
  height: 50px;
  background-color: rgba(255, 255, 255, .4);
  color: #fff;
  font-size: 20px;
  text-indent: 10px;
}
</style>
