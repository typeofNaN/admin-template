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
          size="small"
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
          size="small"
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
      <el-form-item prop="validCode">
        <el-input
          size="small"
          class="valid_code_input"
          v-model="signin_form.validCode"
          :placeholder="$t('signin_page.validcode_placeholder')"
          @keyup.enter.native="signin('signin_form')"
        >
          <i
            slot="prefix"
            class="el-input__icon el-icon-position"
          ></i>
        </el-input>
        <valid-code :value.sync="validCodes"></valid-code>
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
    <div
      v-if="loading"
      class="loading"
    >
      <i class="el-icon-loading"></i>
    </div>
  </div>
</template>

<script>
import utils from '@/utils/tools'
import logo from '@/assets/img/logo.png'
import ValidCode from '@/components/public/validCode'

const roleArr = [
  { role: '管理员', userName: 'admin', password: '123456' },
  { role: '超级管理员', userName: 'superadmin', password: '123456' }
]

export default {
  name: 'SignIn',
  data () {
    return {
      logoUrl: logo,
      signin_form: {
        userName: 'admin',
        password: '123456',
        validCode: ''
      },
      validCodes: '',
      loading: false
    }
  },
  components: {
    ValidCode
  },
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
        ],
        validCode: [
          {
            required: true,
            message: this.$t('signin_page.validcode_placeholder'),
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    signin (formName) {
      let validCode = this.validCodes.toLowerCase()

      if (this.signin_form.validCode.toLowerCase() !== validCode) {
        this.$message.error(this.$t('signin_page.valid_code_error'))
        return
      }
      this.$refs[formName].validate(valid => {
        if (valid) {
          const currentRole = this.validateRole(this.signin_form)

          if (currentRole) {
            this.loading = true

            let msg = this.$t('signin_page.signin_success')
            this.$message.success(`${msg} ${currentRole.userName}`)

            currentRole.signinTime = utils.parseTime(new Date())

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
      return roleArr.find(role =>
        roleObj.userName === role.userName &&
        roleObj.password === role.password
      )
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
  color: #606266;

  .signin_logo,
  .signin_title {
    text-align: center;
  }

  .signin_logo {
    margin: 0 auto;
    width: 70px;
    height: 70px;
  }

  .lang_setting_box {
    position: absolute;
    top: 20px;
    right: 20px;

    span,
    i {
      font-size: 16px;
      cursor: pointer;
    }
  }

  .signin_title {
    margin: 10px;
    font-weight: 500;
    font-size: 28px;
  }

  .el-icon-user-solid,
  .el-icon-lock,
  .el-icon-position {
    margin: 2px;
    font-size: 20px;
  }

  .valid_code_input {
    display: inline-block;
    margin-right: 15px;
    width: calc(100% - 140px);
    vertical-align: middle;
  }

  .signin_btn {
    width: 100%;
    height: 40px;
    font-size: 20px;
    line-height: 40px;
    padding: 0;
    background-color: #08dcd0;
    border-color: #08dcd0;
  }

  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    margin: -20px;
    width: calc(100% + 40px);
    height: calc(100% + 40px);
    border-radius: 20px;
    background-color: rgba(255, 255, 255, .7);

    i {
      font-size: 60px;
      color: #606266;
    }
  }
}
</style>

<style lang="scss">
#signin {
  .el-form-item__content {
    line-height: 40px;
  }

  .el-input__inner {
    height: 40px;
    background-color: rgba(255, 255, 255, .4);
    color: #606266;
    font-size: 18px;
    text-indent: 10px;

    &::-webkit-input-placeholder {
      font-size: 14px;
    }
    &:-moz-placeholder {
      font-size: 14px;
    }
    &::-moz-placeholder {
      font-size: 14px;
    }
    &:-ms-input-placeholder {
      font-size: 14px;
    }
  }
}
</style>
