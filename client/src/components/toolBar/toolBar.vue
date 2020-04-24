<template>
  <div id="toolBar">
    <div
      v-if="!getIsMobile"
      class="tool_box home"
      ref="tool_box0"
      @mouseenter="enter(true, 0)"
      @mouseleave="enter(false, 0)"
    >
      <svg-icon
        class-name="home-icon"
        icon-class="home-white"
      />
    </div>
    <!-- <div
      v-if="!getIsMobile"
      class="tool_box clear"
      ref="tool_box1"
      @mouseenter="enter(true, 1)"
      @mouseleave="enter(false, 1)"
    >
      <svg-icon
        class-name="delete-icon"
        icon-class="delete-white"
      />
    </div> -->
    <div
      v-if="!getIsMobile"
      ref="tool_box2"
      @mouseenter="enter(true, 2)"
      @mouseleave="enter(false, 2)"
      class="tool_box full_screen"
    >
      <screen-full />
    </div>
    <div
      class="tool_box message"
      ref="tool_boxmsg"
      @mouseenter="enter(true, 'msg')"
      @mouseleave="enter(false, 'msg')"
      @click="openNotice"
    >
      <el-badge is-dot>
        <i class="el-icon-message-solid"></i>
      </el-badge>
    </div>
    <div
      class="tool_box change_lang"
      ref="tool_box3"
      @mouseenter="enter(true, 3)"
      @mouseleave="enter(false, 3)"
    >
      <el-dropdown
      trigger="click"
        @command="changeLanguage"
      >
        <span>
          <svg-icon
            class-name="i18n-icon"
            icon-class="i18n-white"
          />
        </span>
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
        ref="tool_box4"
        @mouseenter="enter(true, 4)"
        @mouseleave="enter(false, 4)"
      >
        <el-avatar
          class="user_icon"
          :src="avatarUrl"
        />
        <span>{{ userName }}</span>
      </div>
    </el-popover>
    <div
      class="tool_box setting"
      ref="tool_box5"
      @mouseenter="enter(true, 5)"
      @mouseleave="enter(false, 5)"
    >
      <setting-bar />
    </div>
    <notice ref="notice">
      <span slot="title">这是公告标题</span>
      <p>这是公告内容</p>
    </notice>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import ScreenFull from '@/components/public/screenFull'
import SettingBar from '@/components/public/settingBar'
import Notice from '@/components/messages/notice'
import avatar from '@/assets/img/avatar.jpg'

export default {
  name: 'ToolBar',
  data: () => ({
    avatarUrl: avatar
  }),
  components: {
    ScreenFull,
    SettingBar,
    Notice
  },
  computed: {
    ...mapGetters([
      'getCurrentUser',
      'getIsMobile',
      'getThemeLogoBGColor',
      'getThemeHeaderBGColor'
    ]),

    userName () {
      return this.getCurrentUser.userName
    },

    signinTime () {
      return this.getCurrentUser.signinTime
    }
  },
  watch: {
    getThemeHeaderBGColor (val) {
      for (let i = 0; i < 6; i++) {
        this.$refs['tool_box' + i].style.backgroundColor = val
      }
    }
  },
  methods: {
    openNotice () {
      this.$refs.notice.open()
    },
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
    },

    enter (bool, index) {
      this.$refs['tool_box' + index].style.backgroundColor = bool
        ? this.getThemeLogoBGColor
        : this.getThemeHeaderBGColor
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
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    height: 50px;
    cursor: pointer;

    &.setting,
    &.full_screen {
      padding: 0;
    }

    svg {
      width: 16px;
      height: 16px;
    }
  }

  .change_lang {
    .i18n-icon {
      width: 16px;
      height: 16px;
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

    span {
      font-size: 13px;
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
