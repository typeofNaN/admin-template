<template>
  <div id="toolBar">
    <div class="tool_box home">
      <i class="el-icon-house" />
    </div>
    <div class="tool_box clear">
      <i class="el-icon-delete" />
    </div>
    <div class="tool_box full_screen">
      <screen-full />
    </div>
    <div class="tool_box change_lang">
      <el-dropdown @command="changeLanguage">
        <i class="el-icon-guide" />
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="zh">简体中文</el-dropdown-item>
          <el-dropdown-item command="en">English</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <el-popover
      placement="bottom"
      trigger="click"
      width="300"
    >
      <div class="user_box">
        <el-avatar
          class="user_box_icon"
          :src="avatarUrl"
          :size="100"
        />
        <p>{{ $t('setting.signin_time') }}: {{ signinTime }}</p>
        <el-divider>zegobird</el-divider>
      </div>
      <div class="ctrl_btns">
        <el-button
          type="info"
          icon="el-icon-edit"
          size="small"
        >{{ $t('setting.personal_settings') }}</el-button>
        <el-button
          type="warning"
          icon="el-icon-switch-button"
          size="small"
          @click="signout"
        >{{ $t('setting.sign_out') }}</el-button>
      </div>
      <div
        class="tool_box user_info"
        slot="reference"
      >
        <el-avatar
          class="user_icon"
          :src="avatarUrl"
        />
        <span>{{ userName }}</span>
      </div>
    </el-popover>
    <div class="tool_box setting">
      <setting-bar />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import ScreenFull from '@/components/public/screenFull'
import SettingBar from '@/components/public/settingBar'
import avatar from '@/assets/img/avatar.jpg'

export default {
  name: 'ToolBar',
  data: () => ({
    avatarUrl: avatar
  }),
  components: {
    ScreenFull,
    SettingBar
  },
  computed: {
    ...mapGetters(['getCurrentUser']),

    userName () {
      return this.getCurrentUser.userName
    },

    signinTime () {
      return this.getCurrentUser.signinTime
    }
  },
  methods: {
    signout () {
      this.$confirm(this.$t('setting.ask_sign_out'), this.$t('global.tips'), {
        confirmButtonText: this.$t('global.confirm'),
        cancelButtonText: this.$t('global.cancel'),
        type: 'warning'
      }).then(() => {
        this.$message.success(this.$t('setting.sign_out_success'))
        this.$router.replace('/account/signin')
        setTimeout(() => {
          this.$store.dispatch('signout')
        }, 100)
      }).catch(() => {})
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
#toolBar {
  display: flex;
  color: #fff;
  justify-content: flex-end;
  align-items: center;
  width: 290px;

  .tool_box {
    padding: 10px;
    cursor: pointer;
  }

  .change_lang {
    i {
      color: #fff;
      font-size: 16px;
    }
  }

  .user_info {
    display: flex;
    align-items: center;

    .user_icon {
      margin-right: 10px;
      width: 25px;
      height: 25px;
    }
  }
}

.user_box {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-top: 20px;

  p {
    margin-top: 10px;
  }
}

.ctrl_btns {
  display: flex;
  justify-content: space-between;
}
</style>
