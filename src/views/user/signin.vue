<template>
  <div id="signin">
    <div class="signin_logo">
      <el-image :src="logoUrl"/>
    </div>
    <div class="lang_setting_box">
      <el-dropdown @command="changeLanguage">
        <span>{{ $t('lang') }}</span>
        <i class="el-icon-arrow-down el-icon--right"/>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="zh">简体中文</el-dropdown-item>
          <el-dropdown-item command="en">English</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <h1 class="signin_title">{{ $t('signin_page.title') }}</h1>
    <el-form
      ref="signin_form"
      :model="signin_form"
      :rules="signinRules"
    >
      <el-form-item prop="userName">
        <el-input
          v-model="signin_form.userName"
          :placeholder="$t('signin_page.username_placeholder')"
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
          :placeholder="$t('signin_page.password_placeholder')"
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
        >{{ $t('signin_page.signin_btn_text') }}</el-button>
      </el-form-item>
    </el-form>
    <div class="tip">
      <el-row>
        <el-col :span="12">{{ $t('signin_page.user_name') }}：admin</el-col>
        <el-col :span="12">{{ $t('signin_page.password') }}：123456</el-col>
      </el-row>
      <el-row>
        <el-col :span="12">{{ $t('signin_page.user_name') }}：superadmin</el-col>
        <el-col :span="12">{{ $t('signin_page.password') }}：123456</el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import formatterDate from '@/utils/formatterDate'

const roleArr = [
  { role: '管理员', userName: 'admin', password: '123456' },
  { role: '超级管理员', userName: 'superadmin', password: '123456' }
]

export default {
  name: 'SignIn',
  data: () => ({
    logoUrl: require('@/assets/img/logo.png'),
    signin_form: {
      userName: 'admin',
      password: '123456'
    }
  }),
  computed: {
    signinRules () {
      return {
        userName: [
          {
            required: true,
            message: this.$t('signin_page.username_placeholder'),
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: this.$t('signin_page.password_placeholder'),
            trigger: 'blur'
          },
          {
            min: 6,
            max: 18,
            message: this.$t('signin_page.length_error'),
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    signin (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const currentRole = this.validateRole(this.signin_form)

          if (currentRole) {
            let msg = this.$t('signin_page.signin_success')
            this.$message.success(`${msg} ${currentRole.userName}`)

            currentRole.signinTime = formatterDate(new Date(), 'yyyy-MM-dd HH:mm:ss')

            this.$store.dispatch('signin', {
              currentRole,
              redirect: () => {
                setTimeout(() => {
                  this.$router.push('/')
                }, 2000)
              }
            })
          } else {
            this.$message.error(this.$t('signin_page.name_pwd_error'))
          }
        } else {
          this.$message.error(this.$t('signin_page.rule_error'))
        }
      })
    },

    validateRole (roleObj) {
      const currentRole = roleArr.find(role =>
        roleObj.userName === role.userName &&
        roleObj.password === role.password
      )

      return currentRole
    },

    changeLanguage (command) {
      this.$i18n.locale = command
      localStorage.setItem('LOCAL_LANG', command)
      this.$message.success(this.$t('change_lang_success'))
    }
  }
}
</script>

<style lang="scss" scoped>
#signin {
  position: relative;
  color: #fff;

  .signin_logo,
  .signin_title {
    text-align: center;
  }

  .signin_logo {
    margin: 0 auto;
    width: 100px;
    height: 100px;
  }

  .lang_setting_box {
    position: absolute;
    top: 20px;
    right: 20px;

    span,
    i {
      color: #fff;
      font-size: 16px;
      cursor: pointer;
    }
  }

  .signin_title {
    margin: 20px;
    color: #fff;
    font-weight: 500;
  }

  .el-icon-user-solid,
  .el-icon-lock {
    margin-top: 6px;
    font-size: 30px;
  }

  .signin_btn {
    width: 100%;
    height: 50px;
    font-size: 24px;
  }
}
</style>

<style lang="scss">
#signin {
  .el-form-item__content {
    line-height: 50px;
  }

  .el-input__inner {
    height: 50px;
    background-color: rgba(255, 255, 255, .4);
    color: #fff;
    font-size: 20px;
    text-indent: 10px;
  }
}
</style>
